<template>
  <div>
    <div class="tag">
      <div class="tag_text">
        <span style="margin-left: 8px; margin-right: 8px;">この企業について</span>
      </div>
    </div>
    <div class="text">
      <div class="main_text">
        <div class="item about">
          <div class="title">
            企業概要
          </div>
          <div class="main_text_text">
            <p>
            asd
            </p>
          </div>
        </div>
        <div class="item slogan">
          <div class="title">
            スローガン
          </div>
          <div class="main_text_text">
            asd
          </div>
        </div>
      </div>
        <div class="sub_container">
          <div class="item sub_link"></div>
          <div class="item sub_link"></div>
          <div class="item sub_link"></div>
          <div class="item sub_link"></div>
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
  width: fit-content;
  height: 64px;
  /*border-radius: 5px;*/
  margin-bottom: 4px;
  background-color: #FFDC7B;
  /*background-color: red;*/
}

.tag_text{
  text-align: center;
  line-height: 64px;
  font-size: 2em;
}

.text{
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 400px;
}

.main_text{
  border: 1px solid;
  /*border-radius: 5px;*/
  position: relative;
  width: 48%;
  height: 400px;
  color: black;
  word-wrap: normal;
  background-color: rgb(251, 255, 236);
}

.title{
  width: 25%;
  font-size: 1.5vw;
  line-height: 200px;
  text-align: center;
}

.main_text_text{
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  margin-right: 8px;
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

.sub_container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 48%;
  min-height: 400px;
}

.sub_link{
  width: 20vw;
  height: 15vh;
  margin: 8px;
  cursor: pointer;

  background-color: grey;
}

.sub_text{
  margin: 8px;
  /*background-color: yellow;*/
}

@media screen and (max-width: 960px) {
  .main_text{
    width: 100%;
  }
  .sub_text{
    width: 100%;
  }
}
</style>
