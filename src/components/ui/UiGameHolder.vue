<template>
  <div class="game-holder">
    <p color="#fff">{{widget}}</p>

    <component :is="widget.game" />
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