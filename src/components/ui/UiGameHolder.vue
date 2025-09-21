<template>
  <div class="game-holder">
    <component :is="widget.game" />
    <p color="#fff">{{widget}}</p>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars, vue/no-unused-components */
import GameScratcher from '@/components/games/GameScratcher.vue'
import GameSpinner from '@/components/games/GameSpinner.vue'

export default {
  name: 'UiGameHolder',
  components: { GameScratcher, GameSpinner },
  async mounted () {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }
}
</script>

<style>

</style>