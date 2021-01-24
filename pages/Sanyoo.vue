<template>
  <div>
    <div class="top_title top_font">サンヨー食品</div>
    <Top :about="about" :slogan="slogan" :brand="brand"></Top>
    <div class="items">
      <!--<Article class="item" v-for="(item, i) in $store.state.sanyoo" :key="i" :articleItem="item"></Article>-->
    </div>
  </div>
</template>

<script>
import Top from '../components/AboutCompany'
import Article from '../components/ArticleNormal'

export default {
  data(){
    return{
      about: "概要",
      slogan: "スローガン",
      brand: ['a', 's', 'd'],
      Source: "https://www.sanyofoods.co.jp"
    }
  },
  components: {
    Top,
    Article
  }
}
</script>

<style>
.items{
  margin-top: 24px;
}
.top_title{
  text-align: center;
}

@media (min-width: 300px) {
  .top_font {
    font-size: calc(1.5rem + ((1vw - 3px) * 1.9753));
  }
}
@media (min-width: 1920px) {
  .top_font {
    font-size: 56px;
  }
}
</style>