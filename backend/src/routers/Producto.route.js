const {Router}= require('express')
const router = Router()
const ProductoCtrl = require('../controllers/Producto.controller')
const Auth = require('../helper/Auth')

router.post('/nuevo', Auth.verificarToken, ProductoCtrl.crear)
router.get('/listar', ProductoCtrl.listar)
router.get('/listar/:id', ProductoCtrl.listarId)
router.get('/categoria/:criterio', ProductoCtrl.listarCategoria)
router.delete('/eliminar/:id', Auth.verificarToken, ProductoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, ProductoCtrl.actualizar)
router.put('/actualizarEstado/:id', ProductoCtrl.actualizarEstado)


module.exports = router