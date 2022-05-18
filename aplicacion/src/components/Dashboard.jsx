import React, { useState, useEffect } from 'react'
import TablaPedidos from './TablaPedidos'
import NavBarAdmin from './NavBarAdmin'
import Grafic from './Grafic'
import axios from 'axios'
import '../styles/dashboard.css'

export default function Dashboard() {

    const [cantMes, setcantMes] = useState(0)

    useEffect(()=>{
        obtenerMes();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const obtenerMes = async() => {
        const token = sessionStorage.getItem('token')
        const respuesta = await axios.get('/pedido/mes', {
            headers : {'autorizacion': token}
        }) 

        console.log(respuesta.data)
        calcularCantMes(respuesta.data);
    }

    const calcularCantMes = (datos) => {

        
        const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        const getLongMonthName = function(fecha) {
            return monthNames[fecha.getMonth()]; 
        }

        let esteMes = getLongMonthName(new Date(Date.now()))
        console.log(esteMes)

        for(const [key, value] of Object.entries(datos)){
            if (esteMes === key){
                cambiarMes(value)
            }
        }

        
    }

    const cambiarMes = (valor) => {
        setcantMes(valor)
    }


    return (
        <div className='grande'>
            <div className='nav'>
                <NavBarAdmin/>
            </div>
            
        <div className='gran-contenedor'>
            <div className='cajones'>
                <div className='cajon-superior'>
                    <div className='grafica'>
                        <Grafic />
                    </div>
                    <div className='datos'>
                        <h4>Número de pedidos este mes</h4>
                        <h3>{cantMes}</h3> 
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
