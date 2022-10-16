import Image from 'next/image'

export default function SectionPresentationBR() {
    return(
      <section id="presentation">
      <div id="about">
        <div className="about-textcontainer">
          <div className="textTitleLeft">
            <h2>Explicação do projeto</h2>
          </div>
          <div className="textParagrapheLeft">
            <p>
            DeFi Lottery é uma loteria <strong>100% Descentralizada</strong>,
            usamos tecnologias{" "}
              <strong>BLOCKCHAIN ​​​​e NFTs</strong>.NFTs DeFi Lottery{" "}
              <strong>NÃO SÃO simples png,jpeg</strong>,são{" "}
              <strong>bilhetes de entrada</strong> para uma loteria semanal! Após o sorteio, você pode manter <strong>SEUS NFTs, SEUS tíquetes</strong>
              .Assim que um vencedor for sorteado <strong>&quot;automaticamente&quot;</strong>,
              e de forma que{" "}
              <strong>NINGUÉM PODE INFLUENCIAR O RESULTADO</strong>, lo vencedor receberá seus ganhos <strong>AUTOMATICA E DIRETAMENTE</strong>{" "}
              em sua carteira !
            </p>
          </div>
        </div>
        <div className="about-imgcontainer">
          <Image
            src="/image/explication-image.png"
            className="presentationImg1"
            alt="winner of defi lottery cash prize easy money "
            width={800}
            height={400}
          />
        </div>
      </div>
      <div id="progress">
        <div className="progress-textcontainer">
          <div className="textTitleRight">
            <h2>O curso</h2>
          </div>
          <div className="textParagrapheRight">
            <p>
            O sorteio acontece todas as sextas-feiras às (horário) UTC+1, O vencedor é sorteado por meio de um{" "}
              <strong className="linkText">
                <a href="#smartcontract">contrato inteligente</a>
              </strong>
              . As NFTs de hortelã durante a semana se tornarão obsoletas após o sorteio e uma nova coleção estará disponível no{" "}
              <strong className="linkText">
                <a href="#">market place</a>
              </strong>
              . O vencedor será nomeado no site (
              <strong className="linkText">
                <a href="#">aqui</a>
              </strong>
              ) e no discord no momento do sorteio.
            </p>
          </div>
        </div>
        <div className="progress-imgcontainer">
          <Image
            src="/image/weeklyroadmap-image.png"
            alt="road map project of defi lottery money loto"
            className="roadmap-textIllustration"
            width={900}
            height={500}
          />
        </div>
      </div>
      <div id="smartcontract">
        <div className="smartcontract-textcontainer">
          <div className="textTitleLeft">
            <h2>O contrato inteligente</h2>
          </div>
          <div className="textParagrapheLeft">
            <p>
            O blockchain e a web 3.0 nos oferecem a possibilidade de garantir a segurança de uma loteria confiável e segura através do uso de um contrato inteligente. O contrato inteligente será implantado, o dinheiro das moedas será{" "}
              <strong>seguro</strong> sno contrato inteligente. Para garantir total transparência, o código do contrato inteligente será
              <strong>acessível a todos</strong> para que você possa decifrar essas linhas de código para garantir que não haja espaço para fraudes. O sorteio para o vencedor também será feito no contrato inteligente com a função de hash keccack256,{" "}
              <strong>que não podemos controlar/modificar</strong>
              O sorteio será baseado no <strong>TOTAL HASHARD</strong>
            </p>
          </div>
        </div>
        <div className="smartcontract-imgcontainer">
          <Image
            src="/image/smartcontract-image.png"
            alt="security smart contract developper blockchain work on security defi lottery"
            className="imgsmartcontract"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div id="mintnft">
        <div className="mintnft-textcontainer">
          <div className="textTitleRight">
            <h2>A hortelã do NFT</h2>
          </div>
          <div className="textParagrapheRight">
            <p>
            O NFT Mint será feito em <strong>nosso site</strong> na seção do mercado NFT que você pode encontrar logo acima O dinheiro da moeda será imediatamente armazenado no contrato inteligente após sua compra, sem intermediário, e seus fundos estarão{" "}
              <strong>seguros</strong>
              Você pode ver isso no contrato inteligente, só podemos pagar um ao outro nossas respectivas ações usando{" "}
              <strong>PaymentSplitter</strong>, o que facilitará nossa dívida...
            </p>
          </div>
        </div>
        <div className="mintnft-imgcontainer">
          <Image
            src="/image/mint-image.png"
            alt="mint nft ticket defi lottery for win cash prize"
            className="imgmintnft"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
    )
}