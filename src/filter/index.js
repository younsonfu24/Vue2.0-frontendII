// 导入 vue-router
import VueRouter from 'vue-router';

// 导入子组件
import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';

const routerConfig = [
    // 默认访问商品首页
    {
        path: '/',
        redirect: '/goods'
    },
    //  商品模块
    {
        name: 'g',
        path: '/goods',
        component: GoodsHomeComponent
    },
    {
        name: 'gd',
        path: '/goods/detail/:id',
        component: GoodsDetailComponent
    },
    {
        name: 'gm',
        path: '/goods/more',
        component: GoodsMoreComponent
    }
];

// 导出路由配置对象
export default new VueRouter({
    routes: routerConfig
});