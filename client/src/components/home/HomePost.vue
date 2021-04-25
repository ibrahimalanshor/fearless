<template>
	<div class="card post">
		<div class="card-body">
			<div class="user">
				<img :src="post.user.photo" class="user-img">
				<div>
					<h2 class="user-name">{{ post.user.name }}</h2>
					<time>{{ post.date }}</time>
				</div>
			</div>
			<div class="content">
				<p>{{ post.content }}</p>
				<div v-if="post.images.length">
					<img v-for="(img, key) in post.images" :key="key" :src="img">
				</div>
			</div>
			<div class="social">
				<button><i class="far fa-heart social-icon"></i> 22</button>
				<button><i class="far fa-comment social-icon"></i> 24</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['post']
	}
</script>