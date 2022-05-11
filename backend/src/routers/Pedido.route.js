const {Router}= require('express')
const router = Router()
const PedidoCtrl = require('../controllers/Pedido.controller')
const Auth = require('../helper/Auth')

router.post('/nuevo', PedidoCtrl.crear)
router.get('/listar', Auth.verificarToken, PedidoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken, PedidoCtrl.listarId)
router.put('/actualizar/:id', Auth.verificarToken, PedidoCtrl.actualizar)
router.delete('/eliminar/:id', Auth.verificarToken, PedidoCtrl.eliminar)
router.get('/mes', Auth.verificarToken, PedidoCtrl.mes)

module.exports= router