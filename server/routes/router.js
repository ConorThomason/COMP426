const express = require('express')

const UserCtrl = require('../controllers/ctrl')

const router = express.Router()

router.post('/users', UserCtrl.createUser)

module.exports = router
