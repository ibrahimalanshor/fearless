<template>
	<div class="col home-sidebar">
		<div class="card">
			<div class="card-body">
				<ul>
					<li><a href="" class="home-sidebar-link"><i class="far fa-building home-sidebar-icon"></i> Home</a></li>
					<li><a href="" class="home-sidebar-link"><i class="far fa-comment home-sidebar-icon"></i> Questions</a></li>
					<li><a href="" class="home-sidebar-link"><i class="far fa-list-alt home-sidebar-icon"></i> Articles</a></li>
					<li><a href="" class="home-sidebar-link"><i class="far fa-heart home-sidebar-icon"></i> Story</a></li>
					<li><a href="" class="home-sidebar-link"><i class="far fa-user home-sidebar-icon"></i> User</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
	.home-sidebar {
		@apply w-1/4 !important;
	}
	.home-sidebar {
		@apply hidden;
	}
	.home-sidebar-link {
		@apply text-gray-500 inline-block mb-4;
	}
	.home-sidebar-link:hover, .home-sidebar-link.active {
		@apply text-gray-800;
	}
	.home-sidebar-icon {
		@apply w-7;
	}

	@screen sm {
		.home-sidebar {
			@apply block;
		}
	}
</style>