import React from 'react'
import NavBarAdmin from './NavBarAdmin';
import TablaProductos from './TablaProductos'
import '../styles/dashboard.css'

export default function Inventario() {

    function nuevoProducto(e){
        e.preventDefault ();
        window.location.href= "/producto/nuevo";
    }

    return (
        <div className='grande'>
            <div className='nav'>
                <NavBarAdmin/>
            </div>
            
        <div className='gran-contenedor'>
            
            <div className='cajones2'>
                <div className='cajon-inferior'>
                    <h4>Lista de productos</h4>
                    <br></br>
                    <TablaProductos/>

                    <div className='boton' onClick={nuevoProducto}>
                        <h5>Agregar nuevo producto</h5>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}
