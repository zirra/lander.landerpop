<template>
  <div class="game-holder">
    <component :is="widget.game" v-if="optIn"/>
    <component :is="`signup-block`" v-else/>
    <p color="#fff">{{widget}} {{ optIn }}</p>
  </div>
</template>

<script>
//import Storage from '@/com/system/storage'
/* eslint-disable no-unused-vars, vue/no-unused-components */
import GameScratcher from '@/components/games/GameScratcher.vue'
import GameSpinner from '@/components/games/GameSpinner.vue'
import SignupBlock from '../component/SignupBlock.vue'

export default {
  name: 'UiGameHolder',
  components: { GameScratcher, GameSpinner, SignupBlock },
  async mounted () {
    window.scrollTo({ top: 0, behavior: 'auto' })
    /*
    if(!this.optIn) {
      alert('need optin')
      Storage.saveData('opt', true)
      this.setOptin(true)
    } else {
      alert('optted')
    }*/
  }
}
</script>

<style>
</style>