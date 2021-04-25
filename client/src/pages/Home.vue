<template>
	<section class="container wrapper">
		<div class="row lg">
			
			<home-sidebar />

			<main class="col home-content">
				
				<div class="card post create" v-show="login">
					<div class="card-body flex">
						<img src="@/assets/user.jpg" class="user-img">
						<div class="placeholder" @click="ask">Ask a questions</div>
					</div>
				</div>

				<div class="home-heading">
					<h1 class="h6">
						All Question
					</h1>
					<ul class="home-heading-sort">
						<li><button class="link active">Top Question</button></li>
						<li><button class="link">Latest Question</button></li>
					</ul>
				</div>

				<div v-if="posts.length">
					<home-post v-for="(post, key) in posts" :key="key" :post="post" />
				</div>

			</main>

			<home-widget />

			<transition name="fade">
				<div v-show="creating">
					<home-create-post v-model="creating" />
				</div>
			</transition>

		</div>
	</section>
</template>

<script>
	import { mapState } from 'vuex'
	import { HomeSidebar, HomeWidget, HomeCreatePost, HomePost } from '@/components/home'

	export default {
		components: {
			HomeSidebar, HomeWidget, HomeCreatePost, HomePost
		},
		data() {
			return {
				creating: false
			}
		},
		computed: {
			...mapState('auth', [
				'login'
			]),
			...mapState('post', [
				'posts'
			])
		},
		methods: {
			ask() {
				if (this.login) {
					this.creating = true
				} else {
					console.log('authed');
				}
			}
		}
	}
</script>

<style>
	.home-heading {
		@apply flex items-center justify-between mb-4;
	}
	.home-heading-sort {
		@apply flex text-sm;
	}
	.home-heading-sort .link {
		@apply text-gray-500 ml-3;
	}
	.home-heading-sort .link.active, .home-heading-sort .link:hover {
		@apply text-gray-800;
	}

	.home-content .post {
		@apply mb-4;
	}
	.home-content .post .user-img {
		@apply w-12 h-12 object-cover rounded-full mr-4;
	}
	.home-content .post.create .placeholder {
		@apply bg-gray-100 text-gray-500 rounded flex-grow py-3 px-4 cursor-pointer;
	}
	.home-content .post .user {
		@apply flex mb-4;
	}
	.home-content .post .user-name {
		@apply font-bold;
	}
	.home-content .post time {
		@apply text-sm text-gray-400;
	}
	.home-content .post .content {
		@apply mb-4;
	}
	.home-content .post .content p, .home-content .post .content img {
		@apply mb-2;
	}
	.home-content .post .social button {
		@apply text-sm mr-4;
	}
	.home-content .post .social .social-icon {
		@apply mr-1;
	}

	@screen sm {
		.home-content {
			@apply w-2/4 !important;
		}
	}
</style>