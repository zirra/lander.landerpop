import { mapActions, mapGetters } from 'vuex'

const core = {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      landerId: 'landerId',
      property: 'property',
      widget: 'widget'
    })
  },
  methods: {
    ...mapActions({
      setLanderId: 'setLanderId',
      setProperty: 'setProperty',
      setWidget: 'setWidget'
    })
  }
}

export default core