<template>
    <div class="amion">
        <p class="goodBack" @click="goBack">
            <img src="../../assets/img/back.png">
        </p>
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
        </div>
        <div>
            <h3 class="countdown">距结束：32:34:59</h3>
        </div>
        <div class="focus" flex="dir:left box:last">
            <h3 flex="cross:center">商品的名称所发生的商</h3>
            <img @click="focus" :src="wheFoucs ? require('../../assets/img/myfocused.png') : require('../../assets/img/myfocus.png')">
        </div>
        <div class="goodInfo">
            <p>
                <i>当前价格：</i>
                <span class="theme">所发生的阿萨德发送到</span>
            </p>
            <p>
                <i>市场估价：</i>
                <span>所发生的阿萨德发送到</span>
            </p>
            <p>
                <i>起拍时间：</i>
                <span>所发生的阿萨德发送到</span>
            </p>
            <p>
                <i>结拍时间：</i>
                <span>所发生的阿萨德发送到</span>
            </p>
            <p>
                <i>保证金：</i>
                <span>所发生的阿 <i class="i_price">当前价格的 30%</i></span>
            </p>
            <div>
                <ul flex="box:mean">
                    <li flex="dir:top">
                        <p>拍卖方式</p>
                        <p class="theme">￥2000</p>
                    </li>
                    <li flex="dir:top">
                        <p>最高限价</p>
                        <p class="theme">￥2000</p>
                    </li>
                </ul>
                <ul flex="box:mean">
                    <li flex="dir:top">
                        <p>起拍价</p>
                        <p class="theme">￥2000</p>
                    </li>
                    <li flex="dir:top">
                        <p>加价幅度</p>
                        <p class="theme">￥2000</p>
                    </li>
                </ul>
            </div>
        </div>

        <!--      商品的出价部分        -->
        <div class="offerCont">
            <ul>
                <li flex="dir:left box:last">
                    <h2>出价列表</h2>
                    <p @click="priceInfo" class="priceInfo">查看更多</p>
                </li>
                <li flex="dir:left box:justify">
                    <p>189****6003</p>
                    <p>￥2000</p>
                    <p>领先</p>
                </li>
                <li flex="dir:left box:justify">
                    <p>189****6003</p>
                    <p>￥2000</p>
                    <p>领先</p>
                </li>
                <li flex="dir:left box:justify">
                    <p>189****6003</p>
                    <p>￥2000</p>
                    <p>领先</p>
                </li>
            </ul>
        </div>

        <!--      商品的详情页信息      -->
        <div class="goodDetails">
            <!-- <div className={style.content}
                dangerouslySetInnerHTML={{__html: this.state.item && this.state.item.Context ? this.state.item.Context : null}}/> -->
        </div>

         <!--      用户出价拍卖     -->
        <p class="offer">
            出价
        </p>

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        .offerCont{
            background-color:#fff;
            ul{
                h2{
                    font-size: .38rem;
                    padding:.0rem .5rem 0rem;
                    font-weight: normal;
                    height: .9rem;
                    line-height: .9rem;
                }
                li{
                    height: 1rem;
                    font-size: .38rem;
                    line-height: 1rem;
                    padding:.0rem .5rem 0rem;
                    border-bottom:.02rem solid #f0f0f0;
                    p:nth-child(1){
                        margin-right:.8rem;
                    }
                    p:nth-child(2){
                        padding-left:2rem;
                    }
                    .priceInfo{
                        cursor: pointer;
                        padding: 0rem;
                        padding-right:.6rem;
                        background:url('../../assets/img/arrow_next.png') 3.65rem .25rem no-repeat;
                        background-size: .5rem .5rem;
                    }
                }
            }
        }
        .goodDetails{
            margin-bottom:1rem;
        }
        //   用户出价拍卖
        .offer{
            bottom:0rem;
            height: 1rem;
            line-height: 1rem;
            width: 100%;
            color:#fff;
            font-size: .38rem;
            position: fixed;
            text-align: center;
            background-color:#ff1933;
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
                wheFoucs:false
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

            //   用户关注
            focus(){
                this.wheFoucs = !this.wheFoucs
            },

            onChangeType(n){
                this.type = n;
            },

            onClickLeft(){
                this.$router.go(-1)
            },

            //    路由的跳转
            goBack(){
                this.$router.go(-1);
            },

            priceInfo(){
                this.$router.push({path:"/sort/price"});
            }
        } 
    }
</script>
