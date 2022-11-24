import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryComponent = ({ id, nombre }) => {

    return (
        
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/3843/3843517.png" alt="Categoria" className="card-img" />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h4 className="card-title">{ nombre }</h4>
                            <Link to={'#'}>Ver productos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}
