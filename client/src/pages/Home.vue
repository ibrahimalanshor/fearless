<template>
	<section class="container wrapper">
		<div class="row lg">
			
			<home-sidebar />

			<main class="col home-content">
				
				<div class="card post create">
					<div class="card-body flex">
						<img src="@/assets/user.jpg" class="user-img">
						<div class="placeholder">Ask a questions</div>
					</div>
				</div>

				<div class="card post">
					<div class="card-body">
						<div class="user">
							<img src="@/assets/user.jpg" class="user-img">
							<div>
								<h2 class="user-name">Ahmad Tobari</h2>
								<time>22 day ago</time>
							</div>
						</div>
						<div class="content">
							<p>I am learning laravel now, but i having error like this, i tryna using post method, but it always show csrf error?</p>
							<p>Any solution please?</p>
						</div>
						<div class="social">
							<button><i class="far fa-heart social-icon"></i> 22</button>
							<button><i class="far fa-comment social-icon"></i> 24</button>
						</div>
					</div>
				</div>

				<div class="card post">
					<div class="card-body">
						<div class="user">
							<img src="@/assets/user.jpg" class="user-img">
							<div>
								<h2 class="user-name">Ahmad Tobari</h2>
								<time>22 day ago</time>
							</div>
						</div>
						<div class="content">
							<p>I dont know what is happened, i just install livewire but its show error like below</p>
							<img src="@/assets/error.png" alt="">
						</div>
						<div class="social">
							<button><i class="far fa-heart social-icon"></i> 22</button>
							<button><i class="far fa-comment social-icon"></i> 24</button>
						</div>
					</div>
				</div>

			</main>

			<home-widget />

		</div>
	</section>
</template>

<script>
	import { HomeSidebar, HomeWidget } from '@/components/home'

	export default {
		components: {
			HomeSidebar, HomeWidget
		}
	}
</script>

<style>
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