import './styles.css';

function Button({type}) {
    return(
        <a href="#contato" role="button" className={type === "primary" ? "btn btn--primary" : "btn btn--secondary"}>Entre em contato</a>
    );
}

export default Button;