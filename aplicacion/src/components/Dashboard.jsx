import React from 'react'
import ListAdmin from './ListAdmin'
import TablaPedidos from './TablaPedidos'
import Grafic from './Grafic'
import '../styles/dashboard.css'

export default function Dashboard() {
    return (
        <div className='grande'>
            <div className='encabezado'>
                <h3>DASHBOARD</h3>
            </div>
        <div className='gran-contenedor'>
            <div className='menu'>
                <br/><br></br>
                <ListAdmin />
            </div>
            <div className='cajones'>
                <div className='cajon-superior'>
                    <div className='grafica'>
                        <Grafic />
                    </div>
                    <div className='datos'>
                        <h4>Número de pedidos este mes</h4>
                        <h3>12</h3>
                        <h4>Valor de ventas este mes</h4>
                        <h3>$0.000</h3>
                    </div>
                </div>
                <div className='cajon-inferior'>
                    <h6>Ultimos pedidos</h6>
                    <TablaPedidos />
                </div>
            </div>
            
        </div>
        </div>
    )
}
