const mongoose= require('mongoose')
const {Schema} = mongoose

const ProductoSchema = new Schema ({
    name: {type:String, required: [true, 'El nombre es obligatorio']},
    precio: {type:Number, required: [true, 'El precio es obligatorio']},
    categoria: {type:String, required: [true, 'La categoria es obligatoria']},
    estado: String,
    descripcion: String,
    cantidad: Number,
    
})

module.exports = mongoose.model('producto', ProductoSchema)