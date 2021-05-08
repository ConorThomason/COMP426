const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
	{
		username: { type: String, required: true, index: { unique: true }},
		password: { type: String, required: true },
		darkTheme: { type : Boolean, required: true}
	}
)

module.exports = mongoose.model('users', User)