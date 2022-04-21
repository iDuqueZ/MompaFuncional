import React from 'react'
import ListAdmin from './ListAdmin'
import TablaProductos from './TablaProductos'
import '../styles/dashboard.css'

export default function Inventario() {

    function nuevoProducto(e){
        e.preventDefault ();
        window.location.href= "/producto/nuevo";
    }

    return (
        <div className='grande'>
            <div className='encabezado'>
                <h3>INVENTARIO</h3>
            </div>
        <div className='gran-contenedor'>
            <div className='menu'>
                <br/><br></br>
                <ListAdmin />
            </div>
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
