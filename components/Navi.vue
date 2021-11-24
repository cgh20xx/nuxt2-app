<template>
  <div>
    <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
    <nuxt-link :to="localePath('/about')">{{ $t('about') }}</nuxt-link>
    <nuxt-link :to="localePath('/terms')">{{ $t('terms') }}</nuxt-link>
    <!-- <nuxt-link :to="localePath('/about?t=123')">{{
      $t('navi.home')
    }}</nuxt-link> -->
    <br />
    <nuxt-link :to="switchLocalePath('zh-TW')">中文</nuxt-link>
    <nuxt-link :to="switchLocalePath('en-US')">English</nuxt-link>
  </div>
</template>

<script>
export default {}
</script>