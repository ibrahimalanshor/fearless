<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-left">
				<router-link class="navbar-brand" :to="{ name: 'Home' }">Fearless</router-link>
				<button class="navbar-toggle">
					<i class="fa fa-bars"></i>
				</button>
				<ul class="navbar-menu">
					<li><a href="" class="navbar-link">Questions</a></li>
					<li><a href="" class="navbar-link">Article</a></li>
					<li><a href="" class="navbar-link">Chat Room</a></li>
				</ul>
			</div>
			<div class="navbar-right">
				<form action="" class="navbar-form">
					<input type="text" class="navbar-search" placeholder="Search Question">
				</form>
				<div class="navbar-divider"></div>
				<div v-if="login">
					user
				</div>
				<router-link class="button black" :to="{ name: 'Login' }" v-else>Login</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState('auth', [
				'login'
			])
		}
	}
</script>

<style>
	.navbar {
		@apply bg-white h-16 border-b flex items-center;
	}
	.navbar .container {
		@apply flex items-center justify-between;
	}
	.navbar-left {
		@apply flex items-center;
	}
	.navbar-right {
		@apply flex flex-grow;
	}
	.navbar-brand {
		@apply text-lg text-blue-600 font-bold pr-6 hidden;
	}
	.navbar-toggle {
		@apply mr-4;
	}
	.navbar-menu {
		@apply hidden -mx-3;
	}
	.navbar-link {
		@apply px-3 text-sm text-gray-500;
	}
	.navbar-link:hover {
		@apply text-gray-800;
	}
	.navbar-form {
		@apply flex-grow mr-4;
	}
	.navbar-search {
		@apply bg-gray-100 rounded py-2 px-3 w-full;
	}
	.navbar-divider {
		@apply border-r border-gray-100 py-2 mx-4 hidden;
	}

	@screen sm {
		.navbar-right {
			@apply flex-grow-0;
		}
		.navbar-form {
			@apply mr-0;
		}
		.navbar-brand {
			@apply block;
		}
		.navbar-toggle {
			@apply hidden;
		}
		.navbar-divider {
			@apply block;
		}
	}
	@screen md {
		.navbar-menu {
			@apply flex;
		}
	}
</style>