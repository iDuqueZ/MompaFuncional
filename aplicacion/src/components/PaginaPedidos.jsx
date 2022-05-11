import React from 'react'
import NavBarAdmin from './NavBarAdmin';
import Pedidos from './Pedidos'
import '../styles/dashboard.css'

export default function PaginaPedidos() {

    function nuevoPedido(e){
        e.preventDefault ();
        window.location.href= "/pedido/nuevo";
    }

    return (
        <div className='grande'>
            <div className='nav'>
                <NavBarAdmin/>
            </div>
            
        <div className='gran-contenedor'>
            
            <div className='cajones2'>
                <div className='cajon-inferior'>
                    <h4>Lista de pedidos</h4>
                    <br></br>
                    <Pedidos/>

                    <div className='boton' onClick={nuevoPedido}>
                        <h5>Agregar nuevo pedido</h5>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}