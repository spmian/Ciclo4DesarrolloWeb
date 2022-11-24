import React from 'react'
import { ProductComponent } from '../components'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export const ProductsPage = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {

        Axios.get("https://venta-todo-api.herokuapp.com/api/productos/")
        .then(response => {
            setProductos(response.data)
        })

    }, [setProductos]);

    return (
        
        <section className="mt-auto vh-100 gradient-custom">
            <h1 className="mt-4">Productos</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3">
                {
                    productos.map( (prod) => (
                        <ProductComponent key={prod.id} {...prod}/>
                    ))
                }
            </div>
        </section>

    )
    
}
