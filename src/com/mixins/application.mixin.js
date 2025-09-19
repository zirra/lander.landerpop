import { mapActions, mapGetters } from 'vuex'

const core = {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      property: 'property'
    })
  },
  methods: {
    ...mapActions({
      setProperty: 'setProperty'
    })
  }
}

export default core