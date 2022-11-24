import React from "react";
import { useNavigate, Link } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogIn = () => {
        navigate('/')
    }

    return (

        <section className="vh-100 gradient-custom div-main">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">
                        Iniciar sesión
                    </h2>
                    <p className="text-white-50 mb-5">
                        Ingresa tu correo y contraseña
                    </p>

                    <div className="form-outline form-white mb-4">
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        />
                        <label className="form-label">Correo Electrónico</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                        <input
                        type="password"
                        className="form-control form-control-lg"
                        />
                        <label className="form-label">Contraseña</label>
                    </div>

                    <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={ onLogIn }
                    >
                        Ingresar
                    </button>
                    </div>

                    <div>
                    <p className="mb-0">
                        No tiene cuenta?{" "}
                        <Link className="text-white-50 fw-bold" to="/register">
                            Registrarse
                        </Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

  );
};
