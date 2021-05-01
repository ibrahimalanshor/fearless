const { model } = require('mongoose')
const PostSchema = require('./schema')

module.exports = model('post', PostSchema)