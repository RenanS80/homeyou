import Brand from '../Brand';
import './styles.css';

function Footer() {
    return(
        <footer>
        <div className="container">
          <Brand />
          <div className="footer__content">
            <div>
              <p>Produtos</p>
              <div className="footer__links">
                <a href="#">Mobília</a>
                <a href="#">Segurança</a>
                <a href="#">Design Interior</a>
              </div>
            </div>
            <div>
              <p>Mais Informações</p>
              <div className="footer__links">
                <a href="#contact">Contato</a>
                <a href="#">Sobre nós</a>
                <a href="#">Termos e Condições</a>
              </div>
            </div>
            <div>
              <p>Redes Sociais</p>
              <div className="footer__links">
                <a href="#">Pinterest</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;