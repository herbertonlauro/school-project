import logo from '../../assets/img/logo2.svg';
import './styles.css';
function Header() {
    return (

        <header>
            <div className="acad-logo-container">
                <img src={logo} alt="Projeto aprendizado React" />
                <h1>Projeto aprendendo React </h1>
                
                <p>
                   Desenvolvido em curso extra por
                    <a href="https://www.herbertonlauro.com">@herberton.dev</a>
                </p>
            </div>
            
        </header>

    )
}

export default Header;