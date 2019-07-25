<template>
    <div id="amion">
        <Top :info="info"/>
        <div class="commont_content">

            <div class="single" flex="dir:top" @click="goDetail(1)">
                <img :src='require("../../assets/img/base.jpg")'>    
                <span>amion test</span>
                <span>起拍价：5000</span>
                <span>距结束：47:50:12</span>
            </div>

            <div class="single" flex="dir:top" @click="goDetails(1)">
                <img :src='require("../../assets/img/base.jpg")'>    
                <span>amion test</span>
                <span>起拍价：5000</span>
                <span>距结束：47:50:12</span>
            </div> 

            <div class="single" flex="dir:top" @click="goDetail(1)">
                <img :src='require("../../assets/img/base.jpg")'>    
                <span>amion test</span>
                <span>起拍价：5000</span>
                <span>距结束：47:50:12</span>
            </div> 

            <div class="single" flex="dir:top" @click="goDetail(1)">
                <img :src='require("../../assets/img/base.jpg")'>    
                <span>amion test</span>
                <span>起拍价：5000</span>
                <span>距结束：47:50:12</span>
            </div> 

        </div>
        <Bottom :title="'sort'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
    //    props:["active"], 
        name:'sdetails',
        data() {
            return {
                show: false,
                type:0,
                info:'商品列表'
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted:function(){
            this.getInfo();
        },

        methods:{
            changType(n){
                this.type = n;
            },

            goDetail(n){
                this.$router.push({path:"/index/detail"});
            },

            //   这个是一口价的详情页
            goDetails(){
                this.$router.push({path:"/index/stable"});
            },

            getInfo(){
                if(this.$route.params){
                    if(this.$route.params.info){
                        this.info = this.$route.params.info;
                        console.log("this.$router.params.info data");
                    }
                }
            }

        } 
    }
</script>
