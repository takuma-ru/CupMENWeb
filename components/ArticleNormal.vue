<template>
  <div class="article-normal">
    <div class="title">
      <p>{{articleItem.name}}</p>
    </div>
    <div class="lower">
      <div class="image">
        <img :src="articleItem.img">
      </div>
      <div class="info">
        <p class="price">希望小売価格 <span>{{articleItem.price | priceFormat}}</span></p>
        <p>{{articleItem.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleItem: {
			type: Object
    }
  },
  filters: {
    priceFormat: function (value) {
      if (value == -1) {
        return '(不明)';
      }
      else {
        return '￥' + value + '円(税込)'
      }
    }
  }
}
</script>

<style scoped>
.article-normal {
  width: 40%;
  min-width: 500px;
  margin: 20px;
}
.title {
  margin: 0px;
  height: 76px;
  background-color: #ffeccc;
  justify-content: center;
  align-items: center;
}
.title p {
  text-align: center;
  font-size: 1.5em;
  color: #221000;
  font-family: serif;
  font-weight: bold;
}
.lower {
  display: flex;
  color: #444444;
}
.image {
  width: 40%;
}
img {
  width: 100%;
}
.info {
  width: 60%;
}
.price {
  font-size: 1.2em;
}
.price span {
  font-size: 1.3em;
}
</style>