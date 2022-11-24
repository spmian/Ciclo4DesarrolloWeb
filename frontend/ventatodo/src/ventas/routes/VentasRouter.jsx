import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FooterComponent, NavbarComponent } from '../../ui'
import { ProductPage, ProductsPage, CategoryPage } from '../pages'
import '../styles/styles.css'

export const VentasRouter = () => {

    return (
        
        <div className="div-background">
            <NavbarComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={ <ProductsPage /> } />
                    <Route path="productos" element={ <ProductPage /> } />
                    <Route path="categorias" element={ <CategoryPage /> } />
                </Routes>
            </div>
            <FooterComponent />
        </div>

    )

}
