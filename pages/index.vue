<template>
  <div>
    <h1 v-html="$t('homeH1')"></h1>
    <!-- <img src="/favicon.ico" alt="" /> -->

    <!-- 放在 assets 目錄下的圖片，若為動態組成的路徑，則要使用 require() -->
    <img :src="require(`~/assets/${$i18n.locale}/share_party.jpg`)" alt="" />
    <!-- 放在 static 目錄下的圖片，則要傳入字串。 -->
    <img :src="`${$i18n.locale}/share_party.jpg`" alt="" />
  </div>
</template>

<script>
export default {
  created() {
    console.log('created index.vue')
    // console.log(this)
  },
  // head() {
  //   return this.$nuxtI18nHead()
  // },
  layout: 'LayoutDefault',
  head() {
    return {
      // https://thenextbit.de/en/blog/nuxtjs-seo
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
      title: this.$t('homeH1'),
    }
  },
}
</script>
