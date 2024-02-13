import { NavLink } from 'react-router-dom';

import Button from './components/Button';
import Navbar from './components/Navbar';
import House1 from './assets/images/house1.jpg';
import House2 from './assets/images/house2.jpg';
import House3Lg from './assets/images/house3-lg.jpg';
import House3Sm from './assets/images/house3-sm.jpg';
import House4Lg from './assets/images/house4-lg.jpg';
import House4Sm from './assets/images/house4-sm.jpg';
import House5Lg from './assets/images/house5-lg.jpg';
import House5Sm from './assets/images/house5-sm.jpg';
import Footer from './components/Footer';

import './App.css';

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
                <NavLink to="#" role="button" className="btn--underlined">Mais sobre nós</NavLink>
              </div>
            </div>
            <div className="hero__img">
              <img src={House1} alt="Casa" />
            </div>
          </div>
        </section>

        <section id="design">
          <div className="container">
            <div className="design__img">
              <img src={House2} alt="" />
              <div></div>
            </div>
            <div className="design__text">
              <div>
                <h2>Design Minimalista</h2>
                <p>Móveis apenas essenciais e com design moderno, além de revestimentos bonitos e em cores neutras para manter a casa sempre com um estilo clean e suave.</p>
              </div>
              <NavLink to="#" role="button" className="btn--underlined">Quero saber mais sobre os designs</NavLink>
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
              <picture className="">
                <source srcSet={House3Lg} media="(min-width: 1240px)" />
                <img src={House3Sm} alt="Casa" />
              </picture>
              <picture className="">
                <source srcSet={House4Lg} media="(min-width: 1240px)" />
                <img src={House4Sm} alt="Casa" />
              </picture>
              <picture className="">
                <source srcSet={House5Lg} media="(min-width: 1240px)" />
                <img src={House5Sm} alt="Casa" />
              </picture>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>Contato</h2>
            <p>Interessado em entrar em contato com um de nossos profissionais?</p>
            <div>
              <Button type="secondary" />
            </div>
          </div>
        </section>

       <Footer />
    </>

  );
}

export default App;
