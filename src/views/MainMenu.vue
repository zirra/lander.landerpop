<template>
  <div class="main-menu">
    <ui-head />
    <ui-promocard />
    <ui-game-card 
      :context="{url: 'https://landerpop.s3.us-east-1.amazonaws.com/lpuEkSePpwewsvqsCtzvqRMz/wheelspin.png'}"/>
    <ui-game-card 
      :context="{url: 'https://landerpop.s3.us-east-1.amazonaws.com/lpuEkSePpwewsvqsCtzvqRMz/booking.png'}"/>
  </div>
</template>

<script>
import UiHead from '@/components/ui/UiHead.vue'
import UiGameCard from '@/components/ui/UiGameCard.vue'
import UiPromocard from '@/components/ui/UiPromocard.vue'

export default {
  components: { UiHead, UiGameCard, UiPromocard },
  name: 'MainMenu',
  async mounted () {
    if(!this.property) {
      this.$router.push({name: 'error'})
    }
  }
}
</script>

<style>

</style>