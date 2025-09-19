const MUTATE_LANDERID = 'mutateLanderId'
const MUTATE_PROPERTY = 'mutateProperty'

const state = {
  landerId: null,
  property: null
}

const getters = {
  landerId: (state) => {
    return state.landerId
  },
  property: (state) => {
    return state.property
  }
}

const mutations = {
  mutateLanderId (state, lander) {
    state.landerId = lander
  },
  mutateProperty (state, prop) {
    state.property = prop
  }
}

const actions = {
  setLanderId  ({ commit }, lander) {
    commit (MUTATE_LANDERID, lander)
  },
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