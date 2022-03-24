import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer';

import Inicio from './components/Inicio';
import ListarProductos from './components/ListarProductos'

function App() {
  return (
      <Router>
        <Route path= '/' exact component={Inicio} />
        <Route path='/productos.html' exact component={ListarProductos} />
        <Route path='/productos' exact component={ListarProductos} />
        <Footer/>
      </Router>
      
    
  );
}

export default App;
