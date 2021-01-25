/*
Vuex

・jsonファイルはここでインポートして、変数を定義する
import [変数名] from '相対パス'
state = () => ({
  importした変数名
})
・vueファイルで変数を呼び出す際は、 $store.state.[変数名]
*/

import sanyoo from '../assets/json/sanyoo_item.json'
import toplink from '../assets/json/top_link.json'
import area from '../assets/json/Area_item.json'
import conveni from '../assets/json/cvs.json'
import history from '../assets/json/history.json'
import nissin from '../assets/json/nissin.json'
import myojo from '../assets/json/myojo_item.json'
import acecook from '../assets/json/Ace-cook.json'
import overseas from '../assets/json/overseas.json'
import toyo from '../assets/json/toyo.json'

export const state = () => ({
  sanyoo,
  toplink,
  area,
  conveni,
  history,
  nissin,
  myojo,
  acecook,
  overseas,
  toyo
})