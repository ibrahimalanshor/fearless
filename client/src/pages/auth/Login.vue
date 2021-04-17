<template>
	<section class="container auth-wrapper">
		<div class="auth-box w-full sm:w-3/5 md:w-2/5">
			<div class="card">
				<div class="card-head">
					<h1 class="card-title h3">Login</h1>
				</div>
				<div class="card-body">
					<div class="form">
						<label>Email</label>
						<input type="email" class="input" placeholder="Email">
					</div>
					<div class="form">
						<label>Password</label>
						<input type="password" class="input" placeholder="Password">
					</div>
					<button class="button black mr-2">Login</button>
					<router-link class="button gray" :to="{ name: 'Register' }">Register</router-link>
				</div>
			</div>
		</div>
	</section>
</template>