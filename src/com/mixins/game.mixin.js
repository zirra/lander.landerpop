import { mapActions, mapGetters } from 'vuex'

const core = {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      termsconditions: 'termsconditions'
    })
  },
  methods: {
    ...mapActions({
    })
  }
}

export default core