import React from 'react'
import '../styles/inicio.css'
import mapa from '../resource/Map.png'
import card1 from '../resource/card1.jpg'
import card2 from '../resource/card2.jpg'
import card3 from '../resource/card3.jpg'
import ofrecemos from '../resource/ofrecemos.jpg'


export default function contInicio() {
  return (
    <div className='contInicio'>

      <div className='somos'>
        <div className='article'>
            <h3>¿Quienes somos?</h3>
            <p><strong>MOMPA tienda y espíritu</strong> es una microempresa móvil en crecimiento, que comercializa principalmente productos artesanales de la cultura afro y del pacifico colombiano. Buscamos la visibilidad de las costumbres de nuestros antepasados y la creación de una comunidad más equitativa e inclusiva en nuestras regiones, por eso también contamos con otros servicios de concientización con un amplio trabajo de interés social. </p>
        </div>
        <div className='ilustracion'>
          <img src={mapa} alt='Mapa'></img>
        </div>
      </div>

      <div className='Eventos'>
        <div><h3>Eventos en los que hemos estado</h3></div>
        <div className='cajon-event'>
          <div className="card">
            <img src={card1} className="card-img-top" alt="Yubarta"></img>
            <div className="card-body">
              <p className="card-text">Mompa se encuentra agradecida por haber participado de este hermoso espacio, @expoyubartabuenaventura fue un ejercicio muy fructífero para los emprendimientos de nuestro territorio. Seguimos creciendo y apoyándonos en comunidad, más que una tienda un espacio seguro 🤎🧡Agradecemos a cada uno de ustedes que ha convertido esto en una realidad 🧡🤎</p>
            </div>
          </div>
          <div className="card">
            <img src={card2} className="card-img-top" alt="Petronio"></img>
            <div className="card-body">
              <p className="card-text">@artelibrefest es una apuesta a la reactivación de Buenaventura, es un espacio donde los emprendedores, artistas y diferentes gremios de la ciudad, pueden mostrar todo lo positivo y bueno. Buenaventura es una ciudad de Talento Libre ✨🔰

              MOMPA tiene la hermosa oportunidad de participar y continuaremos recolectando sonrisas de las personas que más que adquirir productos, nos acompañan ✨🤎 ¡gracias por estar!🎉🤎</p>
            </div>
          </div>
          <div className="card">
            <img src={card3} className="card-img-top" alt="Buenaventura"></img>
            <div className="card-body">
              <p className="card-text">¡Mompa en Petronio!🤎
              Todo esto ha sido un sueño construido, y la felicidad es un me invade no puedo explicarla, gracias por creer en MOMPA, es un proyecto hermoso y tiene todo mi amor en el 🤎 <br/>
              ¡Estamos en el Pabellón <br/>de Cali Afro!❤️<br/><br/>

              #petronio #mompa #afro</p>
            </div>
          </div>
        </div>
      </div>

      <div className='Publicidad'>
        <article className='nuestrosProductos'>
          <div className='texto'>
            <h3>Conoce lo que te ofrecemos</h3>
            <p>Velamos para que cada persona se sienta libre de ser como ellos mismos, por eso te brindamos los mejores productos de moda para que puedas lucir tu mejor versión. En MOMPA encontraras desde vestidos, tops, faldas y camisas; hasta gafas, anillos y aretes.<br/>Más que una tienda, un espacio seguro para ti, para ser 🤎
<br/><br/> Dime ¿Qué esperas para verte radiante?</p>
          </div>
          <div>
            <img src={ofrecemos} alt='publicidad'></img>
          </div>
        </article>
      </div>

    </div>
  )
}
