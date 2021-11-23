<template>
  <div>
    <h1>接收URL参数 id</h1>
    <hr />
    <div v-if="this.$route.params.id">id:{{ this.$route.params.id }}</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.params)
  },
  validate({ params }) {
    // params.id 只能為數值
    return /^\d+$/.test(params.id)
  },
}
</script>

<style>
</style>