<template>
  <div>
    <div class="top_title top_font">カップ麺の歴史</div>
    <div v-for="(item, i) in $store.state.history" :key="i" :articleItem="item" class="hishis">
        {{item.year}}
        {{item.contents}}
        {{item.supplement}}
    </div>
</div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
}
</script>

<style>
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
.hishis {
    border-bottom: orange solid 2px;
    padding: 10px;
}
</style>