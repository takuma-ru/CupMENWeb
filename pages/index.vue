<template>
  <div class="index_container">
    <div class="item top">
      <div class="top_text">カップ麺は高専生のいのち</div>
    </div>

    <comlink
      class="link_history"
      :title="'カップ麺の歴史'"
      :img_src="'cupnoodle.jpg'"
      :url="'/Nissin'"
    />

    <div
      v-for="(item, i) in $store.state.toplink"
      :key="i"
    >
      <comlink
        class="link"
        :title="item.title"
        :img_src="item.img"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.top{
  position: relative;
  width: 99%;
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

.link{
  width: 48vw;
}

.link_history{
  width: 70vw;
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