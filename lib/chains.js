const supportedChains = [  
    {
        name: "Polygon Mumbai",
        short_name: "mum",
        chain: "MATIC",
        network: "mumbai",
        chain_id: 80001,
        network_id: 80001,
        rpc_url: "https://rpc-mumbai.maticvigil.com/",
        native_currency: {
          symbol: "MATIC",
          name: "Mumbai",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
      {
        name: "Polygon Mainnet",
        short_name: "pol",
        chain: "MATIC",
        network: "mainnet",
        chain_id: 137,
        network_id: 137,
        rpc_url: "https://rpc-mainnet.maticvigil.com/",
        native_currency: {
          symbol: "MATIC",
          name: "Polygon",
          decimals: "18",
          contractAddress: "",
          balance: ""
        }
      },
  ]
  
  export default supportedChains
  