

export default function Footer() {
    return (
        <footer>
    <div id="deuxiemeTrait" />
    <div className="footer-container">
      <div className="footer-presentation-defi">
        <div className="footer-presentation-defi-description">
          <h3 className="footer-presentation-defi-h3">
            <i className="fa-solid fa-ticket" /> DeFi Lottery
          </h3>
          <h4 className="footer-presentation-defi-h4">
            DeFi Lottery, lotterie basée sur la technologie blockchain et
            sécurisée grâce à l&apos;utilisation d&apos;un contrat intelligent
          </h4>
        </div>
      </div>
      <div className="footer-credits">
        <h4>
          <a href="#">Credits</a>
        </h4>
        <h4>
          <a href="FRindex.html/about" hrefLang="#about">
            A propos
          </a>
        </h4>
        <h4>
          <a href="#">Nous contacter</a>
        </h4>
        <h4>
          <a href="#">Whitepaper</a>
        </h4>
        <h4>
          <a href="credits.html">Credits</a>
        </h4>
        {/* <form action="data.php" method="POST" class="footer-form">
              <input style="cursor:text" type="email" name="email" class="footer-form-input" placeholder="E-mail">
              <textarea style="cursor:text" type="textarea" class="footer-form-textarea" placeholder="Votre message"></textarea>
              <button class="footer-form-btn"><a>Envoyer</a></button>
          </form> */}
      </div>
    </div>
    <div id="deuxiemeTrait" />
    <div id="copyrightEtIcons">
      <div id="copyright">
        <span title="Jeunes Entrepreneurs">© 2022, All Rights Reserved</span>
      </div>
      <div id="icons">
        <a href="https://twitter.com/DeFi_Lottery" title="Accédez à notre twitter">
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href="https://www.youtube.com/?hl=FR"
          title="Accédez à notre chaine youtube"
        >
          <i className="fa-brands fa-youtube" />
        </a>
        <a
          href="https://discord.gg/pYHEtRy76K"
          title="Accédez à notre discord communautaire officiel"
        >
          <i className="fa-brands fa-discord" />
        </a>
      </div>
    </div>
  </footer>
    )
}