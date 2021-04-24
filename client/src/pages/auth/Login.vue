<template>
	<section class="container auth-wrapper">
		<div class="auth-box w-full sm:w-3/5 md:w-2/5">
			<div class="card">
				<div class="card-head">
					<h1 class="card-title h3">Login</h1>
				</div>
				<form class="card-body" @submit.prevent="process">
					<div class="form">
						<label>Email</label>
						<input type="email" class="input" :class="{ 'error': errors.email.error }" placeholder="Email" v-model="email">

						<small class="error" v-if="errors.email.error">
							{{ errors.email.msg }}
						</small>
					</div>
					<div class="form">
						<label>Password</label>
						<input type="password" class="input" :class="{ 'error': errors.password.error }" placeholder="Password" v-model="password">

						<small class="error" v-if="errors.password.error">
							{{ errors.password.msg }}
						</small>
					</div>
					<button class="button black mr-2" :disabled="loading">Login</button>
					<router-link class="button gray" :to="{ name: 'Register' }">Register</router-link>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapMutations } from 'vuex'

	const errors = {
		email: {},
		password: {}
	}

	export default {
		data() {
			return {
				email: '',
				password: '',
				loading: false,
				errors: {...errors}
			}
		},
		methods: {
			...mapActions('auth', [
				'login'
			]),
			...mapMutations(['flash']),
			async process() {
				this.loading = true
				this.errors = {...errors}

				try {
					await this.login({
						email: this.email,
						password: this.password
					})

					this.flash('Login Success')
					this.$router.push({ name: 'Home' })
				} catch (err) {
					if (err.response.status === 422) {
						const errors = err.response.data.errors

						errors.forEach(({ param, msg}) => {
							this.errors[param] = {
								error: true,
								msg
							}
						})
					} else {
						this.errors.password = {
							error: true,
							msg: err.response.data
						}
					}
				} finally {
					this.loading = false
				}
			}
		}
	}
</script>