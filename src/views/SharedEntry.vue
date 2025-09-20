<template>
  <div class="shared-entry">
    <signup-component 
      :title="`Shared Signup`" />
  </div>
</template>

<script>
import SignupComponent from '@/components/component/SignupComponent.vue'
export default {
  components: { SignupComponent },
  name: 'SharedEntry',
  data: () => ({
    shareId: null
  }),
  async mounted () {
    this.shareId = this.$route.params['shareId']
    if(!this.shareId) {
      console.log('no share no dice')
    }
  }
}
</script>

<style>

</style>