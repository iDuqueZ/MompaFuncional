const mongoose= require('mongoose')
const {Schema} = mongoose

const PedidoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    direccion: {type:String, required: [true, 'La dirección es obligatorio']},
    telefono: {type:String, required: [true, 'El telefono es obligatorio']},
    fecha: {type:Date, default:Date.now},
    estado: String,
    producto: String,
    pagado: Boolean
})

module.exports = mongoose.model('pedido', PedidoSchema)