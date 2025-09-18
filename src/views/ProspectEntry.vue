<template>
  <div class="prospect-entry">
    Prospect
  </div>
</template>

<script>
export default {
  name: 'ProspectEntry',
  data: () => ({
    propertyId: null,
    landerId: null
  }),
  async mounted () {
    this.propertyId = this.$route.params['propertyId']
    this.landerId = this.$route.params['landerId']

    
  }
}
</script>

<style>

</style>