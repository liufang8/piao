<template>
	<div class="center-image-view">
		<img :src="src">
	</div>
</template>

<script>
	export default {
		props: {
			src: {
				type: String,
				required: true
			}
		}
	}
</script>

<style>
	.center-image-view img {
		max-width: 100%;
		height: auto;
	}
</style>