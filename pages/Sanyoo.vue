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
      about: "<ul><li>名称: サンヨー食品株式会社</li><li>創業: 1953年11月</li><li>資本金: 5億円</li><li>従業員数: 6983人(2019/3現在)</li></ul>",
      slogan: "良い味の創造<br>迅速なる行動、熱心な取組",
      brand: ['サッポロ一番　袋麺', 'サッポロ一番　どんぶり', 'カップスター', '和ラー', 'ポケモンヌードル', '名店の味', '旅麺', '焼きそば'],
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