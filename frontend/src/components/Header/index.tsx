import logo from '../../assets/img/logo.svg';
import './styles.css';
function Header() {
    return (

        <header>
            <div className="acad-logo-container">
                <img src={logo} alt="Acad" />
                <h1>Projeto Acad</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.herbertonlauro.com">@herberton.dev</a>
                </p>
            </div>
        </header>

    )
}

export default Header;