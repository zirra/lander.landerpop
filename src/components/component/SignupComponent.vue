<template>
  <div class="component-signup">
    <image-item 
      :context="{url: 'https://landerpop.s3.us-east-1.amazonaws.com/lpuEkSePpwewsvqsCtzvqRMz/PrairieBandLogo.png'}"
      class="form-head"/>

    <h1>{{ title }}</h1>

    <p><strong>How it works:</strong> Awards are linked to the mobile number that received the promotion. They can only be redeemed in person at the location that issued the promotion.</p>
    <br/>
    <p>Please provide the following information to continue and gain access to the games to win promotions.</p>
    <br/>

    <signup-block />

    <p><strong>“Standard terms apply. Non-transferable. No cash value. See full T&Cs.”</strong></p>
    <br/>
    <p class="note">For the complete legal <a href="https://landerpop.s3.us-east-1.amazonaws.com/legal/TermsConditions.html" target="_blank">Terms & Conditions</a>, please visit our website.</p>
    

  </div>
</template>

<script>
import ImageItem from '@/components/elements/ImageItem.vue'
import SignupBlock from './SignupBlock.vue'
export default {
  components: { ImageItem, SignupBlock },
  name: 'SignupComponent',
  props: {
    title: {
      type: String,
      default: 'Signup'
    }
  },
  async mounted () {
  }
}
</script>

<style>

</style>