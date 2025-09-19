const state = {
  termsconditions: {
    terms: [
     'Awards are linked to your mobile number and can\'t be transferred.',
     'Must be collected in person at the business location that issued the promotion.',
     'Awards have no cash value and can’t be exchanged for cash or credit.',
     'Valid only during the promotional period listed.',
     'The business may cancel or change promotions at any time.'
    ]
  }
}

const getters = {
  termsconditions: state => state.termsconditions
}

const mutations = {
}

const actions = {
}

export default {
  state,
  actions,
  mutations,
  getters
}