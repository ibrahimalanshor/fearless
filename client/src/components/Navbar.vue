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

				<dropdown v-if="login">
					<template v-slot:toggle>
						<img :src="user.photo" class="navbar-user-photo">
					</template>
					<ul class="dropdown md right">
						<li class="dropdown-item"><a href="" class="dropdown-link">
							<span class="font-semibold block">{{ user.name }}</span>
							<small class="text-gray-500">@{{ user.username }}</small>
						</a></li>
						<li class="dropdown-item"><a href="" class="dropdown-link">Dashboard</a></li>
						<li class="dropdown-item"><a href="" class="dropdown-link">Profile</a></li>
						<li class="dropdown-item"><button class="dropdown-link text-red-500" @click="logout = true">Logout</button></li>
					</ul>
				</dropdown>

				<router-link class="button black" :to="{ name: 'Login' }" v-else>Login</router-link>
			</div>
		</div>

		<transition name="fade">
			<div v-if="logout">
				<logout-modal v-model="logout" />
			</div>
		</transition>

	</nav>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'
  import Dropdown from './Dropdown'
  import { LogoutModal } from './auth'

	export default {
		components: {
			Dropdown, LogoutModal
		},
		data() {
			return {
				logout: false
			}
		},
		computed: {
			...mapState('auth', [
				'login'
			]),
			...mapGetters('auth', [
				'user'
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
	.navbar-user-photo {
		@apply w-10 h-full object-cover rounded-full;
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