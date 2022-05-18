import React from 'react'
import Nav from './nav'
import { Alert } from 'react-bootstrap'

export default function Pagina404() {
  return (
      <div>
          <Nav />
          <br></br>
          <br></br>
          <br></br>
          <div>

          <Alert variant='danger' style={{width: '90%', margin:'auto'}}>
                <h4>¡Página no desarrollada!</h4>
                <p>MOMPA ONLINE todavía se encuentra en desarrollo, en próximas actualizaciones podrás contar con esta sección. Pulsa en el logo para volver a la página de inicio.</p>
          </Alert>
          </div>
      </div>
    
  )
}
