const PedidoCtrl = {}
const Pedido = require('../models/Pedido')
const Producto = require('../models/Producto')

PedidoCtrl.crear = async(req,res) => {

    const {name, direccion, ciudad, correo, telefono, fecha, estado, producto, pagado} = req.body
    const NuevoPedio = new Pedido ({
        name,
        direccion,
        ciudad,
        correo,
        telefono,
        fecha,
        estado,
        producto,
        pagado
    })

    const pagoPedido = NuevoPedio.pagado;
    if(pagado){
        const respuesta = await NuevoPedio.save()

            res.json ({
            mensaje: 'Pedido realizado con exito',
            respuesta
        })
    }
    else {
        res.json ({
            mensaje: 'Hubo un error con el pago del producto'
        })
    }
}

PedidoCtrl.listar = async (req,res) =>{

    const respuesta = await Pedido.find()
    res.json({
        respuesta,
    })
}

PedidoCtrl.actualizar = async (req,res)=> {

    const id = req.params.id
    const respuesta = await Pedido.findByIdAndUpdate({_id: id}, req.body)
    res.json ({
        mensaje: 'Pedido actualizado'
    })
}

PedidoCtrl.eliminar = async(req,res)=> {
    const id = req.params.id
    const respuesta = await Pedido.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Pedido eliminado'
    })
}

module.exports = PedidoCtrl
