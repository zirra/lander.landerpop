<template>
  <input type="text" 
    :placeholder="context.placeholder" 
    v-model="myinput" 
    :id="context.id"
    @input="debounceSearch">
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  name: 'InputField',
  props: {
    context: {
      type: Object
    },
    value: {
      type: String,
      default: null
    }
  },
  mounted () {
    if(this.value) {
      this.myinput = this.value
    }
  }, 
  data: () => ({
    myinput: null
  }),
  methods: {
    debounceSearch: debounce( function () { this.debounceA() }, 250),
    debounceA() {
      this.$emit('inputupdated', this.myinput)
    }
  }
}
</script>