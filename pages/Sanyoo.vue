<template>
  <div>
    <div class="top_title top_font">サンヨー食品</div>
    <Top :about="about" :slogan="slogan" :brand="brand"></Top>
    <div class="items">
    <div class="tag">
      <div class="tag_text">
        <span style="margin-left: 1vw; margin-right: 1vw;">商品紹介</span>
      </div>
    </div>
    <div class="wrap">
      <Article class="item" v-for="(item, i) in $store.state.sanyoo" :key="i" :articleItem="item"></Article>
    </div>
    </div>
    <div class="source">
      出典:
      {{source}}
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
      source: "https://www.sanyofoods.co.jp"
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