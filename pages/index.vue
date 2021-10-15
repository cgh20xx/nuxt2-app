<template>
  <div>
    <Navi />
    <h1>{{ $t('homeH1') }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created index.vue')
  },
  mounted() {
    // console.log('mounted index.vue')
  },
  head() {
    return this.$nuxtI18nHead()
  },
}
</script>
