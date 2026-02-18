import "./styles.css";
import homeIcon from "../../assets/homeIcon.svg";
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <div className="container app-header">
                <nav className="app-nav">
                    <NavLink to="/home" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Início
                    </NavLink>
                    <NavLink to="/products" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Produtos
                    </NavLink>
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