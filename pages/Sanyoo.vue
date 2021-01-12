<template>
<div>
  <p>サンヨー食品</p>
  <div v-for="(item, i) in $store.state.sanyoo" :key="i">
    <p>{{ item.name }}</p>
    <img :src="item.img" class="img" />
    
    <p v-if="item.price < 0">オープン価格</p>
    <p v-else>価格: {{item.price}} 円</p>
    
    <p>{{item.description}}</p>

    <p v-if="item.genre == 0">ラーメン</p>
    <p v-if="item.genre == 1">うどん</p>
    <p v-if="item.genre == 2">そば</p>
    <p v-if="item.genre == 3">焼きそば</p>
    <p v-if="item.genre == 4">その他</p>

  </div>
</div>
</template>

<style>
  .img {
    height: 100px;
    width: 100px;
  }
</style>