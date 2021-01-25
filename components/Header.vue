<template>
  <div class="wrap">
    <HeaderButtonIndex :buttonItem="item[0]"></HeaderButtonIndex>
    <HeaderButton :buttonItem="item[1]"></HeaderButton>
    <HeaderPulldown :buttonItem="item[2]"></HeaderPulldown>
    <HeaderButton :buttonItem="item[3]"></HeaderButton>
    <HeaderButton :buttonItem="item[4]"></HeaderButton>
    <HeaderButton :buttonItem="item[5]"></HeaderButton>
  </div>
</template>

<script>
import HeaderButton from '../components/HeaderButton';
import HeaderButtonIndex from '../components/HeaderButtonIndex';
import HeaderPulldown from '../components/HeaderPulldown';
export default {
  data() {
    return {
      item: [
        {
          header_name: 'トップページ',
          src: '/index'
        },
        {
          header_name: 'カップ麺の歴史',
          src: '/About',
          imgindex: 0
        },
        {
          header_name: '各メーカーの紹介',
          imgindex: 1,
          pulldown: [
            {
              pulldown_name: 'トップページ',
              src: '/Nissin'
            },
            {
              pulldown_name: '日清食品',
              src: '/Nissin'
            },
            {
              pulldown_name: '東洋水産',
              src: '/Toyo'
            },
            {
              pulldown_name: 'サンヨー食品',
              src: '/Sanyoo'
            },
            {
              pulldown_name: '明星食品',
              src: '/Myojo'
            },
            {
              pulldown_name: 'エースコック',
              src: '/Acecook'
            }
          ]
        },
        {
          header_name: 'コンビニ限定',
          src: '/Conveni',
          imgindex: 2
        },
        {
          header_name: 'ご当地カップ麺',
          src: '/Area',
          imgindex: 3
        },
        {
          header_name: '海外のカップ麺',
          src: '/Overseas',
          imgindex: 4
        }
      ]
    }
  },
  components: {
    HeaderButton,
    HeaderButtonIndex,
    HeaderPulldown
  }
}
</script>

<style>
  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>