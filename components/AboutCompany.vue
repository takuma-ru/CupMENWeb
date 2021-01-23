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
          <div class="about_title">
            企業概要
          </div>
          <div class="main_text_text">
            {{about}}
          </div>
        </div>
        <div class="item slogan">
          <div class="about_title">
            スローガン
          </div>
          <div class="main_text_text">
            {{slogan}}
          </div>
        </div>
      </div>
      <div class="sub_text">
        <div class="item brand">
          <div class="sub_title">
            ブランド一覧
          </div>
          <div class="sub_text_text">
            <p>
              <ul>
                <li v-for="(item, i) in brand" :key="i">
                  {{item}}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },

  props: [
    'about',
    'slogan',
    'brand'
  ],
}
</script>

<style>
.tag{
  border: 1px solid;
  width: fit-content;
  height: 64px;
  border-radius: 8px;
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
  justify-content: space-between;
  width: 100%;
  min-height: 400px;
}

.main_text{
  border: 1px solid;
  border-radius: 8px;
  position: relative;
  width: 49%;
  height: 400px;
  color: black;
  word-wrap: normal;
  background-color: rgb(251, 255, 236);
}

.about_title{
  margin-top: 10px;
  margin-left: 16px;
  margin-right: 16px;
}

.main_text_text{
  margin: 16px;
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
  align-content: center;
  width: 50%;
  min-height: 400px;
}

.sub_text{
  border: 1px solid;
  border-radius: 8px;
  position: relative;
  right: 0;
  width: 49%;
  height: 400px;
  color: black;
  word-wrap: normal;
  background-color: rgb(251, 255, 236);
}

.brand{
  width: 100%;
  height: 100%;
}

.sub_title{
  margin-top: 10px;
  margin-left: 16px;
  margin-right: 16px;
}

.sub_text_text{
  margin: 16px;
}


@media screen and (max-width: 960px) {
  .tag{
    margin: 8px;
  }
  .main_text{
    width: 100%;
    margin: 8px;
  }
  .sub_text{
    width: 100%;
    margin: 8px;
  }
  .sub_container{
    width: 100%;
  }
}

@media (min-width: 300px) {
  .main_text_text {
    font-size: calc(0.625rem + ((1vw - 3px) * 0.3704));
  }
  .about_title {
    font-size: calc(1.5rem + ((1vw - 3px) * 0.7407));
  }
  .sub_title {
    font-size: calc(1.5rem + ((1vw - 3px) * 0.7407));
  }
}
@media (min-width: 1920px) {
  .main_text_text {
    font-size: 16px;
  }
  .about_title {
    font-size: 36px;
  }
  .sub_title {
    font-size: 36px;
  }
}
</style>
