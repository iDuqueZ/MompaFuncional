const AdminCtrl = {}
const Admin= require('../models/Admin.route')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

AdminCtrl.crearAdmin = async(req,res)=>{

    const {user, contrasena} = req.body; 
    
    const NuevoAdmin= new Admin({
        user,
        contrasena
    })

    const userAdmin = await Admin.findOne({user:user})
    if(userAdmin){
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }
    else {
        NuevoAdmin.contrasena = await bcrypt.hash(contrasena,10)
        const token= jwt.sign({_id:NuevoAdmin._id}, "Secreto")
        await NuevoAdmin.save()

        res.json({
            mensaje: 'Bienvenido', 
            id: NuevoAdmin._id,
            user: NuevoAdmin.user,
            token
        })

    }
}

module.exports= AdminCtrl


