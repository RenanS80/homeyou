import { Link } from 'react-router-dom';

import Brand from '../Brand';
import User from '../../assets/images/user-icon.svg';
import Heart from '../../assets/images/heart-icon.svg';
import Search from '../../assets/images/search-icon.svg';

import './styles.css';

function Navbar() {

    const anchorNavigate = (id) => {
        window.location.href = `#${id}`;
    };
    
    return(
        <header>
            <div className="container">
                <div className="header__brand">
                    <Brand />
                    <h3>HOMEYOU</h3>
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="#">Início</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => anchorNavigate('gallery')}>Galeria</Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => anchorNavigate('contact')}>Contato</Link>
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