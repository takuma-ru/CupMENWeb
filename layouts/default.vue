<template>
  <!--
    このファイルにはすべてのページ共通で表示させたい物を書く
    例). header, footer
  -->
  <div>
    <div class="header"></div>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      
    }
  }
</script>

<style>
  body{
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;

    background-image: url("../assets/img/background.svg");
  }

  .main{
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: calc(64px + 1vh);
    margin-left: 1vw;
    margin-right: 1vw;
    width: 98%;
    min-height: calc(100vh - (64px + 1vh));
    z-index: 1;
  }

  .header{
    /*　↓　変更禁止*/
    position: fixed;
    height: 64px;
    width: 100vw;
    margin-top: 0px;
    z-index: 99;
    /*　↑　変更禁止*/

    background-color: gray;
  }
</style>
