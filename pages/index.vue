<template>
  <div class="index_container">
    <div class="item top">
      <img class="top_img" style="top: 0;" src="../assets/img/top.svg">
      <div class="top_text">カップ麺は高専生のいのち！</div>
      <img class="top_img" style="bottom: 0;" src="../assets/img/top.svg">
    </div>

    <comlink
      class="link_history"
      :title="'カップ麺の歴史'"
      :img_src="'2-19-1-768x557.jpg'"
      :url="'/About'"
      :source="'https://www.nissin.com/jp/about/history/uploads/2018/09/2-19-1-768x557.jpg'"
    />

    <div class="links_wrapper">
      <span
        v-for="(item, i) in $store.state.toplink"
        :key="i"
      >
        <comlink
          :title="item.title"
          :img_src="item.img"
          :url="item.url"
          :source="item.source"
        />
      </span>
    </div>
  </div>
</template>

<script>
import comlink from '../components/Top_CompanyLink'

export default {
  data () {
    return {
      link: this.$store
    }
  },

  components: {
    comlink
  }
}
</script>

<style>
.index_container{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.links_wrapper{
  display: grid;
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, calc(50% - 8px));
  grid-column-gap: 8px;
}

.top{
  position: relative;
  width: 100%;
  height: 40vh;
  margin-bottom: 2vh;
  background-color: rgb(251, 255, 236);
}

.top_img{
  position: absolute;
  width: 100%;
}

.top_text{
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.link_history{
  width: 100%;
}

@media (min-width: 300px) {
  .top_text {
    font-size: calc(1.5rem + ((1vw - 3px) * 3.8272));
  }
}
@media (min-width: 1920px) {
  .top_text {
    font-size: 86px;
  }
}

@media screen and (max-width: 960px) {
  .link{
    width: 100%;
  }
  .link_history{
    width: 100%;
  }
  .links_wrapper{
    grid-template-columns: repeat(auto-fit, calc(100% - 8px));
  }
}
</style>