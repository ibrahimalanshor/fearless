<template>
	<div class="relative" v-on-clickaway="close">
		<div class="h-full cursor-pointer" @click="open = !open">
			<slot name="toggle"></slot>
		</div>
		<transition name="fade">
			<div v-show="open">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
	import { mixin as clickaway } from 'vue-clickaway'

	export default {
		data() {
			return {
				open: false
			}
		},
		mixins: [clickaway],
		methods: {
			close() {
				this.open = false
			}
		}
	}
</script>