// 导入 vue-router
import VueRouter from 'vue-router';

// 导入组件
import GoodsHomeComponent from '../component/goods/GoodsHome.vue';
import GoodsDetailComponent from '../component/goods/detail/GoodsDetail.vue';
import GoodsMoreComponent from '../component/goods/more/GoodsMore.vue';

export default new VueRouter({
    routes: [{
            path: '/',
            redirect: '/goods'
        },
        //  商品列表
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
            path: '/goods/more/:id',
            component: GoodsMoreComponent
        }
    ]
});