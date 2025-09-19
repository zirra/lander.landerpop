<template>
  <div class="prospect-entry">
    Prospect - {{ property }} - {{ landerId }}
  </div>
</template>

<script>
import Storage from '@/com/system/storage'

export default {
  name: 'ProspectEntry',
  data: () => ({
    propId: null,
    lndrId: null
  }),
  async mounted () {

    let tpropId = this.$route.params['propertyId']
    let tlndrId = this.$route.params['landerId']

    if (this.property) {
      if(this.property != tpropId) {
        Storage.saveData('pid', tpropId)
        this.setProperty(tpropId)  
      }
    } else {
      Storage.saveData('pid', tpropId)
    }

    if (this.landerId) {
      if(this.landerId != tlndrId) {
        alert('user not consistent')
        this.setLanderId(tlndrId)  
      }
    } else {
      Storage.saveData('lid', tlndrId)
      this.setLanderId(tlndrId)
    }
    console.log(this.property + ' ' + this.landerId)
  }
}
</script>

<style>

</style>