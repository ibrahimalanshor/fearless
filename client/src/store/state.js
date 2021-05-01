import axios from 'axios'

export default {
	flash: {
		exists: false,
		msg: '',
		count: 0
	},
	api: axios.create({
		baseURL: 'http://localhost:3000/api'
	})
}