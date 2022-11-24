import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CategoryComponent } from '../components'

export const CategoryPage = () => {

    const [categorias, setCategorias] = useState([])

    useEffect( () => {

        Axios.get("https://venta-todo-api.herokuapp.com/api/categoria/")
        .then(response => {
            setCategorias(response.data)
        })

    }, [setCategorias]);

    return (
        
        <section className="mt-auto vh-100 gradient-custom">
            <h1 className="mt-4">Categorias</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3">
                {
                    categorias.map( (categs) => (
                        <CategoryComponent key={categs.id} {...categs}/>
                    ) )
                }
            </div>
        </section>

    )

}
