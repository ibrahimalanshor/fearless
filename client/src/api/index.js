import axios from 'axios'

export default {
	serverApi: axios.create({
		baseURL: 'http://localhost:3000/api'
	})
}