import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import UserLogin from './components/UserLogin.vue'
import FilmDetail from './components/FilmDetail.vue'
import NotFoundComponent from './views/NotFoundComponent.vue'

Vue.use(Router);

export default new Router({
	// mode: "history", //default hash
	routes: [
		{	path: '/', redirect: '/home' },
		{	path: '/home', component: Home, name: 'home' },
    { path: "/userlogin", component: UserLogin },
		{ path: "/film/:id", component: FilmDetail },
		{	path: '*', component: NotFoundComponent }
	]
})

