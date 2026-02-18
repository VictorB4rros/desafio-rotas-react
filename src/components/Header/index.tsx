import "./styles.css";
import homeIcon from "../../assets/homeIcon.svg";

export default function Header() {

    return (
        <header>
            <div className="container app-header">
                <nav className="app-nav">
                    <div>
                        Início
                    </div>
                    <div>
                        Produtos
                    </div>
                    <div>
                        Sobre nós
                    </div>
                </nav>
                <div>
                    <img src={homeIcon} alt="Home" />
                </div>
            </div>
        </header>
    );
}