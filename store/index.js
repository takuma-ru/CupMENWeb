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

export const state = () => ({
  sanyoo
})