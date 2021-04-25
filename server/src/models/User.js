const bcrypt = require('bcrypt')
const { Schema, model } = require('mongoose')
const { asset } = require('../helpers')

const UserSchema = new Schema({
	name: String,
	username: String,
	email: String,
	password: String,
	photo: {
		type: String,
		default: 'user.jpg'
	}
})

UserSchema.pre('validate', async function () {
	await this.encrypt()
})

UserSchema.methods.encrypt = async function () {
	const hash = await bcrypt.hash(this.password, 10)

	this.password = hash
}

UserSchema.virtual('photo_src').get(function () {
	return asset(this.photo, 'user_img')
})

UserSchema.set('toObject', { virtuals: true })
UserSchema.set('toJSON', { virtuals: true })

const User = model('user', UserSchema)

module.exports = User