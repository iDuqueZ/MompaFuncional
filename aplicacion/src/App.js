import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos'
import SignIn from './components/LoginAdmin'
import Dashboard from './components/Dashboard';
import Inventario from './components/Inventario';
import PaginaPedidos from './components/PaginaPedidos'
import NuevoProducto from './components/NuevoProducto';
import NuevoPedido from './components/NuevoPedido';
import PagoExitoso from './components/PagoExitoso';
import Pagina404 from './components/Pagina404';

function App() {
  return (
      <Router>
        <Route path= '/' exact component={Inicio} />
        <Route path='/producto/listar' exact component={ListarProductos} />
        <Route path='/admin' exact component={SignIn} />
        <Route path= '/Dashboard' exact component={Dashboard} />
        <Route path= '/Inventario' exact component={Inventario} />
        <Route path= '/Pedidos' exact component={PaginaPedidos} />
        <Route path= '/producto/nuevo' exact component={NuevoProducto} />
        <Route path= '/pedido/nuevo' exact component={NuevoPedido} />
        <Route path= '/pago' exact component={PagoExitoso}/>
        <Route path= '/servicios' exact component={Pagina404}/>
        <Route path= '/nosotros' exact component={Pagina404}/>
      </Router>
      
    
  );
}

export default App;
