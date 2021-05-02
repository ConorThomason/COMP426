const express = require('express')

const UserCtrl = require('../controllers/ctrl')

const router = express.Router()

router.post('/users', UserCtrl.createUser)
router.delete('/users/:id', UserCtrl.deleteUser)
router.put('/users/:id', UserCtrl.updateUser)
router.get('/users/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = router
