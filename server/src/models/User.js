const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
	name: String,
	username: String,
	email: String,
	password: String
})

UserSchema.pre('validate', async function () {
	await this.encrypt()
})

UserSchema.methods.encrypt = async function () {
	const hash = await bcrypt.hash(this.password, 10)

	this.password = hash
}

const User = model('user', UserSchema)

module.exports = User