<template>
  <div class="index_container">
    <div class="item top">
      <div class="top_text">カップ麺は高専生のいのち</div>
    </div>

    <comlink
      class="link_history"
      :title="'カップ麺の歴史'"
      :img_src="'cupnoodle.jpg'"
      :url="'/About'"
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
  background-color: rgb(175, 175, 175);
}

.top_text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.link_history{
  width: 100%;
}

@media screen and (max-width: 960px) {
  .link{
    width: 100%;
  }
  .link_history{
    width: 100%;
  }
}
</style>