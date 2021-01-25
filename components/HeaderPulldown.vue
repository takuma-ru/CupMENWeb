<template>
  <div class="header-pulldown">
    <div class="entire">
      <select v-model="buttonItem.pulldown[0]" class="entire" @change="onChange">
        <option v-for="(firm, i) in buttonItem.pulldown"
          v-bind:value="i"
          v-bind:key = "i">
        {{ firm.pulldown_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import imgHistory from '@/assets/img/header/history.svg';
import imgEnterprise from '@/assets/img/header/enterprise.svg';
import imgConveni from '@/assets/img/header/conveni.svg';
import imgTohoku from '@/assets/img/header/tohoku.svg';
import imgOverseas from '@/assets/img/header/overseas.svg';
export default {
  props: {
    buttonItem: {
			type: Object
    }
  },
  data() {
    return {
      buttonImg: [
        imgHistory,
        imgEnterprise,
        imgConveni,
        imgTohoku,
        imgOverseas
      ]
    }
  },
  methods: {
    onChange: function(val) {
      console.log(val.target.value);
      this.$router.push(this.buttonItem.pulldown[val.target.value].src);
    }
  }
}
</script>

<style scoped>
.header-pulldown {
  width: 15%;
  min-width: 120px;
  margin: 0px 10px;
  height: 80%;
}
.entire {
  background-color: orange;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  width: 100%;
}
.image_pulldown {
  float: left;
  height: 80%;
  margin: 0px 5px;
}
.image_header img{
  height: 100%;
}
.sentence_pulldown {
  float: right;
  font-size: 1.1em;
  color: white;
  font-weight: bold;
}
</style>