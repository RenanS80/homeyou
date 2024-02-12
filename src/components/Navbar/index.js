import User from '../../assets/images/user-icon.svg';
import Heart from '../../assets/images/heart-icon.svg';
import Search from '../../assets/images/search-icon.svg';

import './styles.css';
import Brand from '../Brand';

function Navbar() {
    return(
        <header>
            <div className="container">
                <div className="header__brand">
                    <Brand />
                    <h3>HomeYou</h3>
                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#inicio">Início</a>
                        </li>
                        <li>
                            <a href="#gallery">Galeria</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                    <div className="header__icons">
                        <div>
                            <img src={User} alt="" />
                        </div>
                        <div>
                            <img src={Heart} alt="" />
                        </div>
                        <div>
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;