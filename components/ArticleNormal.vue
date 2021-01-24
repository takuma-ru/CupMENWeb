<template>
  <div class="article-normal">
    <div class="switch_desctop">
      <div class="entire" :style="{ 'background': 'url(' + imageGenreDesctop[articleItem.genre] + ') no-repeat center', 'background-size': 'contain', 'background-position': 'center'}">
        <div class="formargin">
          <div class="productName">
            <p>
              <span v-for="(item,i) in inhibitNewline" :key="i" class="ibnl">
                {{item}}&ensp;
              </span>
            </p>
          </div>
          <div class="lower">
            <div class="image">
              <img :src="srcimg">
            </div>
            <div class="info">
              <p class="price">希望小売価格 <span>{{articleItem.price | priceFormat}}</span></p>
              <p class="description">{{articleItem.description}}</p>
            </div>
          </div>
        </div>
        <div class="hot" v-if="articleItem.hot">
          <img src="../assets/img/components/Hot.svg">
        </div>
      </div>
    </div>
    <div class="switch_phone">
      <div class="entire" :style="{ 'background': 'url(' + imageGenrePhone[articleItem.genre] + ') no-repeat center', 'background-size': 'contain', 'background-position': 'center'}">
        <div class="formargin">
          <div class="productName">
            <p>
              <span v-for="(item,i) in inhibitNewline" :key="i" class="ibnl">
                {{item}}&ensp;
              </span>
            </p>
          </div>
          <div class="lower">
            <div class="image">
              <img :src="srcimg">
              <div class="hot" v-if="articleItem.hot">
                <img src="../assets/img/components/Hot.svg">
              </div>
            </div>
            <div class="info">
              <p class="price">希望小売価格 <span>{{articleItem.price | priceFormat}}</span></p>
              <p class="description">{{articleItem.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DImageRamen from '@/assets/img/components/RamenFrame.svg';
import DImageSoba from '@/assets/img/components/SobaFrame.svg';
import DImageUdon from '@/assets/img/components/UdonFrame.svg';
import DImageYakisoba from '@/assets/img/components/YakisobaFrame.svg';
import DImageSonota from '@/assets/img/components/SonotaFrame.svg';
import PImageRamen from '@/assets/img/components_cellphone/RamenFrame.svg';
import PImageSoba from '@/assets/img/components_cellphone/SobaFrame.svg';
import PImageUdon from '@/assets/img/components_cellphone/UdonFrame.svg';
import PImageYakisoba from '@/assets/img/components_cellphone/YakisobaFrame.svg';
import PImageSonota from '@/assets/img/components_cellphone/SonotaFrame.svg';
export default {
  props: {
    articleItem: {
			type: Object
    }
  },
  data() {
    return {
      imageGenreDesctop: [
        DImageRamen,
        DImageSoba,
        DImageUdon,
        DImageYakisoba,
        DImageSonota
      ],
      imageGenrePhone: [
        PImageRamen,
        PImageSoba,
        PImageUdon,
        PImageYakisoba,
        PImageSonota
      ],
      srcimg: require("../assets/img/" + this.articleItem.img)
    };
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
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 960px) {
  .article-normal {
    width: 100%;
  }
  .switch_desctop {
    display: none;
  }
  .switch_phone {
    width: 100%;
  }
  .entire {
    width: 100%;
    padding-top: 130%;
    position: relative;
  }
  .formargin {
    margin-left: 8%;
    margin-top: 7%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 86%;
    height: 89%;
  }
  .productName {
    margin: 0px;
    justify-content: center;
    align-items: center;
  }
  .productName p {
    text-align: center;
    font-size: 1.1em;
    color: #221000;
    font-family: serif;
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 1%;
  }
  .lower {
    color: #444444;
    height: 92%;
  }
  .image {
    width: 100%;
    position: relative;
  }
  img {
    display: block;
    width: 50%;
    margin: auto;
  }
  .hot {
    position: absolute;
    bottom: 13%;
    left: 7%;
  }
  .hot img {
    width: 50px;
  }
  .ibnl {
    display: inline-block;
  }
  .info {
    width: 100%;
    height: 100%;
  }
  p.description {
    margin: 0px;
    overflow-y: scroll;
    height: 35%;
  }
  .price {
    font-size: 1em;
  }
  .price span {
    font-size: 1.1em;
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
}
@media screen and (min-width: 960px) {
  .article-normal {
    width: 46%;
    margin-left: 1.2%;
    margin-right: 1.2%;
    min-width: 500px;
  }
  .switch_desctop {
    width: 100%;
  }
  .switch_phone {
    display: none;
  }
  .entire {
    width: 100%;
    padding-top: 50%;
    position: relative;
  }
  .formargin {
    margin-left: 8%;
    margin-top: 7%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 86%;
    height: 72%;
  }
  .hot {
    position: absolute;
    bottom: 13%;
    left: 7%;
  }
  .hot img {
    width: 30px;
  }
  .productName {
    margin: 0px;
    justify-content: center;
    align-items: center;
  }
  .productName p {
    text-align: center;
    font-size: 1.2em;
    color: #221000;
    font-family: serif;
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 1%;
  }
  .lower {
    color: #444444;
    height: 75%;
  }
  .image {
    float: left;
    width: 27%;
  }
  img {
    width: 100%;
    margin-right: 10px;
    margin-left: 0px;
  }
  .info {
    float: right;
    width: 70%;
    height: 100%;
  }
  p.description {
    margin: 0px;
    overflow-y: scroll;
    height: 60%;
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
}

</style>