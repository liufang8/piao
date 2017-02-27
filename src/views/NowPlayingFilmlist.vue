<template>
	<div class="film-list">
		<FilmItem v-for="film in films" :film="film"></FilmItem>
	</div>
</template>

<script type="text/javascript">
	import FilmItem from '../components/FilmItem.vue'

	export default {
		props: {
			films: {
				type: Array,
				required: true
			}
		},

		components: {
			FilmItem
		}
	}	
</script>

<style>
	.film-list {
		margin-top: 65px; 
		text-align: center;
	}
</style>