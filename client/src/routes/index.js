import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home } from '@/pages'
import { Login, Register } from '@/pages/auth'
import { auth, guest } from './guards'

Vue.use(VueRouter)

const routes = [
	{
		name: 'Home',
		path: '/',
		component: Home
	},
	{
		name: 'Login',
		path: '/login',
		component: Login,
		meta: { guest: true }
	},
	{
		name: 'Register',
		path: '/register',
		component: Register,
		meta: { guest: true }
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach(auth)
router.beforeEach(guest)

export default router