//import storage  from '@/com/system/storage'

const MUTATE_LEAD = 'mutateLead'

const state = {
  isLead: false
}

const getters = {
  isLead: state => state.isLead
}

const mutations = {
  mutateIsLead (state, bool) {
    state.isLead = bool
  }
}

const actions = {
  setIsLead ({ commit }, bool) {
    commit (MUTATE_LEAD), bool
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}