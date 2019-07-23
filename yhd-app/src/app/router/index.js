// vue项目路由配置文件
import Vue from 'vue';
import Router from 'vue-router';
// 导入所有需要vue-router控制的页面级组件
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import Profile from '../views/Profile.vue';
import Login from '../views/Login.vue';
import Sub from '../views/Sub.vue';
import Detail from '../views/Detail.vue';
import Order from '../views/Order.vue';
import Address from '../views/Address.vue';
import OrderDetail from '../views/OrderDetail.vue';
// 向vue体系注入vue-router路由体系
Vue.use(Router);
// 创建路由对象并导出
export default new Router({
        linkActiveClass: 'active',
        routes: [
                { path: '/', component: Home },
                { path: '/cart', component: Cart },
                { path:'/profile', component: Profile },
                { path:'/login', component: Login },
                { path: '/sub', component: Sub, },
                { path: '/detail', component: Detail },
                { path: '/orderdetail/:orderId', name: 'OrderDetail', component: OrderDetail },
                { path: '/address', component: Address },
                { path: '/order', component: Order }
        ]
});