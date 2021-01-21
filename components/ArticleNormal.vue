<template>
  <div class="article-normal" :style="{ 'background-image': 'url(' + imageGenre[articleItem.genre] + ')' }">
    <div class="hot" v-if="articleItem.hot">
      <img src="../assets/img/components/Hot.svg">
    </div>
    <div class="title">
      <p>
        <span v-for="(item,i) in inhibitNewline" :key="i" class="ibnl">
          {{item}}&ensp;
        </span>
      </p>
    </div>
    <div class="lower">
      <div class="image">
        <img :src="articleItem.img">
      </div>
      <div class="info">
        <p class="price">希望小売価格 <span>{{articleItem.price | priceFormat}}</span></p>
        <p class="description">{{articleItem.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ImageRamen from '@/assets/img/components/RamenFrame.svg';
import ImageSoba from '@/assets/img/components/SobaFrame.svg';
import ImageUdon from '@/assets/img/components/UdonFrame.svg';
import ImageYakisoba from '@/assets/img/components/YakisobaFrame.svg';
import ImageSonota from '@/assets/img/components/SonotaFrame.svg';
export default {
  props: {
    articleItem: {
			type: Object
    }
  },
  data() {
    return {imageGenre: [
      ImageRamen,
      ImageSoba,
      ImageUdon,
      ImageYakisoba,
      ImageSonota
    ]};
  },
  filters: {
    priceFormat: function (value) {
      if (value == -1) {
        return '(不明)';
      }
      else {
        return '￥' + value + '円(税込)'
      }
    }
  },
  computed: {
    inhibitNewline: function() {
      let str = (this.articleItem.name).split(/\s|　/);
      return str;
    },
    background: function() {
      return backgroundURL;
    }
  }
}
</script>

<style scoped>
.article-normal {
  width: 450px;
  height: 300px;
  padding-left: 50px;
  padding-right: 60px;
  padding-top: 30px;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}
.title {
  margin: 0px;
  justify-content: center;
  align-items: center;
}
.title p {
  text-align: center;
  font-size: 1.2em;
  color: #221000;
  font-family: serif;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 10px;
}
.lower {
  display: flex;
  color: #444444;
}
.image {
  width: 140px;
}
img {
  width: 130px;
  margin-right: 10px;
  margin-left: 0px;
}
.info {
  width: 500px;
}
p.description {
  height: 80px;
  overflow-y: scroll;
}
.price {
  font-size: 1em;
}
.price span {
  font-size: 1.3em;
}
.ibnl {
  display: inline-block;
}
.hot {
  position: absolute;
  bottom: 100px;
  left: 50px;
}
.hot img {
  width: 40px;
}
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: inset 0 0 2px #777; 
}
::-webkit-scrollbar-thumb{
  background: #ccc;
  border-radius: 10px;
  box-shadow: none;
}
</style>