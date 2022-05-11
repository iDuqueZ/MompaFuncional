import React from 'react'
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap'

export default function NavBarAdmin() {


  const logout = async(e)=>{
    e.preventDefault()
    sessionStorage.clear()
    window.location.href="/admin"
  }

  return (
    <>
    {['xxl'].map((expand) => (
    <Navbar key={expand} variant="light" expand={expand} style={{width: "100%", backgroundColor: "#F8B540"}}>
      <Container fluid style={{width: "90%"}} >
        <Navbar.Brand href="#">MOMPA MODO ADMINISTRADOR</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/Pedidos">Pedidos</Nav.Link>
              <Nav.Link href="/Inventario">Inventario</Nav.Link>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Nav.Link  onClick={logout}>Cerrar sesión</Nav.Link>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    ))}
    </>
  )
  
}
