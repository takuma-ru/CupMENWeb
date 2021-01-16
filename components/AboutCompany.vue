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
  
}
</script>

<style>
.tag{
  width: 15vw;
  height: 64px;

  background-color: red;
}

.tag_text{
  text-align: center;
  line-height: 64px;
  font-size: 2em;
}

.text{
  width: 100%;
  min-height: 300px;
}

.main_text{
  position: absolute;
  width: 50%;
  height: 400px;
  
  background-color:blue;
}

.title{
  width: 25%;
  /*font-size: 2.5em;*/
  line-height: 200px;
  text-align: center;
}

.main_text_text{
  position: absolute;
  top: 16px;
  right: 0;
  width: 75%;
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

  background-color: yellow;
}

</style>