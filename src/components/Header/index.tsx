import "./styles.css";
import homeIcon from "../../assets/homeIcon.svg";
import { Link, NavLink } from "react-router-dom";

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
                    <NavLink to="/about" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Sobre nós
                    </NavLink>
                </nav>
                <Link to="/home">
                    <img src={homeIcon} alt="Home" />
                </Link>
            </div>
        </header>
    );
}