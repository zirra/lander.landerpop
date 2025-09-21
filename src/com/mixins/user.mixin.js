import { mapActions, mapGetters } from 'vuex'

const user = {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      optIn: 'optIn'
    })
  },
  methods: {
    ...mapActions({
      setOptin: 'setOptin'
    })
  }
}

export default user