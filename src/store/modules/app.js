import {
	SHOW_LEFT_NAV,
	SHOW_LOADING
} from '../mutation-type'

var state = {
	showLeftNav: false,
	showLoading: false
};

var getters ={
	showLeftNav: (state) => state.showLeftNav
}

var mutations = {
	[SHOW_LEFT_NAV] (state, data) {
		state.showLeftNav = data;
	},

	[SHOW_LOADING] (state, data) {
		state.showLoading = data;
	}
}

var actions = {
	toggleLeftNav: ({commit, state}) => {
		commit(SHOW_LEFT_NAV, !state.showLeftNav);
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}
