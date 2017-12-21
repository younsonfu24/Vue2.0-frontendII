// 1、导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

// 2、启动 Vue 插件
Vue.use(VueRouter);
Vue.use(ElementUI);

// 3、引用 CSS 文件
import './css/style.css';
import 'element-ui/lib/theme-chalk/index.css';

// 4、把 axios 和 api 配置对象注入到 Vue 原型中，这样组件实例就可以直接访问了
import axios from './js/axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

// 5、导入根组件
import AppComponent from './component/App.vue';

// 6、导入路由实例
import router from './router';

new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router
});