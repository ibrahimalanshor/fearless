const express = require('express')

class App {

	constructor(port = 3000) {
		this.port = 3000
		this.app = express()

		this.initRoute()
	}

	initRoute() {
		this.app.get('/', (req, res) => res.send('Ok'))
	}

	listen() {
		this.app.listen(this.port, () => console.log( `App Listen on ${this.port}` ))
	}

}

module.exports = App