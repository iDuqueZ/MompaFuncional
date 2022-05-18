import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function DataTable() {

  
  const [pedido, setpedido] = useState([]);


  
  useEffect(()=>{
    obtenerPedidos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const obtenerPedidos = async()=>{

    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/pedido/listar', {
        headers : {'autorizacion': token}
    })
    

    setpedido(respuesta.data)
    console.log(pedido)
}

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    { field: 'direccion', headerName: 'Dirección', width: 130 },
    { field: 'ciudad',headerName: 'Ciudad', width: 90, },
    { field: 'correo', headerName: 'Email', width: 90, },
    { field: 'telefono', headerName: 'Celular', type: 'string', width: 90, },
    { field: 'fecha', headerName: 'Fecha', type: 'date',  width: 90,},
    { field: 'metodoPago', headerName: 'Método', width: 90, },
    { field: 'estado', headerName: 'Estado', width: 90, },
    { field: 'producto', headerName: 'Producto', width: 90, },
    { field: 'pagado', headerName: 'Pago', width: 90,}
    
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
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
    </div>
  );
}