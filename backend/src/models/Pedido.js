const mongoose= require('mongoose')
const {Schema} = mongoose

const PedidoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    direccion: {type:String, required: [true, 'La dirección es obligatorio']},
    ciudad: {type:String, required: [true, 'La ciudad es obligatoria']},
    correo: {type:String, required: [true, 'El correo es obligatorio']},
    telefono: {type:Number, required: [true, 'El celular es obligatorio']},
    fecha: {type:Date, default:Date.now},
    metodoPago: String,
    estado: String,
    producto: String,
    pagado: String
})

module.exports = mongoose.model('pedido', PedidoSchema)