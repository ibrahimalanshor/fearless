const express = require('express')
const routes = require('./routes')

class App {

	constructor(port = 3000) {
		this.port = 3000
		this.app = express()

		this.initRoute()
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