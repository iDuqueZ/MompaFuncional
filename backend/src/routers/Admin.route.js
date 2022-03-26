const {Router}= require('express')
const router = Router()
const AdminCtrl= require('../controllers/Admin.controller')
const Auth = require('../helper/Auth')


router.post('/nuevo', Auth.verificarToken, AdminCtrl.crearAdmin)
router.post('/login', AdminCtrl.login)

module.exports= router