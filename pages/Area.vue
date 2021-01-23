<template>
  <div>
    <Article class="item" v-for="(item, i) in $store.state.area" :key="i" :articleItem="item"></Article>
  </div>
</template>

<script>
import Article from '../components/ArticleSpecial'

export default {
  components: {
    Article
  }
}
</script>

<style>

</style>