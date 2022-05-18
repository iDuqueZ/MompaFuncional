import { Alert, Form, Button } from 'react-bootstrap'
import React, {useState, useEffect} from 'react'
import Nav from './nav'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function PagoExitoso() {
  
    const [idProducto, setIdProducto] = useState ('');
    const [name, setname] = useState('');
    const [direccion,setdireccion] = useState('');
    const [correo,setcorreo] = useState ('');
    const [ciudad, setciudad] = useState ('');  
    const [telefono, setTelefono] = useState('');
    const [producto, setproducto] = useState('');
    const [pagado,setpagado] = useState ('');
    const [metodoPago, setmetodoPago] = useState([]);
    const [metodoPagoSelect, setmetodoPagoSelect] = useState('');
    const [estado, setestado] = useState  ('');
    const [linkCompra, setlinkCompra] = useState ('')
    const [cantProducto, setCantProducto] = useState('');

  
    useEffect(()=>{
      aux()
      
      setpagado('En espera')
      setmetodoPago(['Contra entrega', 'En línea'])
      setmetodoPagoSelect('Contra entrega')
      setestado('En preparación');
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const aux = async() => {
      const valores = window.location.search;
      const urlParams = new URLSearchParams(valores)
      const values = urlParams.values()
    
  
      for (const value of values) {
  
        console.log(value)
        const token = sessionStorage.getItem('token')
        const respuesta = await axios.get('/producto/listar/' + value, {
            headers : {'autorizacion': token}
        })

        console.log(respuesta.data)
        setproducto(respuesta.data.name);
        setIdProducto(respuesta.data._id)
        setlinkCompra(respuesta.data.linkCompra);
        setCantProducto(respuesta.data.cantidad)
      }
    }
  
    const guardar = async(e)=>{
      e.preventDefault()
      const pedido = {
          name,
          direccion,
          correo,
          ciudad,
          telefono,
          metodoPago: metodoPagoSelect,
          estado,
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
      else if (metodoPago === ''){
        Swal.fire({
          icon: 'error',
          title: 'Debe ingresar un metodo de pago',
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
          menosCantidad()
          e.target.reset();
      }

      if (metodoPagoSelect === 'En línea'){
        console.log(linkCompra)
        window.location.href = linkCompra;
      }


      
  }
  
  const menosCantidad = async() =>{

    let menos = cantProducto - 1;
    const id =  idProducto

    const datos = {
      cantidad: menos
    }
    const respuesta = await axios.put('/producto/actualizarEstado/'+ id, datos)
    console.log(respuesta)
  }

  const atras = async(e) => {
    e.preventDefault()
    window.location.href = '/'
}

    return (
      <div>
          <Nav />
          <br></br>
          <br></br>
          <br></br>
          <Alert style={{width: '90%', margin:'auto'}}>
                <h4>¡Importante!</h4>
                <p>Completa el siguiente formulario para registrar tu pedido. Recuerda que la informacion suministrada será utilizada para enviarte el producto, si selecionas pago en línea te redireccionaremos para que realices tu pago.</p>
          </Alert>

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
                <Form.Group className='col-md-6'>
                    <Form.Label>Método de Pago</Form.Label>
                    <Form.Select aria-label="Estado de pago" onChange={(e)=>setmetodoPagoSelect(e.target.value)} >
                    {
                        metodoPago.map(metodoPago =>(
                        <option key={metodoPago}>
                            {metodoPago}
                        </option>
                    ))
                    }
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Producto</Form.Label>
                    <Form.Control type='text' className='form-control required' value={producto} readOnly/>
                </Form.Group>
                <Form.Group></Form.Group>
                <Form.Group className='col-md-1'>
                    <Button type='submit' variant="primary">
                        Agregar
                    </Button>
                </Form.Group>
                <Form.Group className='col-md-1'>
                    <Button type='button' onClick={atras} variant="secondary">
                        Volver
                    </Button>
                </Form.Group>
                </Form>
                            </div>
      </div>
    
  )
}
