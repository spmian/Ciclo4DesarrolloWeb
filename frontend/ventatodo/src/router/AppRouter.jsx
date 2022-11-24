import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'
import { VentasRouter } from '../ventas'


export const AppRouter = () => {

    return (
        
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='register' element={ <RegisterPage /> } />
                <Route path='/*' element={ <VentasRouter /> } />
            </Routes>
        </>

    )
    
}
