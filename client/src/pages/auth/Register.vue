<template>
	<section class="container wrapper">
		<div class="auth-box w-full sm:w-3/5 md:w-2/5">
			<div class="card">
				<div class="card-head">
					<h1 class="card-title h3">Register</h1>
				</div>
				<div class="card-body">
					<div class="form">
						<label>Name</label>
						<input type="text" class="input" placeholder="Name">
					</div>
					<div class="form">
						<label>Email</label>
						<input type="email" class="input" placeholder="Email">
					</div>
					<div class="form">
						<label>Password</label>
						<input type="password" class="input" placeholder="Password">
					</div>
					<div class="form">
						<label>Confrm Password</label>
						<input type="password_confirmation" class="input" placeholder="Confrm Password">
					</div>
					<button class="button black mr-2">Register</button>
					<router-link class="button gray" :to="{ name: 'Login' }">Login</router-link>
				</div>
			</div>
		</div>
	</section>
</template>