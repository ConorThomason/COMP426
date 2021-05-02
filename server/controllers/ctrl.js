const User = require('../models/model')

createUser = (req, res) => {
	const body = req.body
	console.log("Attempting to post");
	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a user',
		})
	}

	const user = new User(body)

	if (!user) {
		return res.status(400).json({success: false, error: err})
	}
	user
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: user._id,
				message: 'User created',
			})
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: 'User not created',
			})
		})
}

updateUser = async (req, res) => {
	const body = req.body

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a body to update',
		})
	}
	User.findOne({_id: req.params.id}, (err, user) => {
		if (err) {
			return res.status(404).json({
				err,
				message: 'User not found',
			})
		}
		user.name = body.name;
		user.password = body.password;
		user.darkTheme = body.darkTheme;
		user
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: user._id,
					message: 'User updated!',
				})
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: 'User not updated!',
				})
			})
	})
}

module.exports = {
	createUser,
}