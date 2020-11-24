<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="$router.push('/')" index="1">Home</el-menu-item>
      <el-menu-item @click="$router.push('/About')" index="2">About</el-menu-item>
    </el-menu>
    <Nuxt />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>