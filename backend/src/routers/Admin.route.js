const {Router}= require('express')
const router = Router()
const AdminCtrl= require('../controllers/Admin.controller')


router.post('/nuevo', AdminCtrl.crearAdmin)

module.exports= router