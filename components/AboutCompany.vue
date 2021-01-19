<template>
  <div>
    <div class="tag">
      <div class="tag_text">
        この企業について
      </div>
    </div>
    <div class="text">
      <div class="main_text">
        <div class="about">
          <div class="title">
            企業概要
          </div>
          <div class="main_text_text">
            asd
          </div>
        </div>
        <div class="slogan">
          <div class="title">
            スローガン
          </div>
          <div class="main_text_text">
            asd
          </div>
        </div>
      </div>
      <div class="sub_text">
        sub
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style>
.tag{
  border: 1px solid;
  width: 15vw;
  height: 64px;
  background-color: #FFDC7B;
  /*background-color: red;*/
}

.tag_text{
  text-align: center;
  line-height: 64px;
  font-size: 2em;
}

.text{
  width: 100%;
  min-height: 400px;
}

.main_text{
  border: 1px solid;
  position: absolute;
  width: 50%;
  height: 400px;
  color: black;
  background-color: rgb(251, 255, 236);
}

.title{
  width: 25%;
  font-size: 1.5rem;
  line-height: 200px;
  text-align: center;
}

.main_text_text{
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  margin-top: 16px;
  margin-bottom: 16px;
}

.about{
  width: 100%;
  height: 50%;
}

.slogan{
  position: absolute;
  width: 100%;
  height: 50%;
}

.sub_text{
  position: absolute;
  width: 50%;
  min-height: 400px;
  right: 0;

  /*background-color: yellow;*/
}

</style>
