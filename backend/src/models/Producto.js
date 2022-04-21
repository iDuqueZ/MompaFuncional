const mongoose= require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    precio: {type:Number, required: [true, 'El precio es obligatorio']},
    imagen: {type:String, required: [true, 'La imagen es obligatoria']},
    categoria: {type:String, required: [true, 'La categoria es obligatoria']},
    estado: {type:String, required: [true, 'El estado es onligatorio']},
    descripcion: String,
    cantidad: {type:Number, required: [true, 'La cantidad es oligatoria']},
    linkCompra: String
})

module.exports = mongoose.model('producto', ProductoSchema)