<template>
  <div class="prospect-entry">
    Prospect - {{ property }} - {{ landerId }}
  </div>
</template>

<script>
export default {
  name: 'ProspectEntry',
  data: () => ({
    propId: null,
    lndrId: null
  }),
  async mounted () {
    
    this.propId = this.$route.params['propertyId']
    this.lndrId = this.$route.params['landerId']

    this.setProperty(this.propId)
    this.setLanderId(this.lndrId)
    
    if (this.property && this.landerId) {
      this.$router.push({ name: 'main'})
    }
  }
}
</script>

<style>

</style>