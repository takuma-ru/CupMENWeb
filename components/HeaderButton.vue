<template>
  <div class="header-button">
    <div class="entire" @click="Show()">
      <div class="image_header"><img :src="buttonImg[buttonItem.imgindex]"></div>
      <div class="sentence_header">{{ buttonItem.header_name }}</div>
    </div>
  </div>
</template>

<script>
import imgHistory from '@/assets/img/header/history.svg';
import imgEnterprise from '@/assets/img/header/enterprise.svg';
import imgConveni from '@/assets/img/header/conveni.svg';
import imgTohoku from '@/assets/img/header/tohoku.svg';
import imgOverseas from '@/assets/img/header/overseas.svg';
export default {
  props: {
    buttonItem: {
			type: Object
    }
  },
  data() {
    return {
      buttonImg: [
        imgHistory,
        imgEnterprise,
        imgConveni,
        imgTohoku,
        imgOverseas
      ]
    }
  },
  methods: {
    Show(){
      this.$router.push(this.buttonItem.src);
    }
  }
}
</script>

<style>
.header-button {
  width: 15%;
  margin: 0px 0.2%;
  height: 80%;
}
.entire {
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
}
.image_header {
  float: left;
  height: 80%;
  margin: 0px 5px;
}
.image_header img{
  height: 100%;
}
.sentence_header {
  float: right;
  font-size: 1.1em;
  color: white;
  font-weight: bold;
}

</style>