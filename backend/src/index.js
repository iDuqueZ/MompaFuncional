//Requerimos las dependencias
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
require ('./database')


//Configuración del puerto

app.set('Port',process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origen: '*'}));


app.use('/admin', require('./routers/Admin.route'))
app.use('/producto', require('./routers/Producto.route'))
app.use('/pedido', require('./routers/Pedido.route'))

app.listen(app.get('Port'), ()=> {
    console.log('Servidor esta escuchando por el puerto', app.get('Port'))
})