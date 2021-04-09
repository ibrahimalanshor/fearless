import Vue from 'vue'
import VueRouter from 'vue-router'

import { Home } from '@/pages'
import { auth } from './guards'

Vue.use(VueRouter)

const routes = [
	{
		name: 'home',
		path: '/',
		component: Home
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

router.beforeEach(auth)

export default router