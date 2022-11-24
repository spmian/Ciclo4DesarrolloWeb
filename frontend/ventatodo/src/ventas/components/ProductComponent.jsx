import React from 'react'
import { Link } from 'react-router-dom'

export const ProductComponent = ({ 
    id,
    nombre,
    descripcion,
    precio,
    ciudad,
    cantidad_unidades,
    usuario,
    categoria
 }) => {

    return (
              
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/1312/1312307.png" alt="Producto" className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{ nombre }</h4>
                            <p className="card-text"> { descripcion } </p>
                            <p className="card-text">{ ciudad }</p>
                            <p className="card-text">{ cantidad_unidades } disponibles</p>
                            <p className="card-text">${ precio } por unidad</p>
                            <Link to={'#'}>Ver producto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}
