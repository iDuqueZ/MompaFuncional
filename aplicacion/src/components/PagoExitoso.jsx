import { Alert, Form, Button } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import Nav from './nav'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function PagoExitoso() {
  
    const [name, setname] = useState('');
    const [direccion,setdireccion] = useState('');
    const [correo,setcorreo] = useState ('');
    const [ciudad, setciudad] = useState ('');  
    const [telefono, setTelefono] = useState('');
    const [producto, setproducto] = useState('');
    const [pagado,setpagado] = useState ('');
  
    useEffect(()=>{
  
      setproducto(sessionStorage.getItem('nombreProducto'))
  
      setpagado(true)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  
    const guardar = async(e)=>{
      e.preventDefault()
      const pedido = {
          name,
          direccion,
          correo,
          ciudad,
          telefono,
          producto,
          pagado
      }
      
      if(name === ""){
          Swal.fire({
              icon: 'error',
              title: 'Debe ingresar un nombre',
              showConfirmButton: false,
              timer: '1500'
          })
      }
    
      else if (direccion === ""){
          Swal.fire({
            icon: 'error',
            title: 'Debe ingresar una dirección',
            showConfirmButton: false,
            timer: '1500'
        })
      }
    
      else if (ciudad === ""){
        Swal.fire({
          icon: 'error',
          title: 'Debe ingresar una ciudad',
          showConfirmButton: false,
          timer: '1500'
        })
      }
    
      else if (correo === ""){
        Swal.fire({
          icon: 'error',
          title: 'Debe ingresar un correo de contacto',
          showConfirmButton: false,
          timer: '1500'
        })
      }
    
      else if (telefono === ""){
        Swal.fire({
          icon: 'error',
          title: 'Debe ingresar un número telefonico',
          showConfirmButton: false,
          timer: '1500'
        })
      }
    
      else if (telefono < 0){
        Swal.fire({
          icon: 'error',
          title: 'Número telefonico no valido',
          showConfirmButton: false,
          timer: '1500'
        })
      }
  
      else {
          const token = sessionStorage.getItem('token');
          const respuesta = await axios.post('/pedido/nuevo', pedido, {
              headers:{'autorizacion': token}
          })
  
          const mensaje= respuesta.data.mensaje
          console.log(mensaje)
          Swal.fire({
              icon: 'success',
              title: mensaje,
              text: 'Te notificaremos sobre los datos de tu envio',
              showConfirmButton: false,
              timer: '1500'
          })
  
          e.target.reset();
  
      }
  }
  
  
    return (
      <div>
          <Nav />
          <br></br>
          <br></br>
          <br></br>
          <Alert variant='success' style={{width: '90%', margin:'auto'}}>
                <h4>Tu pago fue exitoso</h4>
                <p>Completa el siguiente formulario para registrar tu pedido. Recuerda que la informacion suministrada será utilizada para enviarte el producto</p>
          </Alert>

          <br></br>
          <div className='card-body'>
                <Form onSubmit={guardar} className='row' style={{width: '90%', margin:'auto'}}>
                <Form.Group className='col-md-6'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digita el nombre del remitente' onChange={(e)=>setname(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-md-6'>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digita la dirección de envio' onChange={(e)=>setdireccion(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-md-6'>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Digita la ciudad de destino' onChange={(e)=>setciudad(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-md-6'>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type='email' className='form-control required' placeholder='Digita el correo' onChange={(e)=>setcorreo(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-md-6'>
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type='number' className='form-control required' placeholder='Digita el numero de celular de contacto' onChange={(e)=>setTelefono(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Producto</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Error con producto seleccioando' value={producto} readOnly/>
                </Form.Group>
                <Form.Group className='col-md-1'>
                    <Button type='submit' variant="primary">
                        Agregar
                    </Button>
                </Form.Group>
                </Form>
                            </div>
      </div>
    
  )
}
