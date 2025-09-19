const MUTATE_PROPERTY = 'mutateProperty'

const state = {
  property: null
}

const getters = {
  property: (state) => {
    return state.property
  }
}

const mutations = {
  mutateProperty (state, prop) {
    state.property = prop
  }
}

const actions = {
  setProperty ({ commit }, prop) {
    commit (MUTATE_PROPERTY, prop)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}