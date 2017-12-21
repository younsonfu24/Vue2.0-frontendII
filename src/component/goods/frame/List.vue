<template>
<div>
     <div class="section" v-for="item in goodsContent" :key="item.level1cateid">

         <!--子类-->
         <div class="main-tit">
             <h2>{{item.catetitle}}</h2>
             <p>

                 <router-link v-for="subitem1 in item.level2catelist" :key="subitem1.subcateid" :to="{name:'gm',params:{id:subitem1.subcateid}}" >{{subitem1.subcatetitle}}</router-link>

                 <router-link :to="{name:'gm',params:{id:item.level1cateid}}">
                     <i>更多+</i>
                 </router-link>
             </p>
         </div>
         <!--子类-->
         <div class="wrapper clearfix">
             <div class="wrap-box">
                 <ul class="img-list">

                     <li v-for="subitem2 in item.datas" :key="subitem2.artID">
                         <router-link :to="{name:'gd',params:{id:subitem2.artID
                 }}">
                             <div class="img-box">
                                 <img :src="subitem2.img_url">
                             </div>
                             <div class="info">
                                 <h3>{{subitem2.artTitle}}</h3>
                                 <p class="price">
                                     <b>¥{{subitem2.sell_price}}</b>元</p>
                                 <p>
                                     <strong>库存 {{subitem2.stock_quantity}}</strong>
                                     <span>市场价：
                                         <s>¥{{subitem2.market_price}}</s>
                                     </span>
                                 </p>
                             </div>
                         </router-link>
                     </li>
<!--
                     <li>
                         <a href="/goods/show-90.html">
                             <div class="img-box">
                                 <img src="/upload/201504/20/thumb_201504200154277661.jpg">
                             </div>
                             <div class="info">
                                 <h3>佳能（Canon） EOS 700D 单反套机</h3>
                                 <p class="price">
                                     <b>¥4799.00</b>元</p>
                                 <p>
                                     <strong>库存 98</strong>
                                     <span>市场价：
                                         <s>5099.00</s>
                                     </span>
                                 </p>
                             </div>
                         </a>
                     </li>

                     <li>
                         <a href="/goods/show-89.html">
                             <div class="img-box">
                                 <img src="/upload/201504/20/thumb_201504200119256512.jpg">
                             </div>
                             <div class="info">
                                 <h3>小米（Mi）小米Note 16G双网通版</h3>
                                 <p class="price">
                                     <b>¥2299.00</b>元</p>
                                 <p>
                                     <strong>库存 58</strong>
                                     <span>市场价：
                                         <s>2699.00</s>
                                     </span>
                                 </p>
                             </div>
                         </a>
                     </li>

                     <li>
                         <a href="/goods/show-88.html">
                             <div class="img-box">
                                 <img src="/upload/201504/20/thumb_201504200059017695.jpg">
                             </div>
                             <div class="info">
                                 <h3>苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h3>
                                 <p class="price">
                                     <b>¥5780.00</b>元</p>
                                 <p>
                                     <strong>库存 198</strong>
                                     <span>市场价：
                                         <s>6388.00</s>
                                     </span>
                                 </p>
                             </div>
                         </a>
                     </li>

                     <li>
                         <a href="/goods/show-87.html">
                             <div class="img-box">
                                 <img src="/upload/201504/20/thumb_201504200046589514.jpg">
                             </div>
                             <div class="info">
                                 <h3>华为（HUAWEI）荣耀6Plus 16G双4G版</h3>
                                 <p class="price">
                                     <b>¥2195.00</b>元</p>
                                 <p>
                                     <strong>库存 60</strong>
                                     <span>市场价：
                                         <s>2499.00</s>
                                     </span>
                                 </p>
                             </div>
                         </a>
                     </li> -->
                 </ul>
             </div>
         </div>
     </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            goodsContent: []
        }
    },
    methods: {
        getGoodsContent() {
            this.$http.get(this.$api.goodsContent).then(res => {
                this.goodsContent = res.data.message;
            });
        }
    },
    created() {
        this.getGoodsContent();

    }
}
</script>

<style lang="less" scoped>

</style>


