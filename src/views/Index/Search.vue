<template>
    <div class="amion">
        <Top :info="'商品搜索'"/>
        <div class="searchInfo" flex="box:last cross:center">
            <input type="text" placeholder="请您输入要搜索的商品名称">
            <span>搜索</span>
        </div>
        <div class="commont_content">        
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

    </div>
</template>
<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
    .amion{
        font-size: .36rem;
        .searchInfo{
            background-color:#fff;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: .42rem;
            padding:0rem .5rem;
            input{
                padding-left:.9rem;
                margin-right:.3rem;
                height: .8rem;
                border-radius: .4rem;
                line-height: .8rem;
                display: block;
                background: url('../../assets/img/search.png') .1rem .05rem no-repeat;
                background-size: .7rem .7rem;
                background-color:#f0f0f0;
            }
        }
        .contain{
            overflow: hidden;
            .mu-carousel{
                height: 3.6rem;
                img{
                    width:10.8rem;
                    height: 3.6rem;
                }
            }
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import Top from '../../components/Top.vue';
    import MuCarousel from 'muse-ui';
    export default {
        name: 'index',
        data() {
            return {
                show: false,
                type:'add',
            };
        },
  
        components: {
            Bottom,
            Top
        },

        mounted(){
            
        },

        methods:{
            onClickRight(){
                this.show = true
            },

            onChangeType(n){
                this.type = n;
            },

            onClickLeft(){
                this.$router.go(-1)
            },

            goDetail(n){
                // this.$router.push()
            }
        } 
    }
</script>
