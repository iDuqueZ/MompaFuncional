import React from 'react'
import BasicList from './basicList'
import Nav from './nav'
import '../styles/listarProductos.css'

export default function ListarProductos() {
    return (
        <div className='pagina'>
            <Nav />
            <div className='contenido'>
                <h1>Nuestros productos</h1>
                <div className='lista'>
                    <BasicList />
                </div>
                <div className='cajon'>

                </div>
            </div>
        </div>
    )
}
