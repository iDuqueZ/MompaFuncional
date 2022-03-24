import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'

export default function Productos() {
  return (
    <Row style={{marginRight: '0'}} xs={1} md={4} className="g-4">
    {Array.from({ length: 6 }).map((_, idx) => (
      <Col>
        <Card style={{width: '180px', margin: 'auto'}}>
          <Card.Img style={{height: '180px', width: '180px', objectFit: 'cover', backgroundSize: 'cover'}} variant="top" src="https://esika.tiendabelcorp.com/cdn-cgi/image/width=1200,fit=contain,f=auto/https://belc-bigdata-mdm-images-prd.s3.amazonaws.com/images/FotoProductoFondoBlancoWebRedes/210097326-FotoFondoBlanco-v02.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              $ 45.000
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}
