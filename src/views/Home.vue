<template>
	<div id="home-view">
		<NowPlayingFilmList :films="nowplayingfilms"></NowPlayingFilmList>
	</div>
</template>

<script>
	import NowPlayingFilmList from './NowPlayingFilmList.vue'
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: mapGetters([
			'nowplayingfilms'
		]),
		
		methods: mapActions({
			getnowplayingfilm: 'getnowplayingfilms'
		}),
		
		created() {
			this.getnowplayingfilm();
		},
		
		components: {
			NowPlayingFilmList
		}
	}	
</script>

<style>
	#home-view {
	}
</style>