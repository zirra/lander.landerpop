<template>
  <div class="component-signup">
    <image-item 
      :context="{url: 'https://landerpop.s3.us-east-1.amazonaws.com/lpuEkSePpwewsvqsCtzvqRMz/PrairieBandLogo.png'}"
      class="form-head"/>

    <h1>Sign Up</h1>

    <p><strong>How it works:</strong> Awards are linked to the mobile number that received the promotion. They can only be redeemed in person at the location that issued the promotion.</p>
    <br/>

    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Mobile Number', id: 'mobile'}"
      key="mobile1" />
    <input-field 
      @inputupdated="updateField"
      :context="{placeholder: 'Email Address', id: 'email'}"
      key="email1" />

    <br/>
    <button>SUBMIT</button>
    <br/><br/>
    
    <p><strong>“Standard terms apply. Non-transferable. No cash value. See full T&Cs.”</strong></p>
    <br/>
    <p class="note">For the complete legal <a href="https://landerpop.s3.us-east-1.amazonaws.com/legal/TermsConditions.html" target="_blank">Terms & Conditions</a>, please visit our website.</p>
    

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