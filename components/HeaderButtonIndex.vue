<template>
  <div class="header-button-index">
    <div class="entire" @click="Show()">
      {{ buttonItem.header_name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonItem: {
			type: Object
    }
  },
  data() {
    return {
    }
  },
  methods: {
    Show(){
      this.$router.push(this.buttonItem.src);
    }
  }
}
</script>

<style scoped>
.header-button-index {
  text-align: center;
  width: 15%;
  margin: 0px 0.2%;
  height: 80%;
}
.entire {
  background-color: orange;
  color: white;
  font-weight: bold;
  width: 100%;
  font-size: 1.1em;
}
</style>