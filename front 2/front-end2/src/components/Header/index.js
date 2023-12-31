import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import "./header.css";

export default function Header() {

    const location = useLocation();
    const url = location.pathname;
    const showButton = url !== "/cadastro";
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li> <Link class="nav-link active" to='/'>Home</Link> </li>
                    <li> <Link class="nav-link active" to='/checkout'>Ver Carrinho</Link> </li>
                    <li> <Link class="nav-link active" to='/cadastro'>Meu Perfil</Link> </li>
                    <li> <Link class="nav-link active" to='/login'>Login</Link> </li>
                    
            
                </ul>
                <div>
                {showButton && (
                    <Link
                        className="nav-link" to='/cadastro'>
                        <button> Cadastrar</button>
                    </Link>
                )}

            </div>
            </header>
        </div>
    )
}