import Storage from '@/com/system/storage'

const MUTATE_LANDERID = 'mutateLanderId'
const MUTATE_MENUMODE = 'mutateMenuMode'
const MUTATE_PROPERTY = 'mutateProperty'
const MUTATE_WIDGET = 'mutateWidget'

const state = {
  landerId: null,
  property: null,
  menuMode: true,
  widget: 'game-scratcher'
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
  menuMode: state => state.menuMode,
  property: (state) => {
    if(Storage.load('pid')) {
      state.property = Storage.load('pid')
      return state.property
    } else {
      return state.property
    }
  },
  widget: state => state.widget
}

const mutations = {
  mutateLanderId (state, lander) {
    state.landerId = lander
  },
  mutateMenuMode (state, bool) {
    state.menuMode = bool
  },
  mutateProperty (state, prop) {
    state.property = prop
  },
  mutateWidget (state, w) {
    state.widget = w
  }
}

const actions = {
  setLanderId  ({ commit }, lander) {
    commit (MUTATE_LANDERID, lander)
  },
  setMenuMode ({ commit }, bool) {
    commit (MUTATE_MENUMODE, bool)
  },
  setProperty ({ commit }, prop) {
    commit (MUTATE_PROPERTY, prop)
  },
  setWidget ({ commit }, w) {
    commit(MUTATE_MENUMODE, false)
    commit(MUTATE_WIDGET, w)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}