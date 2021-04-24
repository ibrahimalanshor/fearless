<template>
	<div class="alert blue alert-b" v-if="show">
		<div class="container">
			<p>{{ msg }}</p>
			<button @click="close">
				<i class="fa fa-times"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['show', 'msg'],
		model: {
			prop: 'show',
			event: 'close'
		},
		methods: {
			close() {
				this.$emit('close', false)
			}
		}
	}
</script>