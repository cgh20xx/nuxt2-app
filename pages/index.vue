<template>
  <div>
    <Navi />
    <h1>{{ $t('homeH1') }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('mounted index.vue')
  },
  head() {
    return this.$nuxtI18nHead()
  },
}
</script>
