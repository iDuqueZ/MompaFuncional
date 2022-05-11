import React, {useState, useEffect} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

export default function Grafic() {
  const [dataMes, setDatames] = useState([])

  useEffect(()=>{
    obtenerMes();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const obtenerMes = async() => {
    const token = sessionStorage.getItem('token')
    const respuesta = await axios.get('/pedido/mes', {
        headers : {'autorizacion': token}
    })

    setDatames(respuesta.data)
  }



  const data = [];
  let datitos = {}

  for(const [key, value] of Object.entries(dataMes)){
    datitos = {
      name: key,
      cantidad: value
    }

    data.push(datitos)
  }

  
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cantidad" fill="#005eff" />
        </BarChart>
      </ResponsiveContainer>
    );
}
