// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./ERC721A.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract DefiLotteryV2 is VRFConsumerBaseV2, ERC721A, ReentrancyGuard{

    using Strings for uint256;

    uint public supplyLottery = 2;

    uint public max_mint_allowed = 50;

    uint public priceSale = 0.01 ether;

    string public baseURI;

    string public baseExtension = ".json";

    mapping(address => uint) nftsPerWallet;

    VRFCoordinatorV2Interface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId;

    // Goerli coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 keyHash = 0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 callbackGasLimit = 100000;

    // The default is 3, but you can set this higher.
    uint16 requestConfirmations = 3;

    uint32 numWords =  1;

    uint256[] public s_randomWords;
    uint256 public s_requestId;
    address s_owner;

    bool public lotteryClosed;

    mapping (uint => address) public winners;
    uint public idLottery;

    address payable[] public players;

    address payable private team;

    constructor(uint64 subscriptionId, string memory _theBaseURI, address _team) VRFConsumerBaseV2(vrfCoordinator) ERC721A("DefiLottery", "DFL") {
        team = payable(_team);
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
        baseURI = _theBaseURI;
    }

    function changeMaxMintAllowed(uint _maxMintAllowed) external onlyOwner {
        max_mint_allowed = _maxMintAllowed;
    }

    function changePriceSale(uint _priceSale) external onlyOwner {
        priceSale = _priceSale;
    }

    function changeSupplyLottery(uint _supplyLottery) external onlyOwner {
        supplyLottery = _supplyLottery;
    }

    function setBaseUri(string memory _newBaseURI) external onlyOwner {
        baseURI = _newBaseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setBaseExtension(string memory _baseExtension) external onlyOwner {
        baseExtension = _baseExtension;
    }


    function tokenURI(uint _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "URI query for nonexistent token");

        return string(abi.encodePacked(baseURI, _tokenId.toString(), ".json"));
    }

    function requestRandomWords() external onlyOwner {
        require(lotteryClosed, "Lottery is not closed");
        s_requestId = COORDINATOR.requestRandomWords(
        keyHash,
        s_subscriptionId,
        requestConfirmations,
        callbackGasLimit,
        numWords
        );
    }

    function fulfillRandomWords(
        uint256, 
        uint256[] memory randomWords
    ) internal override {
        s_randomWords = randomWords;
    }

    function toggleLottery() external onlyOwner {
        lotteryClosed = !lotteryClosed;
    }

    function pickWinner() external onlyOwner{
        require(lotteryClosed, "Lottery is not closed");
        uint winner = s_randomWords[0] % players.length;

        players[winner].transfer(address(this).balance / 100 * 80);
        team.transfer(address(this).balance);

        winners[idLottery] = players[winner];
        idLottery++;

        players = new address payable[](0);
        supplyLottery = supplyLottery;
        
    }

    function enter(address _account, uint256 _ammount) external payable nonReentrant {
        require(!lotteryClosed, "Lottery is closed");
        uint price = priceSale; 
        require(msg.value >= price * _ammount, "Not enought funds.");
        require(_ammount <= max_mint_allowed, "You can't mint more than 50 tickets");
        require(totalSupply() + _ammount <= supplyLottery + totalSupply(), "Number of remaining tickets is insufficient");
        players.push(payable(msg.sender));
        _safeMint(_account, _ammount);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    function getWinner(uint _idLottery) external view returns(address) {
        return winners[_idLottery];
    }    

    modifier onlyOwner() {
        require(msg.sender == s_owner, "Not the owner");
        _;
    }

}