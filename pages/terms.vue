<template>
  <div>
    <h1>{{ $t('termsH1') }}</h1>
    <p>123</p>
    <component :is="localTerms" />
    <!-- <component :is="'TermsEnUs'" /> -->
    <!-- <my-terms /> -->
    <!-- <TermsZhTw /> -->
    <!-- <TermsEn /> -->
  </div>
</template>

<script>
export default {
  layout: 'LayoutDefault',
  asyncData() {
    console.log('asyncData terms.vue')
  },
  created() {
    console.log('created terms.vue')
  },
  computed: {
    localTerms() {
      return `Terms${this.toPascalCase(this.$i18n.locale)}`
    },
  },
  methods: {
    toPascalCase: function (string) {
      return string
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
          new RegExp(/\s+(.)(\w*)/, 'g'),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), (s) => s.toUpperCase())
    },
  },
  // components: {
  //   'my-terms': () => {
  //     console.log('============')
  //     console.log(this)
  //     return import(`~/components/terms/${'En'}`)
  //   },
  // },
}
</script>