<template>
  <div>
    <div class="touhoku_container">
      <img class="item touhoku" src="../assets/img/area/touhoku.svg">
    </div>
    <div class="items wrap">
      <Article class="item" v-for="(item, i) in $store.state.area" :key="i" :articleItem="item"></Article>
    </div>
  </div>
</template>

<script>
import Article from '../components/ArticleSpecial'

export default {
  data(){
    return{
      touhoku_src: require("../assets/img/area/touhoku.svg")
    }
  },
  components: {
    Article
  }
}
</script>

<style>
.touhoku_container{
  text-align: center;
}
.touhoku{
  height: 80vh;
}
.items{
  margin-top: 24px;
}
.wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>