<template>
  <div class="component-signup">
    <image-item 
      :context="{url: 'https://landerpop.s3.us-east-1.amazonaws.com/lpuEkSePpwewsvqsCtzvqRMz/PrairieBandLogo.png'}"
      class="form-head"/>
    <h1>Sign In</h1>
    <p>To access and participate in any of the offers and awards from our games a phone number and email is required.  Once added you will not be asked for this information again.</p><br/><br/>
    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Mobile Number', id: 'mobile'}"
      key="mobile1" />
    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Email Address', id: 'email'}"
      key="email1" />
    <button>SUBMIT</button>
    <p class="smaller">Opting in with your mobile number allows us to send you special promotions that are linked directly to your number. Only you can redeem them, in person, at our location. No cash value</p>
  </div>
</template>

<script>
import InputField from '@/components/elements/InputField.vue'
import ImageItem from '@/components/elements/ImageItem.vue'
export default {
  components: { ImageItem, InputField },
  name: 'SignupComponent',
  async mounted () {

  },
  methods: {
    updateField (e) {
      console.log(e)
    }
  }
}
</script>

<style>

</style>