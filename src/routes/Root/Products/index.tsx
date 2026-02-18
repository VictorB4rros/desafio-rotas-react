import { NavLink, Outlet } from "react-router-dom";
import "./styles.css";

export default function Products() {

    return (
        <main className="container">
            <div className="product-nav-container mb20">
                <nav className="product-nav">
                    <NavLink to="/products/computers" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Computadores
                    </NavLink>
                    <NavLink to="/products/electronics" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Eletrônicos
                    </NavLink>
                    <NavLink to="/products/books" className={({ isActive }: any) => isActive ? "bold" : ""} >
                        Livros
                    </NavLink>
                </nav>
            </div>
            <Outlet />
        </main>
    );
}