<template>
	<div class="col home-widget">
		<div class="card">
			<div class="card-head">
				<h2 class="card-title">Popular Category</h2>
			</div>
			<div class="card-body category">
				<a href="" class="bg-blue-600">CSS</a>
				<a href="" class="bg-blue-600">PHP</a>
				<a href="" class="bg-blue-600">Javascript</a>
				<a href="" class="bg-blue-600">Laravel</a>
				<a href="" class="bg-blue-600">Bug</a>
				<a href="" class="bg-blue-600">People</a>
			</div>
		</div>
	</div>
</template>

<style>
	.home-widget {
		@apply w-1/4 !important;
	}
	.home-widget {
		@apply hidden;
	}
	.home-widget .category {
		@apply flex flex-wrap;
	}
	.home-widget .category a {
		@apply text-white text-xs rounded py-1 px-2 mr-2 mb-2;
	}

	@screen sm {
		.home-widget {
			@apply block;
		}
	}
</style>