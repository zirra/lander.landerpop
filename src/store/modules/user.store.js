import Storage  from '@/com/system/storage'

const MUTATE_LEAD = 'mutateLead'
const MUTATE_OPTIN = 'mutateOptin'

const state = {
  isLead: false,
  optIn: false
}

const getters = {
  isLead: state => state.isLead,
  optIn: (state) => {
    if(Storage.load('opt')) {
      state.optIn = Storage.load('opt')
      return state.optIn
    } else {
      return state.optIn
    }
  }
}

const mutations = {
  mutateIsLead (state, bool) {
    state.isLead = bool
  },
  mutateOptin (state, bool) {
    state.optIn = bool
  }
}

const actions = {
  setIsLead ({ commit }, bool) {
    commit (MUTATE_LEAD), bool
  },
  setOptin ({ commit }, bool) {
    commit(MUTATE_OPTIN, bool)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}