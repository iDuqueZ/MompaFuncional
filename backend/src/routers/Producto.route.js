const {Router}= require('express')
const router = Router()
const ProductoCtrl = require('../controllers/Producto.controller')
const Auth = require('../helper/Auth')

router.post('/nuevo', Auth.verificarToken, ProductoCtrl.crear)
router.get('/listar', ProductoCtrl.listar)
router.get('/listar/:id', ProductoCtrl.listarId)
router.get('/categoria/:categoria', ProductoCtrl.listarCategoria)
router.delete('/eliminar/:id', Auth.verificarToken, ProductoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken, ProductoCtrl.actualizar)


module.exports = router