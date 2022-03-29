import React from "react"
import '../styles/nav.css'
import imglogo from '../logo.png'

function Nav(){
    function home(e) {
        e.preventDefault();
        window.location.href="/";
    }


    return( 
        <div className="barra-nav">
            <nav>
                <div className="logo" onClick={home}>
                    <img className="imglogo" src={imglogo} alt="logo" />
                    <h3>MOMPA</h3>
                </div>
                <div className="links">
                    <div>
                        <a href="/">Inicio</a>
                        <a href="/producto/listar">Productos</a>
                        <a href="index.html">Servicios</a>
                        <a href="index.html">Nosotros</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav