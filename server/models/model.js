const mongoose = require('mongoose')
const Schema = mongoose.Schema
let bcrypt = require('bcrypt');
let SALT_WORK_FACTOR = 10;

const User = new Schema(
	{
		username: { type: String, required: true, index: { unique: true }},
		password: { type: String, required: true },
		darkTheme: { type : Boolean }
	}
)

User.pre('save', function(next) {
	let user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt, function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

User.methods.comparePassword = function(possiblePassword, cb) {
	bcrypt.compare(possiblePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('users', User)