<template>
    <div>
        <bread-nav></bread-nav>
        <home-top></home-top>
        <goods-list></goods-list>
        <h1>失踪了吗</h1>

    </div>
</template>

<script>
// 导入组件
import BreadcumdComponent from './frame/Breadcumd.vue';
import TopComponent from './frame/Top.vue';
import ListComponent from './frame/List.vue';

export default {
    data () {
        return {

        }
    },
    components: {
        breadNav: BreadcumdComponent,
        homeTop: TopComponent,
        goodsList: ListComponent
    }
}
</script>

<style lang="less" scoped>

</style>


