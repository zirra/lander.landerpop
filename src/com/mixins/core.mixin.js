import { mapActions, mapGetters } from 'vuex'

const core = {
  data () {
    return {
      imageRoot: process.env.VUE_APP_IMAGE_ROOT,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    }
  },
  computed: {
    ...mapGetters({
      menuMode: 'menuMode',
      widget: 'widget'
    })
  },
  methods: {
    ...mapActions({
      setMenuMode: 'setMenuMode',
      setWidget: 'setWidget'
    })
  }
}

export default core