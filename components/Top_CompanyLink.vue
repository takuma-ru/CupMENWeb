<template>
  <div @click="Show()" class="block item">
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  props: [
    'title',
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
  width: 100%;
  height: 20vh;
  margin-bottom: 1vh;
  cursor: pointer;
  background-color: grey;
  transition-duration: 0.3s;
}

.block:hover{
  color: white;
  transition-duration: 0.3s;
}

.title{
  font-size: 3.5em;
  line-height: 20vh;
  text-align: center;
}
</style>