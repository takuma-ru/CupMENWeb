<template>
  <div @click="Show()" class="block item">
    <div class="back_img">
      <img 
        class="front_img"
        v-bind:src="src"
      />
    </div>
    <div class="home_title">{{title}}</div>
    <div class="top_source">出典:{{source}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      src: require("../assets/img/top/" + this.img_src)
    }
  },

  props: [
    'title',
    'img_src',
    'url',
    'source'
  ],

  methods: {
    Show(){
      this.$router.push(this.url)
    }
  }

}
</script>

<style>
.block{
  position: relative;
  width: 100%;
  height: 25vh;
  margin-bottom: 1vh;
  color: white;
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  transition-duration: 0.5s;
}

.back_img {
  width: 100%;
  height: 25vh;
  background-color: #000;
}

.block:hover{
  box-shadow: 10px 10px 15px -10px;
  transition-duration: 0.5s;
}

.front_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(0.3) grayscale(50%);
  transition-duration: 0.5s;
}

.block:hover .front_img {
  transform: scale(1.1);
  transition-duration: 0.25s;
}

.home_title{
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  box-sizing: border-box;
  font-size: 3.5em;
  white-space: nowrap;
  line-height: 25vh;
  text-align: center;
}

.top_source{
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 8px;
  font-size: 4px;
  color: grey;
}

@media (min-width: 300px) {
  .home_title {
    font-size: calc(2.25rem + ((1vw - 3px) * 1.2346));
  }
}
@media (min-width: 1920px) {
  .home_title {
    font-size: 56px;
  }
}
</style>
