import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import NavBarAdmin from './NavBarAdmin'
import Swal from 'sweetalert2'
import axios from 'axios'
import '../styles/dashboard.css'

export default function NuevoPedido(){
    const [name, setname] = useState('');
  const [direccion,setdireccion] = useState('');
  const [correo,setcorreo] = useState ('');
  const [ciudad, setciudad] = useState ('');  
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [estado, setestado] = useState  ([]);
  const [estadoSelect, setestadoSelect] = useState  ([]);
  const [producto, setproducto] = useState([]);
  const [productoSelect, setproductoSelect] = useState([]);
  const [pagado,setpagado] = useState ('');

  useEffect(()=>{
    obtenerNombresProductos();

    setestado(['En preparación', 'Enviado', 'Entregado'])
    setestadoSelect('En preparación');

    setproducto(['Ninguno'])
    setproductoSelect('Ninguno')

    setpagado(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const obtenerNombresProductos = async()=> {
    const token = sessionStorage.getItem('token')
        const respuesta = await axios.get('/producto/listar', {
            headers : {'autorizacion': token}
        })
        

        const aux = respuesta.data
        
        const nombresProductos = aux.map(function(nombres) {
          return nombres.name;
        })

        setproducto(nombresProductos)
      
  }

  const guardar = async(e)=>{
    e.preventDefault()
    const pedido = {
        name,
        direccion,
        correo,
        ciudad,
        telefono,
        fecha,
        estado: estadoSelect,
        producto: productoSelect,
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
            showConfirmButton: false,
            timer: '1500'
        })

        e.target.reset();

    }
}

const atras = async(e) => {
    e.preventDefault()
    window.location.href = '/Pedidos'
}

    return (
        <div className='grande'>
            <div className='nav'>
                <NavBarAdmin/>
            </div>
            
        <div className='gran-contenedor'>
            
            <div className='cajones2'>
                <div className='cajon-inferior'>
                <div className='card-body'>
                        <h6>Agregar nuevo pedido</h6>
            <div className='card-body'>
                <Form onSubmit={guardar} className='row'>
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
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type='date' className='form-control required' placeholder='Digita el numero de celular de contacto' onChange={(e)=>setFecha(e.target.value)}/>
                </Form.Group>
                <Form.Group className='col-md-6'>
                    <Form.Label>Estado</Form.Label>
                    <Form.Select aria-label="Seleccionar estado" onChange={(e)=>setestadoSelect(e.target.value)} >
                    {
                        estado.map(estado =>(
                        <option key={estado}>
                            {estado}
                        </option>
                    ))
                    }
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Producto</Form.Label>
                    <Form.Select aria-label="Seleccionar nombre del producto" onChange={(e)=>setproductoSelect(e.target.value)}>
                    {
                        producto.map(producto =>(
                        <option key={producto}>
                            {producto}
                        </option>
                    ))
                    }
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pagado</Form.Label>
                    <Form.Control type='text' className='form-control required' placeholder='Si' value='si' readOnly/>
                </Form.Group>

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
                </div>
            </div>
            
        </div>
        </div>
    )

}