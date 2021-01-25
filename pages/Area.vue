<template>
  <div>
    <div class="top_title top_font">ご当地カップ麺</div>
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
.top_title{
  text-align: center;
}
.wrap{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media (min-width: 300px) {
  .top_font {
    font-size: calc(2.25rem + ((1vw - 3px) * 3.0864));
  }
}
@media (min-width: 1920px) {
  .top_font {
    font-size: 86px;
  }
}
</style>