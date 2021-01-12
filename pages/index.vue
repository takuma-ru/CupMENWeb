<template>
  <div>
    <div v-for="(item, i) in $store.state.toplink" :key="i">
      <comlink :title="item.title" :url="item.url"></comlink>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
import comlink from '../components/Top_CompanyLink'

export default {
  data () {
    return {
      link: this.$store
    }
  },

  components: {
    comlink
  }
}
</script>