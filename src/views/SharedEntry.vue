<template>
  <div class="shared-entry">
    shared -> {{ shareId}}
  </div>
</template>

<script>
export default {
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