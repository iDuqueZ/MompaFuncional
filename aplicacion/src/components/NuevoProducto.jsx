import React, {useState, useEffect} from 'react'
import ListAdmin from './ListAdmin'
import {Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import axios from 'axios'
import '../styles/dashboard.css'

export default function NuevoProducto() {

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
        setestado(['Dsiponible', 'No Disponible'])
        setestadoSelect('Disponible');

        setcategoria(['vestidos', 'camisas', 'gorros', 'turbantes', 'gafas', 'pride', 'cabello', 'accesorios'])
        setcategoriaSelect('accesorios');
    },[])

    const guardar = async(e)=>{
        e.preventDefault()
        const producto = {
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
                title: 'Debe ingresar un precio',
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
                title: 'Debe ingresar un precio',
                showConfirmButton: false,
                timer: '1500'
            })
        }

        else {
            const token = sessionStorage.getItem('token');
            const respuesta = await axios.post('/producto/nuevo', producto, {
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
            setname('');
            setprecio('');

        }
    }
    return (
        <div className='grande'>
            <div className='encabezado'>
                <h3>INVENTARIO</h3>
            </div>
        <div className='gran-contenedor'>
            <div className='menu'>
                <br/><br></br>
                <ListAdmin />
            </div>
            <div className='cajones2'>
                <div className='cajon-inferior'>
                    <div className='card-body'>
                    <h6>Agregar nuevo producto</h6>
                        <form onSubmit={guardar}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Nombre de producto</label>
                                    <input type='text' className='form-control required' placeholder='Digita el nombre ej: Collar de conchas' onChange={(e)=>setname(e.target.value)}/>
                                </div>

                                <div className='col-md-6'>
                                    <label>Categoria</label>
                                    

                                    <select className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setcategoriaSelect(e.target.value)}>
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
                                    <input type='Number' className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setprecio(e.target.value)}/>
                                </div>

                                

                                <div className='col-md-6'>
                                    <label>Estado</label>
                                    <select className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setestadoSelect(e.target.value)}>
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
                                    <input type='text' className='form-control required' placeholder='Digita el link de la imagen' onChange={(e)=>setimagen(e.target.value)}/>
                                </div>

                                <div className='col-md-2'>
                                    <label>Cantidad</label>
                                    <input type='Number' className='form-control required' placeholder='Digita el precio en numeros' onChange={(e)=>setcantidad(e.target.value)}/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Link de Compra</label>
                                    <input type='text' className='form-control required' placeholder='Digita el link de la imagen' onChange={(e)=>setlinkCompra(e.target.value)}/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Descripción</label>
                                    <textarea type='text' className='form-control required'placeholder='Auí puedes escribir los detalles del producto' onChange={(e)=>setdescripcion(e.target.value)}></textarea>
                                </div>
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>     
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    )
}