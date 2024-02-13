import { Link } from "react-router-dom";
import Brand from "../Brand";

import "./styles.css";

function Footer() {
  
  const anchorNavigate = (id) => {
    window.location.href = `#${id}`;
  };

  return (
    <footer>
      <div className="container">
        <Brand />
        <div className="footer__content">
          <div>
            <p>Produtos</p>
            <div className="footer__links">
              <Link to="#">Mobília</Link>
              <Link to="#">Segurança</Link>
              <Link to="#" onClick={() => anchorNavigate("design")}>Design Interior</Link>
            </div>
          </div>
          <div>
            <p>Mais Informações</p>
            <div className="footer__links">
              <Link to="#" onClick={() => anchorNavigate("contact")}>
                Contato
              </Link>
              <Link to="#">Sobre nós</Link>
              <Link to="#">Termos e Condições</Link>
            </div>
          </div>
          <div>
            <p>Redes Sociais</p>
            <div className="footer__links">
              <Link to="#">Pinterest</Link>
              <Link to="#">Facebook</Link>
              <Link to="#">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
