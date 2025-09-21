<template>
  <div class="singup-block">
    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Mobile Number', id: 'mobile'}"
      key="mobile1" />
    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Email Address', id: 'email'}"
      key="email1" />

    <br/>
    <button @click="setSignin">SUBMIT</button>
    <br/><br/>
  </div>
</template>

<script>
import Storage from '@/com/system/storage'
import InputField from '../elements/InputField.vue'

export default {
  name: 'SignupBlock',
  components: { InputField },
  methods: {
    updateField (e) {
      console.log(e)
    },
    setSignin () {
      Storage.saveData('opt', true)
      this.setOptin(true)
    }
  }
}
</script>

<style>

</style>