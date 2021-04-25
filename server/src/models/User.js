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
		default: 'user.jpg',
		get: photoSrc
	}
}, { id: false })

function photoSrc (photo) {
	return asset(photo, 'user_img')
}

UserSchema.pre('validate', async function () {
	await this.encrypt()
})

UserSchema.methods.encrypt = async function () {
	const hash = await bcrypt.hash(this.password, 10)

	this.password = hash
}

UserSchema.set('toObject', { getters: true })
UserSchema.set('toJSON', { getters: true })

const User = model('user', UserSchema)

module.exports = User