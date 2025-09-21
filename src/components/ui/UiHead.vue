<template>
  <div :class="myclass">
    <image-item 
      :context="{url: 'lpuEkSePpwewsvqsCtzvqRMz/PrairieBandLogo.png'}"/>
  </div>
</template>

<script>
import ImageItem from '../elements/ImageItem.vue'
export default {
  name: 'UiHead',
  props: {
    myclass: {
      type: String,
      default:'ui-header'
    }
  },
  components: { ImageItem },
}
</script>

<style>

</style>