<template>
  <img :src="`${imageRoot}${context.url}`" />
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    context: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>