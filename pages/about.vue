<template>
  <div>
    <h1>{{ $t('aboutH1') }}</h1>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('created about.vue')
  },
  mounted() {
    // console.log('mounted about.vue')
  },
  layout: 'LayoutMain',
  data() {
    return {
      count: 0,
    }
  },
}
</script>