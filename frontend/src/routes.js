import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login/'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'

export default function DefaultRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element ={<Login/>}/>
                <Route exact path='/dashboard' element ={<Dashboard/>}/>
                <Route exact path='/register' element ={<Register/>}/>

            </Routes>
        </BrowserRouter>
    )
}