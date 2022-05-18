import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import {GridActionsCellItem} from '@mui/x-data-grid-pro';
import axios from 'axios'
import Swal from 'sweetalert2';
import { Modal, Button} from 'react-bootstrap'

export default function DataTable() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);

    const [producto, setproducto] = useState([]);
    const [idproducto, setidProducto]= useState('');
    const [name, setname]= useState('');
    const [precio, setprecio] = useState('');
    const [imagen, setimagen]= useState('');
    const [categoria, setcategoria] = useState  ([]);
    const [categoriaSelect, setcategoriaSelect] = useState  ([]);
    const [estado, setestado] = useState  ([]);
    const [estadoSelect, setestadoSelect] = useState  ([]);
    const [descripcion, setdescripcion] = useState  ('');
    const [linkCompra, setlinkCompra]= useState  ('');
    const [cantidad, setcantidad] = useState  ('');

    useEffect(()=>{
        obtenerProductos()

        setestado(['Disponible', 'No Disponible'])
        setestadoSelect('Disponible');

        setcategoria(['vestidos', 'camisas', 'gorros', 'turbantes', 'gafas', 'pride', 'cabello', 'accesorios'])
        setcategoriaSelect('accesorios');
    },[])
    
    const obtenerProductos = async()=>{

        const token = sessionStorage.getItem('token')
        const respuesta = await axios.get('/producto/listar', {
            headers : {'autorizacion': token}
        })
        console.log(respuesta)

        setproducto(respuesta.data)
    }


    const obtenerProducto = (idParametro) => async(event)=>{
        event.stopPropagation();
        event.preventDefault();
        setShow(true)
        const id = idParametro
        const token = sessionStorage.getItem('token')
        const respuesta = await axios.get('/producto/listar/' + id, {
            headers : {'autorizacion': token}
        })
        console.log(respuesta.data)
        setidProducto(respuesta.data._id)
        setname(respuesta.data.name)
        setprecio(respuesta.data.precio)
        setcategoriaSelect(respuesta.data.categoria)
        setcantidad(respuesta.data.cantidad)
        setdescripcion(respuesta.data.descripcion)
        setestadoSelect(respuesta.data.estado)
        setimagen(respuesta.data.imagen)
        setlinkCompra(respuesta.data.linkCompra)
    } 
    
    
    const actualizar = async(e)=> {
        e.preventDefault();
        const id = idproducto
        const token = sessionStorage.getItem('token')
        const producto ={
            name,
            precio,
            imagen,
            categoria: categoriaSelect,
            estado: estadoSelect,
            descripcion,
            linkCompra,
            cantidad
        }

        if(name === ""){
            Swal.fire({
                icon: 'error',
                title: 'Debe ingresar un nombre',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(precio === ""){
            Swal.fire({
                icon: 'error',
                title: 'Debe ingresar un precio',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(precio < 0){
            Swal.fire({
                icon: 'error',
                title: 'El precio no debe ser menor a cero',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(imagen === ""){
            Swal.fire({
                icon: 'error',
                title: 'Debe ingresar un link para la imagen',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(categoria === ""){
            Swal.fire({
                icon: 'error',
                title: 'Categoria no seleccionada',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(estado === ""){
            Swal.fire({
                icon: 'error',
                title: 'Estado no seleccionado',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(cantidad === ""){
            Swal.fire({
                icon: 'error',
                title: 'Debe ingresar una cantidad',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else if(cantidad < 0){
            Swal.fire({
                icon: 'error',
                title: 'La cantidad no puede ser menor a 0',
                showConfirmButton: false,
                timer: '1500'
            })
        }
        else if(cantidad <= 0 && estadoSelect === 'Disponible'){
            Swal.fire({
                icon: 'error',
                title: 'Si la cantidad es 0 el estado no puede ser',
                showConfirmButton: false,
                timer: '1500'
            })
        }
        
        else{
            const respuesta = await axios.put('/producto/actualizar/'+ id, producto, {
                headers : {'autorizacion': token}
            })

            const mensaje = respuesta.data.mensaje;
            console.log(mensaje)
            obtenerProductos();

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
        setidProducto(idParametro)
    }
    
    
    const eliminar = async(event)=>{
        event.preventDefault();
        const id = idproducto
        const token = sessionStorage.getItem('token')
        const respuesta = await axios.delete('/producto/eliminar/' + id, {
            headers : {'autorizacion': token}
        })

        const mensaje = respuesta.data.mensaje;
            console.log(mensaje)
            obtenerProductos();

            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: '1500'
            })

            setShow2(false)
    }



const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
  { field: 'name', headerName: 'Nombre', width: 200 },
  { field: 'categoria', headerName: 'Categoria', width: 110 },
  { field: 'estado', headerName: 'Estado', width: 110 },
  {
    field: 'precio',
    headerName: 'Precio',
    type: 'number',
    width: 100,
  },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    type: 'number',
    width: 90,
  },
  {
    field: 'descripcion',
    headerName: 'Descripcion',
    type: 'text',
    width: 220,
  },
  {
    field: 'imagen',
    headerName: 'Imagen',
    type: 'text',
    width: 100,
  },
  {
    field: 'linkCompra',
    headerName: 'L. Compra',
    type: 'text',
    width: 100,
  },
  {
    field: 'action',
    headerName: 'Actions',
    type: 'actions',
    width: 90,
    cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={obtenerProducto(id)}
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

const data = producto.map((producto)=>({
    id: producto._id,
    name: producto.name,
    categoria: producto.categoria,
    estado: producto.estado,
    precio: producto.precio,
    cantidad: producto.cantidad,
    descripcion: producto.descripcion,
    imagen: producto.imagen,
    linkCompra: producto.linkCompra,
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
          <Modal.Title>Modificar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='card-body'>
                        <form onSubmit={'guardar'}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Nombre de producto</label>
                                    <input type='text' className='form-control required' placeholder='Digita el nombre ej: Collar de conchas' onChange={(e)=>setname(e.target.value)} value={name}/>
                                </div>

                                <div className='col-md-6'>
                                    <label>Categoría</label>
                                    

                                    <select className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setcategoriaSelect(e.target.value)} value={categoriaSelect}>
                                        {
                                            categoria.map(categoria =>(
                                                <option key={categoria}>
                                                    {categoria}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='col-md-6'>
                                    <label>Precio</label>
                                    <input type='Number' className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setprecio(e.target.value)} value={precio}/>
                                </div>

                                

                                <div className='col-md-6'>
                                    <label>Estado</label>
                                    <select className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setestadoSelect(e.target.value)} value={estadoSelect}>
                                        {
                                            estado.map(estado =>(
                                                <option key={estado}>
                                                    {estado}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='col-lg-10'>
                                    <label>Link de imagen</label>
                                    <input type='text' className='form-control required' placeholder='Digita el link de la imagen' onChange={(e)=>setimagen(e.target.value)} value={imagen}/>
                                </div>

                                <div className='col-md-2'>
                                    <label>Cantidad</label>
                                    <input type='Number' className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setcantidad(e.target.value)} value={cantidad}/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Link de Compra</label>
                                    <input type='text' className='form-control required' placeholder='Digita el link de la imagen' onChange={(e)=>setlinkCompra(e.target.value)} value={linkCompra}/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Descripción</label>
                                    <textarea type='text' className='form-control required'placeholder='Auí puedes escribir los detalles del producto' onChange={(e)=>setdescripcion(e.target.value)} value={descripcion}></textarea>
                                </div>
                            </div>
                        </form>     
                    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={actualizar}>
            Guardar cambios
          </Button>
        </Modal.Footer>
    </Modal>
    
    <Modal show={show2} onHide={handleClose2}>
    <Modal.Header closeButton>
        <Modal.Title>Eliminar</Modal.Title>
    </Modal.Header>

    <Modal.Body>
        <p>¿Estas seguro que deseas eliminar este producto?</p>
    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>Cancelar</Button>
        <Button variant="primary" onClick={eliminar}>Confirmar</Button>
    </Modal.Footer>
    </Modal>
    </div>
  );
}