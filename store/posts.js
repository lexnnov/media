export const state = () => ({
	items: [],
	item: null,
	page: 1,
	totalCount: 0,
	totalLastCount: 0,
	search: ''
})

export const getters = {
	items: state => state.items,
	item: state => state.item,
	page: state => state.page,
	totalCount: state => state.totalCount,
	search: state => state.search
}

export const actions = {
	async getAll ({ state, commit }) {
		const { data: items, headers: { 'x-total-count': totalCount } } = await this.$axios.get(`posts?_page=${state.page}&_embed=comments&q=${state.search}`)
		commit('SET_ITEMS', items)
		commit('SET_TOTAL_COUNT', totalCount)
	},
	async savePost ({ state, commit }) {
		await this.$axios.patch(`posts/${state.item.id}`, {
			body: state.item.body
		})
	},
	setPage ({ commit, dispatch }, page) {
		commit('SET_PAGE', page)
		dispatch('getAll')
	},
	updateItem ({ commit, dispatch }, payload) {
		commit('UPDATE_POST', payload)
	},
	updateSearch ({ commit, dispatch }, payload) {
		commit('UPDATE_SEARCH', payload)
		commit('SET_PAGE', 1)
		dispatch('getAll')
	},
	async getOne ({ state, commit }, alias) {
		const { data } = await this.$axios.get(`posts/${alias}`)
		commit('SET_ITEM', data)
	}
}

export const mutations = {
	SET_ITEMS (state, payload) {
		state.items = payload
	},
	SET_ITEM (state, payload) {
		state.item = payload
	},
	UPDATE_POST (state, payload) {
		state.item = { ...state.item, ...payload }
	},
	SET_TOTAL_COUNT (state, payload) {
		state.totalCount = payload
	},
	SET_PAGE (state, payload) {
		state.page = payload
	},
	UPDATE_SEARCH (state, payload) {
		state.search = payload
	}
}
