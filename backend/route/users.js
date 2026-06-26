const express = require('express')
const router = express.Router()

const userCtrl = require('../controllers/users')

router.post('/mail', userCtrl.sendMail)

module.exports = router;