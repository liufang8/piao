import {
	GET_NOW_PLAYING_FILM_SUCCESS,
	GET_NOW_COMMING_FILM_SUCCESS,
	GET_FILM_DETAIL
} from '../mutation-type'

var state = {
	nowplayingfilms: [],
	nowcommingfilms: [],
	detail: null
}

var getters = {
	nowplayingfilms: state => state.nowplayingfilms,
  detail: state => state.detail
}

var mutations = {
	[GET_NOW_COMMING_FILM_SUCCESS] (state, data) {
		state.nowcommingfilms = data;
	},

	[GET_NOW_PLAYING_FILM_SUCCESS] (state, data) {
		state.nowplayingfilms = data;
	},

	[GET_FILM_DETAIL](state, data) {
		state.detail = data;
	}
}

var actions = {
	getnowplayingfilms: ({commit}) => {
		var data = require('../../api/data');
		commit(GET_NOW_PLAYING_FILM_SUCCESS, data.now_play_data.data.films);
	},
  getFilmDetail: ({commit}) => {
    var data = require('../../api/data');
    commit(GET_FILM_DETAIL, data.sh_data.data.film);
  }
}

export default {
	state,
	getters,
	actions,
	mutations
}
