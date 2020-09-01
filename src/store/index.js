import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		searchContent: '',
	},
	mutations: {
		getSearch(state, search) {
			state.searchContent = search
		},
	},
	actions: {},
	modules: {},
})
