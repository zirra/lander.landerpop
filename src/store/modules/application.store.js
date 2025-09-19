import Storage from '@/com/system/storage'

const MUTATE_LANDERID = 'mutateLanderId'
const MUTATE_PROPERTY = 'mutateProperty'

const state = {
  landerId: null,
  property: null
}

const getters = {
  landerId: (state) => {
    if(Storage.load('lid')) {
      state.landerId = Storage.load('lid')
      return state.landerId
    } else {
      return state.landerId
    }
  },
  property: (state) => {
    if(Storage.load('pid')) {
      state.property = Storage.load('pid')
      return state.property
    } else {
      return state.property
    }
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