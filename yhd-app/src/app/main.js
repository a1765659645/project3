// 导入vue
import Vue from 'vue';
// 导入根组件
import App from './App.vue';
// 导入仓库
import store from './store';
// 导入路由
import router from './router';
import http from './utils/http.js';
// 导入一号店专用样式
import './assets/css/yhdreset.css';
// 导入swiper样式
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import VDistpicker from 'v-distpicker'

Vue.use(VDistpicker);

Vue.use(VueAwesomeSwiper);

Vue.prototype.$http = http;

new Vue({
        el: '#app',
        router,
        store,
        components: {App},
        template: '<App></App>'
});
