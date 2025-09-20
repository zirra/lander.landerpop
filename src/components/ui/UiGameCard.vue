<template>
  <div class="ui-game-card">
    <image-item  
      :context="context"/>
  </div>
</template>

<script>
import ImageItem from '../elements/ImageItem.vue'
export default {
  components: { ImageItem },
  props: {
    context: {
      type: Object
    }
  }
}
</script>

<style>

</style>