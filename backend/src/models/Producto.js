const mongoose= require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    precio: {type:String, required: [true, 'El precio es obligatorio']},
    estado: String,
    cantidad:Int16Array
})

module.exports = mongoose.model('producto', ProductoSchema)