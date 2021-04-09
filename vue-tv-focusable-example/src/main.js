import Vue from 'vue'
import App from './App.vue'
import router from './router'
import focusable from 'vue-tv-focusable'
Vue.use(focusable);

Vue.config.productionTip = false

// 全局配置，可写可不写，不做配置的情况下就使用vue-tv-focusable默认的配置
const vm = new Vue();

vm.$tv.init({
  KEYS: {
    KEY_LEFT: [37], // ←
    KEY_UP: [38], // ↑
    KEY_RIGHT: [39], // →
    KEY_DOWN: [40], // ↓
    KEY_ENTER: [83, 13], // 83: s键  13：enter键
  },
  // focusClassName:'focus',
  // initDis:100,
  // findFocusType:0,
  // distanceToCenter:true,
  // offsetDistance:100,
  // longPressTime:3000,
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
