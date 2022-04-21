const ProductoCtrl= {}
const Producto = require('../models/Producto')


ProductoCtrl.crear= async(req,res)=> {

    const {name, precio, imagen, categoria, estado, descripcion, cantidad, linkCompra}= req.body
    const NuevoProducto = new Producto({

        name,
        precio,
        imagen,
        categoria,
        estado,
        descripcion,
        cantidad,
        linkCompra
    })

    const respuesta = await NuevoProducto.save()
    res.json({
        mensaje: 'Producto creado',
        respuesta
    })
}

ProductoCtrl.listar= async(req,res)=>{
    const respuesta = await Producto.find()
    res.json(respuesta)
}

ProductoCtrl.listarId= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.findById({_id: id})
    res.json(respuesta)
}

ProductoCtrl.listarCategoria= async(req,res)=>{
    const categoria = req.params.categoria;
    try {
        const respuesta = await Producto.find({categoria: categoria})
        res.json(respuesta)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'No encontrado',
            error
        })
    }
    
}

ProductoCtrl.eliminar= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Producto eliminado',
    })
}

ProductoCtrl.actualizar= async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.findByIdAndUpdate({_id:id}, req.body)
    res.json({
        mensaje: 'Producto actualizado',
    })
}

module.exports= ProductoCtrl