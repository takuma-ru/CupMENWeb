<template>
  <div @click="Show()" class="block item">
    <div class="back_img">
      <img 
        class="front_img"
        v-bind:src="src"
      />
    </div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      src: require("../assets/img/" + this.img_src)
    }
  },

  props: [
    'title',
    'img_src',
    'url'
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
  background-color: grey;
  transition-duration: 0.5s;
}

.back_img {
  width: 100%;
  height: 25vh;
  background: #000;
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
  transform: scale(1.05);
  transition-duration: 0.25s;
}

.title{
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  box-sizing: border-box;
  font-size: 3.5em;
  line-height: 25vh;
  text-align: center;
}
</style>
