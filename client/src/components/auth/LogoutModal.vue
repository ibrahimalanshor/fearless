<template>
	<div class="modal">
		<div class="modal-overlay"></div>
		<div class="modal-content w-1/3">
			<div class="modal-card card">
				<div class="card-head">
					<h2 class="card-title">Logout</h2>
					<button @click="close">
						<i class="fa fa-times"></i>
					</button>
				</div>
				<div class="card-body">
					<p>Are you sure to logout ?</p>
				</div>
				<div class="card-foot">
					<button @click="processLogout" class="button mr-2">Logout</button>
					<button class="button gray" @click="close">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		model: {
			props: 'open',
			event: 'close'
		},
		props: ['open'],
		methods: {
			...mapMutations('auth', ['logout']),
			...mapMutations(['flash']),
			close() {
				this.$emit('close', false)
			},
			processLogout() {
				this.$Progress.start()

				this.logout()
				this.flash('Logout Success')
				
				this.$Progress.finish()
				this.close()
			}
		}
	}
</script>