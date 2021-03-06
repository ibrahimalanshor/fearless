const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

class App {

	constructor(port = 3000) {
		this.port = 3000
		this.app = express()

		this.initConfig()
		this.initDB()
		this.initRoute()
	}

	initConfig() {
		this.app.use(express.urlencoded({ extended: true }))
		this.app.use(express.json())

		this.app.use(cors())

		this.app.use('/public', express.static(path.join(__dirname + '/../public')))
	}

	initDB() {
		mongoose.connect('mongodb://localhost:27017/fearless', { useNewUrlParser: true, useUnifiedTopology: true })
			.then(() => console.log('Database Connected'))
			.catch(err => console.log(err))
	}

	initRoute() {
		for (let [name, router] of Object.entries(routes)) {
			this.app.use(`/api/${name}`, router)
		}
	}

	listen() {
		this.app.listen(this.port, () => console.log( `App Listen on ${this.port}` ))
	}

}

module.exports = App