export const state = () => ({
  title: ''
})

export const mutations = {
  UPDATE_TITLE (state, value) {
    state.title = value
  }
}

export const actions = {
  updateTitle ({ commit }, value) {
    commit('UPDATE_TITLE', value)
  }
}

export const getters = {
  getTitle: state => state.title
}
