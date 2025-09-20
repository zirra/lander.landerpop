<template>
  <div class="main-menu">
    
    <ui-head />
    <div v-if="menuMode">
      
      <ui-promocard 
       @click="setMenuMode(false)"/>
      
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
import GameScratcher from '@/components/widgets/GameScratcher.vue'
export default {
  components: { UiHead, UiGameCard, UiPromocard, GameScratcher },
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