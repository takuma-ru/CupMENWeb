<template>
  <div>
    <div class="block">
      <h4>ホーム</h4>
      <h4>Nuxt.js + Element?</h4>
      <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
    </div>

    <div v-for="(item, i) in $store.state.sanyoo" :key="i">
      <p>{{ item.name }}</p>
    </div>

  </div>
</template>

<style scoped>
  .block {
    padding: 0 20px;
  }
</style>

<script>
export default {
  data () {
    return {
      value: null,
    }
  },
}
</script>