<template>
	<div id="app">
		<TopMenu></TopMenu>
		<!-- 路由入口 -->
		<router-view></router-view>
		<LeftMenu></LeftMenu>
	</div>
</template>

<script>
	require('./assets/css/icon.css')
	require('./assets/css/main.css')

	import TopMenu from './components/TopMenu.vue'
	import LeftMenu from './components/LeftMenu.vue'
	import { mapGetters } from 'vuex'

	export default {
		name: 'app',
		computed: mapGetters([
			'showLeftNav'
		]),
		components: {
			TopMenu,
			LeftMenu
		}
	}
</script>
