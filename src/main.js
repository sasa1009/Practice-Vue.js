import Vue from 'vue';
import App from './App.vue';
import LikeHeader from "./components/LikeHeader.vue";
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = true;
Vue.component('LikeHeader', LikeHeader);
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
