<template>
  <div class="main-menu">
    <ui-head />
    <ui-game-card />
  </div>
</template>

<script>
import UiHead from '@/components/ui/UiHead.vue'
import UiGameCard from '@/components/ui/UiGameCard.vue'

export default {
  components: { UiHead, UiGameCard },
  name: 'MainMenu',
  async mounted () {
  }
}
</script>

<style>

</style>