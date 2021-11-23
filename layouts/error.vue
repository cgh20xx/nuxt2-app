<template>
  <div>
    <h1>對不起出錯啦</h1>
    <p>{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
</style>