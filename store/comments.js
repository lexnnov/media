export const state = () => ({
	items: [],
	totalCount: 0,
	totalLastCount: 0
})

export const getters = {

	items: state => state.items,
	commentsTotal: state => state.item ? state.item.commentsTotal : 0,
	totalCount: state => state.totalCount,
	totalLastCount: state => state.totalLastCount
}

export const actions = {
	async getAll ({ state, commit }, { id }) {
		const { data } = await this.$axios.get(`/posts/${id}/comments`)
		commit('SET_ITEMS', data)
	}
}

export const mutations = {
	SET_ITEMS (state, payload) {
		state.items = payload
	}
}
