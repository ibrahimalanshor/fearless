<template>
	<section class="container wrapper">
		<div class="auth-box w-full sm:w-3/5 md:w-2/5">
			<div class="card">
				<div class="card-head">
					<h1 class="card-title h3">Register</h1>
				</div>
				<form class="card-body" @submit.prevent="process">
					<div class="row">
						<div class="col w-full sm:w-1/2">
							<div class="form">
								<label>Name</label>
								<input type="text" class="input" :class="{ 'error': errors.name.error }" placeholder="Name" v-model="name">

								<small class="error" v-if="errors.name.error">{{ errors.name.msg }}</small>
							</div>
						</div>
						<div class="col w-full sm:w-1/2">
							<div class="form">
								<label>Username</label>
								<input type="text" class="input" :class="{ 'error': errors.username.error }" placeholder="Username" v-model="username">

								<small class="error" v-if="errors.username.error">{{ errors.username.msg }}</small>
							</div>
						</div>
					</div>
					<div class="form">
						<label>Email</label>
						<input type="email" class="input" :class="{ 'error': errors.email.error }" placeholder="Email" v-model="email">

						<small class="error" v-if="errors.email.error">{{ errors.email.msg }}</small>
					</div>
					<div class="form">
						<label>Password</label>
						<input type="password" class="input" :class="{ 'error': errors.password.error }" placeholder="Password" v-model="password">

						<small class="error" v-if="errors.password.error">{{ errors.password.msg }}</small>
					</div>
					<div class="form">
						<label>Confrm Password</label>
						<input type="password" class="input" placeholder="Confrm Password" v-model="password_confirmation">
					</div>
					<button class="button black mr-2" :disabled="loading">Register</button>
					<router-link class="button gray" :to="{ name: 'Login' }">Login</router-link>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
	import { mapActions, mapMutations } from 'vuex'

	const errors = {
		name: {},
		username: {},
		email: {},
		password: {}
	}

	export default {
		data() {
			return {
				name: '',
				username: '',
				email: '',
				password: '',
				password_confirmation: '',
				loading: false,
				errors: {...errors}
			}
		},
		methods: {
			...mapActions('auth', [
				'register'
			]),
			...mapMutations(['flash']),
			async process() {
				this.loading = true
				this.errors = {...errors}

				try {
					await this.register({
						name: this.name,
						username: this.username,
						email: this.email,
						password: this.password,
						password_confirmation: this.password_confirmation
					})

					this.flash('Register success, Login to continue')
					this.$router.push({ name: 'Login'})
				} catch (err) {
					const errors = err.response.data.errors

					errors.forEach(({ param, msg }) => {
						this.errors[param] = {
							error: true,
							msg
						}
					})
				} finally {
					this.loading = false
				}
			}
		}
	}
</script>