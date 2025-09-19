import { mapActions, mapGetters } from 'vuex'

const core = {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      landerId: 'landerId',
      property: 'property'
    })
  },
  methods: {
    ...mapActions({
      setLanderId: 'setLanderId',
      setProperty: 'setProperty'
    })
  }
}

export default core