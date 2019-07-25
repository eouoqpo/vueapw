<template>
    <div class="amion">
        <Top/>
        <div class="contain" flex="dir:left">
            <mu-carousel hide-indicators hide-controls>
                <mu-carousel-item>
                    <img src="../../assets/img/car1.jpg">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="../../assets/img/car2.jpg">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="../../assets/img/car3.jpg">
                </mu-carousel-item>
            </mu-carousel>
            <!-- <Carousel v-model="value1" loop>
                <CarouselItem>
                    <img src="../../assets/img/car1.jpg">
                </CarouselItem>
                <CarouselItem>
                    <img src="../../assets/img/car2.jpg">
                </CarouselItem>
                <CarouselItem>
                    <img src="../../assets/img/car3.jpg">
                </CarouselItem>
            </Carousel> -->
        </div>

        <div class="index_sort">
            <div flex="dir:left box:mean">
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample1.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample2.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample3.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample4.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample5.jpg">
                    <span>玉翠珠宝</span>
                </div>
            </div>
            <div flex="dir:left box:mean">
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample1.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample2.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample3.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample4.png">
                    <span>玉翠珠宝</span>
                </div>
                <div flex="dir:top cross:center">
                    <img src="../../assets/img/sample5.jpg">
                    <span>玉翠珠宝</span>
                </div>
            </div>
        </div>

        <div class="index_type">
            <div class="title" flex="dir:left box:mean">
                <p flex="main:center cross:center" @click="onChangeType('add')">
                    <span :class="type=='add' ? '' : 'span'">加价拍</span>
                </p>
                <p flex="main:center cross:center" @click="onChangeType('dec')">
                    <span :class="type=='dec' ? '' : 'span'">减价拍</span>
                </p>
                <p flex="main:center cross:center" @click="onChangeType('stable')">
                    <span :class="type=='stable' ? '' : 'span'">一口价</span>
                </p>
            </div>
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
        </div>

        <Bottom :title="'index'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
    @import 'src/assets/css/carousel.scss';
    .amion{
        font-size: .36rem;
        .contain{
            overflow: hidden;
            //   
            .mu-carousel,.ivu-carousel{
                // float: left;
                width:100%;
                height: 4rem;
                img{
                    width:10.8rem;
                    height: 4rem;
                }
            }
        }
        .index_sort{
            margin-bottom:.2rem;
            background-color:#fff;
            padding-top:.04rem;
            padding-bottom:.15rem;
            div{
                margin:.15rem 0rem .1rem;
                img{
                    width:1rem;
                    height: 1rem;
                }
                span{
                    padding-top:.06rem;
                }
            }
        }
        .index_type{
            .title{
                padding:.2rem 0rem;
                background-color:#fff;
                // margin-bottom:.2rem;
                span{
                    padding:0rem .3rem;
                    border-radius: .3rem;
                    height: .6rem;
                    line-height: .6rem;
                    color:#fff;
                    background-color:#ff1933;
                }
                .span{
                    color:#333;
                    background-color:#fff;
                }
            }
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import Top from '../../components/Top.vue';
    // import MuCarousel from 'muse-ui';
    // import { Carousel } from 'iview';
    export default {
        name: 'index',
        data() {
            return {
                show: false,
                value1:0,
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
            //    这个是加价拍和减价拍的详情页
            goDetail(n){
                //    {path:'/detail',query:{id}
                this.$router.push({path:"/index/detail"});
            },
            //   这个是一口价的详情页
            goDetails(){
                this.$router.push({path:"/index/stable"});
            },

            amion(n){
                console.log("Info amion")
            }
        } 
    }
</script>
