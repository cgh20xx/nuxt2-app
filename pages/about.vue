<template>
  <div>
    <Navi />
    <h1>{{ $t('aboutH1') }}</h1>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('mounted about.vue')
  },
  data() {
    return {
      count: 0,
    }
  },
}
</script>