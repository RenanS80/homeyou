import Logo from '../../assets/images/brand.svg';
import './styles.css';

function Brand() {
    return(
        <div>
            <img src={Logo} alt="HomeYou" />
        </div>               
    );
}

export default Brand;