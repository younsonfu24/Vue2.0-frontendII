<template>
    <div id="box">
        <!-- 头部 -->
        <app-header></app-header>

        <!-- 内容 -->
        <router-view></router-view>

        <!-- 尾部 -->
        <app-footer></app-footer>
    </div>


</template>

<script>
    import HeaderComponent from './frame/Header.vue';
    import FooterComponent from './frame/Footer.vue';
    import $ from 'jquery';

    export default {
        data() {
            return {

            }
        },
        // 子组件注册
        components: {
            appHeader: HeaderComponent,
            appFooter: FooterComponent
        },
        mounted() {
            $("#menu2 li a").wrapInner( '<span class="out"></span>' );
            $("#menu2 li a").each(function() {
                $( '<span class="over">' + $(this).text() +'</span>' ).appendTo( this );
            });

            $("#menu2 li a").hover(function() {
                $(".out",	this).stop().animate({'top':'48px'},300); // move down - hide
                $(".over",	this).stop().animate({'top':'0px'},300); // move down - show

            }, function() {
                $(".out",	this).stop().animate({'top':'0px'},300); // move up - show
                $(".over",	this).stop().animate({'top':'-48px'},300); // move up - hide
            });
        }
    };
</script>

<style lang="less" scoped>

</style>

