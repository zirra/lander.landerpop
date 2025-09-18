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
  }
}
</script>

<style>

</style>