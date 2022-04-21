import React from 'react'
import ListAdmin from './ListAdmin'
import {Button} from 'react-bootstrap'
import '../styles/dashboard.css'

export default function NuevoProducto() {
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
                        <form onSubmit={"guardar"}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label>Nombre de producto</label>
                                    <input type='text' className='form-control required' placeholder='Digita el nombre ej: Collar de conchas'/>
                                </div>

                                <div className='col-md-6'>
                                    <label>Categoria</label>
                                    <input type='text' className='form-control required' placeholder='Digita el precio en numeros'/>
                                </div>

                                <div className='col-md-6'>
                                    <label>Precio</label>
                                    <input type='Number' className='form-control required' placeholder='Digita el precio en numeros'/>
                                </div>

                                <div className='col-md-6'>
                                    <label>Estado</label>
                                    <input type='text' className='form-control required' placeholder='Digita el precio en numeros'/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Link de imagen</label>
                                    <input type='text' className='form-control required' placeholder='Digita el link de la imagen'/>
                                </div>

                                <div className='col-lg-12'>
                                    <label>Descripción</label>
                                    <textarea type='text' className='form-control required'placeholder='Auí puedes escribir los detalles del producto'></textarea>
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