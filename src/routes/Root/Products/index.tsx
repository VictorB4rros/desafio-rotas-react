import { Outlet } from "react-router-dom";
import "./styles.css";

export default function Products() {

    return (
        <main className="container">
            <div className="product-nav-container mb20">
                <nav className="product-nav">
                    <div>
                        Computadores
                    </div>
                    <div>
                        Eletrônicos
                    </div>
                    <div>
                        Livros
                    </div>
                </nav>
            </div>
            <Outlet />
        </main>
    );
}