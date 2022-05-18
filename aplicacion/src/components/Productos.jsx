import React, {useEffect , useState} from 'react'
import {Row, Col, Card, Modal, Button, CardGroup} from 'react-bootstrap'
import '../styles/listarProductos.css'
import axios from 'axios'


export default function Productos() {

  const [productos, setProductos] = useState([])
    const [name, setname]= useState('');
    const [precio, setprecio] = useState('');
    const [imagen, setimagen]= useState('');
    const [estadoSelect, setestadoSelect] = useState  ([]);
    const [descripcion, setdescripcion] = useState  ('');
    const [cantidad, setcantidad] = useState  ('');
    const [id, setId] = useState ('')


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(()=>{
    obtenerProductos();

        setestadoSelect('Disponible');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  const obtenerProductos = async()=>{
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores)
    const values = urlParams.values()
  

    for (const value of values) {

      console.log(value)

      const respuesta = await axios.get('/producto/categoria/' + value)
      console.log(respuesta)

      setProductos(respuesta.data)
    }
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
  setname(respuesta.data.name)
  setprecio(respuesta.data.precio)
  setdescripcion(respuesta.data.descripcion)
  setestadoSelect(respuesta.data.estado)
  setimagen(respuesta.data.imagen)
  setcantidad(respuesta.data.cantidad)
  setId (respuesta.data._id)

  setShow(true);
} 


const pay = async(event)=>{
  event.preventDefault();
  window.location.href = '/pago?de=' + id;
}

const hablarAsesor = async (e) => {
  e.preventDefault();
  window.location.href = 'https://wa.me/message/UFML5BY7GHY5M1';
}

  return (
    <div>
    <Row style={{marginRight: '0'}} xs={1} md={4} className="g-4">
    {Array.from(productos).map((producto) => (
      <Col>
        <Card onClick={obtenerProducto(producto._id)} className='Card' style={{width: '14rem', margin: 'auto'}}>
          <Card.Img style={{objectFit: 'cover', backgroundSize: 'cover'}} variant="top" src={producto.imagen} />
          {console.log(producto.imagen)}
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>
              {producto.precio}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

  <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <CardGroup>
          <Card>
            <Card.Img style={{sobjectFit: 'cover', backgroundSize: 'cover'}} variant="left" src={imagen}/>
            <Card.Body>
              <Card.Title>{estadoSelect}</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Text>
                {descripcion}
                <br/><br/>
                <span><strong>Disponibles:</strong> {cantidad}</span><br/><br/>
                <h3>${precio}</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          {(() => {
            if (estadoSelect === 'No Disponible') {
              return (
                <Button variant="primary" onClick={hablarAsesor}>
                  Hablar con un asesor
                </Button>
              )
            } else {
              return (
                <Button variant="primary" onClick={pay}>
                  Comprar
                </Button>
              )
            }
          })()}
          
        </Modal.Footer>
      </Modal>
  </div>
  )
}
