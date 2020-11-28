<template>
  <!--
    このファイルにはすべてのページ共通で表示させたい物を書く
    例). header, footer
  -->
  <div>
    <!--
      各ページへのリンク
      ※テスト用なので後で消す
    -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item @click="$router.push('/')" index="1">Home</el-menu-item>
      <el-menu-item @click="$router.push('/About')" index="2">About</el-menu-item>
      <el-menu-item @click="$router.push('/Acecook')" index="3">Aceccok</el-menu-item>
      <el-menu-item @click="$router.push('/Area')" index="4">Area</el-menu-item>
      <el-menu-item @click="$router.push('/Conveni')" index="5">Coveni</el-menu-item>
      <el-menu-item @click="$router.push('/Myojo')" index="6">Myojo</el-menu-item>
      <el-menu-item @click="$router.push('/Nissin')" index="7">Nissin</el-menu-item>
      <el-menu-item @click="$router.push('/Overseas')" index="8">Overseas</el-menu-item>
      <el-menu-item @click="$router.push('/Sanyoo')" index="9">About</el-menu-item>
      <el-menu-item @click="$router.push('/Toyo')" index="10">Toyo</el-menu-item>
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