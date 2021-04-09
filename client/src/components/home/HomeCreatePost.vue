<template>
	<div class="modal">
		<div class="modal-overlay create-post-overlay"></div>

		<div class="modal-content create-post-content">
			<div class="card modal-card">
				<div class="card-head">
					<h2 class="card-title">New Question</h2>
					<button @click="closeModal">
						<i class="fa fa-times"></i>
					</button>
				</div>
				<div class="card-body">
					<div class="form">
						<label>Question</label>
						<textarea class="input" placeholder="Question"></textarea>
					</div>
					<div class="form">
						<label>File</label>
						<label class="custom-file">
							<input type="file" class="custom-file-hidden">
							<div class="custom-file-input">
								<div class="custom-file-browse">Browse</div>
								<div class="custom-file-placeholder">
									Upload
								</div>
							</div>
						</label>
					</div>
					<hr class="hr">
					<button class="button black w-full">Send</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		model: {
			prop: 'open',
			event: 'modaling'
		},
		props: {
			open: Boolean
		},
		methods: {
			closeModal() {
				this.$emit('modaling', false)
			}
		}
	}
</script>

<style>
	.create-post-overlay {
		@apply bg-gray-500 !important;
	}
	.create-post-content {
		@apply w-full;
	}

	@screen sm {
		.create-post-content {
			@apply w-3/5;
		}
	}
	@screen lg {
		.create-post-content {
			@apply w-2/5;
		}
	}
</style>