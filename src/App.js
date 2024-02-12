import './App.css';
import Button from './components/Button';
import Navbar from './components/Navbar';
import HeroImg from './assets/images/house1.jpg';
import DesignImg from './assets/images/house2.jpg';
import Gallery1 from './assets/images/house3.jpg';
import Gallery2 from './assets/images/house4.jpg';
import Gallery3 from './assets/images/house5.jpg';
import Brand from './components/Brand';

function App() {
  return (
    <>
        <Navbar />

        <section className="hero">
          <div className="container">
            <div className="hero__text">
              <h1>Ajudar você a encontrar o melhor conforto, é nossa prioridade.</h1>
              <p>Encontre uma variedade de propriedades que combinam com você. Esqueça todas as dificuldades em encontrar uma residência</p>
              <div className="hero__btn-group">
                <Button type="primary" />
                <a href="#" role="button" className="btn--underlined">Mais sobre nós</a>
              </div>
            </div>
            <div className="hero__img">
              <img src={HeroImg} alt="" />
            </div>
          </div>
        </section>

        <section className="design">
          <div className="container">
            <div className="design__img">
              <img src={DesignImg} alt="" />
              <div></div>
            </div>
            <div className="design__text">
              <div>
                <h2>Design Minimalista</h2>
                <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
              </div>
              <a href="#" role="button" className="btn--underlined">Quero saber mais sobre os designs</a>
            </div>
          </div>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="gallery__text">
              <h2>Galeria</h2>
              <p>Se você está entediado com a aparência da decoração de interiores da casa comuns, trabalhamos com designs diferentes e inovadores.</p>
            </div>
            <div className="gallery__img">
              <img src={Gallery1} alt="" />
              <img src={Gallery2} alt="" />
              <img src={Gallery3} alt="" />
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contato</h2>
            <p>Interessado em entrar em contato com um de nossos profissionais?</p>
            <Button type="secondary" />
          </div>
        </section>

        <footer>
          <div className="container">
            <Brand />
            <div className="footer__content">
              <div>
                <p>Produtos</p>
                <div className="footer__links">
                  <a href="">Mobília</a>
                  <a href="">Segurança</a>
                  <a href="">Design Interior</a>
                </div>
              </div>
              <div>
                <p>Mais Informações</p>
                <div className="footer__links">
                  <a href="">Contato</a>
                  <a href="">Sobre nós</a>
                  <a href="">Termos e Condições</a>
                </div>
              </div>
              <div>
                <p>Redes Sociais</p>
                <div className="footer__links">
                  <a href="">Pinterest</a>
                  <a href="">Facebook</a>
                  <a href="">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>

  );
}

export default App;
