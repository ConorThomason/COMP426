const mongoose = require('mongoose')

mongoose
	.connect('mongodb+srv://Hywok:gIdJvlxkqJJPc2CN@cluster0.cpu60.mongodb.net/Cluster0?authSource=admin&replicaSet=atlas-11g1pt-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', { useNewUrlParser: true })
	.catch(e => {
		console.error('Connection error', e.message)
	})

const db = mongoose.connection

module.exports = db