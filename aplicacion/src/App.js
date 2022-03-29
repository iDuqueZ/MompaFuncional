import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos'
import SignIn from './components/LoginAdmin'
import Dashboard from './components/Dashboard';

function App() {
  return (
      <Router>
        <Route path= '/' exact component={Inicio} />
        <Route path='/producto/listar' exact component={ListarProductos} />
        <Route path='/admin' exact component={SignIn} />
        <Route path= '/Dashboard' exact component={Dashboard} />
      </Router>
      
    
  );
}

export default App;
