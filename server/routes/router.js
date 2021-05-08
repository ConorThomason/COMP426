const express = require('express')

const UserCtrl = require('../controllers/ctrl')

const router = express.Router()

router.post('/users', UserCtrl.createUser)
router.delete('/users/:username', UserCtrl.deleteUser)
router.put('/users/:username', UserCtrl.updateUser)
router.get('/users/:username', UserCtrl.getUser)
router.get('/users', UserCtrl.getUsers)

module.exports = router
