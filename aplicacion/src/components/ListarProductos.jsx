import React from 'react'
import BasicList from './basicList'
import Nav from './nav'
import '../styles/listarProductos.css'
import Productos from './Productos'
import Divider from '@mui/material/Divider';
import Footer from './Footer'


export default function ListarProductos() {


    return (
        <div className='pagina'>
            <Nav />
            <div className='contenido'>
                <h2>Nuestros productos</h2>
                <Divider />
                <div className='contenido-hijo'>
                    <div className='lista'>
                        <BasicList />
                    </div>
                    <div className='cajon'>
                        <Productos />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
