<template>
  <div class="main-menu">
    
    <ui-head />
    <div v-if="menuMode">
      
      <ui-promocard 
       @click="setWidget('ui-game-holder')"/>
      
      <ui-game-card 
        :context="{url: 'lpuEkSePpwewsvqsCtzvqRMz/wheelspin.png'}"/>
      
      <ui-game-card 
        :context="{url: 'lpuEkSePpwewsvqsCtzvqRMz/booking.png'}"/>
      
      <ui-game-card 
        :context="{url: 'lpuEkSePpwewsvqsCtzvqRMz/eventimage.png'}"/>
      
    </div>
    <div v-else>
      <component :is="widget" />
    </div>

  </div>
</template>

<script>
import UiHead from '@/components/ui/UiHead.vue'
import UiGameCard from '@/components/ui/UiGameCard.vue'
import UiPromocard from '@/components/ui/UiPromocard.vue'
import UiGameHolder from '@/components/ui/UiGameHolder.vue'

export default {
  components: { UiHead, UiGameHolder, UiPromocard, UiGameCard },
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