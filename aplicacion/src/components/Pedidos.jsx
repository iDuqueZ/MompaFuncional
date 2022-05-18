import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem} from '@mui/x-data-grid-pro';
import axios from 'axios'
import Swal from 'sweetalert2';
import { Modal, Button, Form} from 'react-bootstrap'

export default function DataTable() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  
  const [pedido, setpedido] = useState([]);
  const [idpedido, setidpedido] = useState('');
  const [name, setname] = useState('');
  const [direccion,setdireccion] = useState('');
  const [correo,setcorreo] = useState ('');
  const [ciudad, setciudad] = useState ('');  
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [metodoPago, setmetodoPago] = useState([]);
  const [metodoPagoSelect, setmetodoPagoSelect] = useState('');
  const [estado, setestado] = useState  ([]);
  const [estadoSelect, setestadoSelect] = useState  ([]);
  const [producto, setproducto] = useState([]);
  const [productoSelect, setproductoSelect] = useState([]);
  const [pagado,setpagado] = useState ([]);
  const [pagadoSelect,setpagadoSelect] = useState ('');
  
  useEffect(()=>{
    obtenerPedidos();
    obtenerNombresProductos();

    setestado(['En preparación', 'Enviado', 'Entregado'])
    setestadoSelect('En preparación');

    setproducto(['Ninguno'])
    setproductoSelect('Ninguno')

    setpagado(['En espera', 'Confirmado', 'Fallido'])
    setpagadoSelect('En espera')

    setmetodoPago(['Contra entrega', 'En linea'])
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

  const obtenerPedidos = async()=>{

    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/pedido/listar', {
        headers : {'autorizacion': token}
    })
    

    setpedido(respuesta.data)
    console.log(pedido)
}

const obtenerPedido = (idParametro) => async(event)=>{
  event.stopPropagation();
  event.preventDefault();
  setShow(true)
  const id = idParametro
  const token = sessionStorage.getItem('token')
  const respuesta = await axios.get('/pedido/listar/' + id, {
      headers : {'autorizacion': token}
  })

  setidpedido(respuesta.data._id);
  setname(respuesta.data.name);
  setdireccion(respuesta.data.direccion);
  setciudad(respuesta.data.ciudad);
  setcorreo(respuesta.data.correo);
  setTelefono(respuesta.data.telefono);
  setFecha(respuesta.data.fecha);
  setestadoSelect(respuesta.data.estado);
  setproductoSelect(respuesta.data.producto);
  setmetodoPagoSelect(respuesta.data.metodoPago);
  setpagadoSelect(respuesta.data.pagado);
}

const actualizar = async(e)=> {
  e.preventDefault();
  const id = idpedido
  const token = sessionStorage.getItem('token')
  const pedido ={
    name,
    direccion, 
    ciudad,
    correo, 
    telefono, 
    fecha,
    metodoPago: metodoPagoSelect,
    estado: estadoSelect,
    producto: productoSelect,
    pagado: pagadoSelect
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
  else{
    const respuesta = await axios.put('/pedido/actualizar/'+ id, pedido, {
        headers : {'autorizacion': token}
    })

    const mensaje = respuesta.data.mensaje;
    console.log(mensaje)
    obtenerPedidos();

    Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: '1500'
    })

    setShow(false)
  }
}

const MensajeConfirmacion =  (idParametro) => async(event)=>{
  event.stopPropagation();
  event.preventDefault();
  setShow2(true);
  setidpedido(idParametro)
}


const eliminar = async(event)=>{
  event.preventDefault();
  const id = idpedido
  const token = sessionStorage.getItem('token')
  const respuesta = await axios.delete('/pedido/eliminar/' + id, {
      headers : {'autorizacion': token}
  })

  const mensaje = respuesta.data.mensaje;
      console.log(mensaje)
      obtenerPedidos();

      Swal.fire({
          icon: 'success',
          title: mensaje,
          showConfirmButton: false,
          timer: '1500'
      })

      setShow2(false)
}

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'direccion', headerName: 'Dirección', width: 130 },
    { field: 'ciudad',headerName: 'Ciudad', width: 110, },
    { field: 'correo', headerName: 'Email', width: 110, },
    { field: 'telefono', headerName: 'Celular', type: 'string', width: 110, },
    { field: 'fecha', headerName: 'Fecha', type: 'date',  width: 110,},
    { field: 'metodoPago', headerName: 'Método', width: 110, },
    { field: 'estado', headerName: 'Estado', width: 110, },
    { field: 'producto', headerName: 'Producto', width: 140, },
    { field: 'pagado', headerName: 'Pago', width: 80,},
    {
    field: 'action',
    headerName: 'Acciones',
    type: 'actions',
    width: 90,
    cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={obtenerPedido(id)}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={MensajeConfirmacion(id)}
              color="inherit"
            />,
          ];
      }
  }
    
  ];
  
  const data = pedido.map((p)=>({
      id: p._id,
      name: p.name,
      direccion: p.direccion,
      ciudad: p.ciudad,
      correo: p.correo,
      telefono: p.telefono,
      fecha: p.fecha,
      metodoPago: p.metodoPago,
      estado: p.estado,
      producto: p.producto,
      pagado: p.pagado
  }))

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='card-body'>
            <Form onSubmit={actualizar} className='row'>
              <Form.Group className='col-md-6'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' className='form-control required' placeholder='Digita el nombre del remitente' onChange={(e)=>setname(e.target.value)} value={name}/>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Dirección</Form.Label>
                <Form.Control type='text' className='form-control required' placeholder='Digita la dirección de envio' onChange={(e)=>setdireccion(e.target.value)} value={direccion}/>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type='text' className='form-control required' placeholder='Digita la ciudad de destino' onChange={(e)=>setciudad(e.target.value)} value={ciudad}/>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Correo</Form.Label>
                <Form.Control type='email' className='form-control required' placeholder='Digita el correo' onChange={(e)=>setcorreo(e.target.value)} value={correo}/>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Celular</Form.Label>
                <Form.Control type='number' className='form-control required' placeholder='Digita el numero de celular de contacto' onChange={(e)=>setTelefono(e.target.value)} value={telefono}/>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Fecha</Form.Label>
                <Form.Control type='date' className='form-control required' placeholder='Digita el numero de celular de contacto' onChange={(e)=>setFecha(e.target.value)} value={fecha}/>
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
              <Form.Group className='col-md-6'>
                <Form.Label>Estado</Form.Label>
                <Form.Select aria-label="Seleccionar estado" onChange={(e)=>setestadoSelect(e.target.value)} value={estadoSelect} >
                  {
                    estado.map(estado =>(
                      <option key={estado}>
                          {estado}
                      </option>
                  ))
                  }
                </Form.Select>
              </Form.Group>
              <Form.Group className='col-md-6'>
                <Form.Label>Producto</Form.Label>
                <Form.Select aria-label="Seleccionar nombre del producto" onChange={(e)=>setproductoSelect(e.target.value)} value={productoSelect}>
                  {
                    producto.map(producto =>(
                      <option key={producto}>
                          {producto}
                      </option>
                  ))
                  }
                </Form.Select>
              </Form.Group>
              <Form.Group className='col-md-6'>
                    <Form.Label>Pagado</Form.Label>
                    <Form.Select aria-label="Estado de pago" onChange={(e)=>setpagadoSelect(e.target.value)} >
                    {
                        pagado.map(pagado =>(
                        <option key={pagado}>
                            {pagado}
                        </option>
                    ))
                    }
                    </Form.Select>
                </Form.Group>
              <Form.Group style={{display: 'inline-block', width: '80px'}}>
                <Button type='button' variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Form.Group>
              <Form.Group style={{display: 'inline-block', width: '80px'}}>
                <Button type='submit' variant="primary">
                    Guardar
                </Button>
              </Form.Group>
            </Form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
    </Modal>
    
    <Modal show={show2} onHide={handleClose2}>
    <Modal.Header closeButton>
        <Modal.Title>Eliminar</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>¿Estas seguro que deseas eliminar este pedido?</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
        <Button variant="primary" onClick={eliminar}>Confirmar</Button>
    </Modal.Footer>
    </Modal>
    </div>
  );
}