import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'; 

export const NavbarComponent = () => {

    const navigate = useNavigate();

    const onLogOut = () => {

        navigate('login', {
            replace: true
        })

    }

    return (
        
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <Link className="navbar-brand" to="/">VentaTodo</Link>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">
                        Inicio
                    </Link>
                    <Link className="nav-item nav-link" to="#">
                        Ofertas
                    </Link>
                    <Link className="nav-item nav-link" to="/categorias">
                        Categorias
                    </Link>
                    <Link className="nav-item nav-link" to="#">
                        Novedades
                    </Link>
                    <Link className="nav-item nav-link" to="#">
                        Rebajas
                    </Link>
                </div>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Usuario
                    </span>
                    <button className="nav-item nav-link btn" onClick={ onLogOut }>
                        Log Out
                    </button>
                </ul>
            </div>
        </nav>

    )

}
