<template>
  <div class="ui-promo-card">
    Promo Prize Offer - Link to Game<br/>
    {{ context.content }}
  </div>
</template>

<script>
export default {
  name: 'UiPromocard',
  props: {
    context: {
      type: Object
    }
  }
}
</script>

<style>

</style>