import React from 'react'
import '../styles/footer.css'
import logo from '../logo.png'

export default function Footer() {
    return (
    <div className='Footer'>
        <div className='Footer-hijo'>
            <div className='razon-social'>
                <div>
                    <img src={logo} alt='logo'></img>
                </div>
                <h4>MOMPA</h4>
                <h5>TIENDA Y ESPÍRITU</h5>
                <h6>Mas que una tienda, somos un espacio seguro para tí</h6>
            </div>
            <div className='redes'>
                <h4>Redes sociales:</h4>
                <div>
                    <i class='bx bxl-instagram-alt'></i>   <a href='https://www.instagram.com/mompa_tye/?hl=es' target="_blank" rel="noopener noreferrer" title='Instagram'>@mompa_tye</a>
                </div>
                <div>
                    <i class='bx bxl-facebook-square'></i>  <a href='https://www.facebook.com/MOMPA-Tienda-Accesorios-431744850996086'  target="_blank" rel="noopener noreferrer" title='Facebook'> Mompa Tienda-Accesorios</a>
                </div>
                <div>
                    <i class='bx bxl-whatsapp' ></i>  <a href='https://wa.me/message/UFML5BY7GHY5M1' target="_blank" rel="noopener noreferrer" title='Whatsapp'>314 6137166</a>
                </div>
            </div>
        </div>
    </div>
    )
}
