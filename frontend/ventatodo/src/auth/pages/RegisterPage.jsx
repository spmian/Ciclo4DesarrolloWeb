import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/styles.css'

export const RegisterPage = () => {

    const navigate = useNavigate();

    const onRegister = () => {
        navigate('/login');
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
                        Crea una cuenta
                    </h2>
                    <p className="text-white-50 mb-5">
                        Ingresa tus datos
                    </p>
                    <div className="form-outline form-white mb-4">
                        <input
                        type="email"
                        className="form-control form-control-lg"
                        />
                        <label className="form-label">Nombre de usuario</label>
                    </div>


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

                    <div className="form-outline form-white mb-4">
                        <input
                        type="password"
                        className="form-control form-control-lg"
                        />
                        <label className="form-label">Confirmar contraseña</label>
                    </div>

                    <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                        onClick={ onRegister }
                    >
                        Registrarse
                    </button>
                    </div>

                    <div>
                    <p className="mb-0">
                        Ya tiene cuenta?{" "}
                        <Link className="text-white-50 fw-bold" to="/login">
                            Iniciar sesión
                        </Link>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )

}
