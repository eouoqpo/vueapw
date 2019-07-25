<template>
    <div id="amion">
        <Top :info="'订单详情'" />
        <div class="contitle" flex="dir:left box:mean">
            <p flex="dir:top cross:center main:center" @click="changOtype('all')">
                全部
                <span :class="oType=='all' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="changOtype('dfk')">
                待付款
                <span :class="oType=='dfk' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="changOtype('dfh')">
                待发货
                <span :class="oType=='dfh' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="changOtype('dsh')">
                待收货
                <span :class="oType=='dsh' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="changOtype('yjs')">
                完成
                <span :class="oType=='yjs' ? '' : 'span'"></span>
            </p>
        </div>
        <div class="orderCot">
            <div class="single white">
                <h3 flex="dir:left box:last cross:center">
                    <span>订单号：</span>
                    <p class="theme">类型 付款成功</p>
                </h3>
                <div flex="dir:left" class="content">
                    <img src='../../assets/img/base.jpg'>
                    <div class="orderInfo" flex="dir:top main:last">
                        <h4> 我是托尔斯泰n test  amion test amion test  amion test amion test  amion test amion test </h4>
                        <li>
                            应付金额：￥100
                            <span>数量：1</span>
                        </li>
                        <p>
                            <button :class="'white'">取消订单</button>
                            <button>付款失败</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="single white">
                <h3 flex="dir:left box:last cross:center">
                    <span>订单号：</span>
                    <p class="theme">类型 付款成功</p>
                </h3>
                <div flex="dir:left" class="content">
                    <img src='../../assets/img/base.jpg'>
                    <div class="orderInfo" flex="dir:top main:last">
                        <h4> 我是托尔斯泰n test  amion test amion test  amion test amion test  amion test amion test </h4>
                        <li>
                            应付金额：￥100
                            <span>数量：1</span>
                        </li>
                        <p>
                            <button :class="'white'">取消订单</button>
                            <button>付款失败</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    #amion{       
       .orderCot{
           margin-bottom:1.58rem;
           .single{
               color:#333;
               margin-bottom:.2rem;
                h3{
                    height: 1rem;
                    padding:.0rem .5rem;
                    font-weight: normal;
                    border-bottom: .02rem solid #f2f2f2;
                }
                .content{
                    height: 4.28rem;
                    img{
                        width: 3.71rem;
                        height: 3.38rem;
                        margin-top: .43rem;
                        margin-left: .5rem;   //   .46rem;
                    }
                    .orderInfo{
                        margin:.3rem 0rem 0rem .5rem;                        
                        h4{
                            height: 1.8rem;
                            line-height: .7rem;
                            padding-top:.3rem;
                            width:5.4rem;
                            font-size: .4rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                        li{
                            margin-top:.1rem;
                        }
                        p{
                            margin-top:.3rem;
                            button{
                                height: .7rem;
                                color:#fff;
                                border-radius: .7rem;
                                background-color:#ff1933;
                                padding:.0rem .5rem;
                            }
                            button:nth-child(1){
                                margin-right:.3rem;
                            }
                            .white{
                                background-color:#fff;
                            }
                        }
                    }
                }
           }
       }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'order',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                type:false,
                oType:'all'
            }
        },

        mounted:function(){
            this.consQuery();
        },

        methods:{
            consQuery(){
                console.log("the canshu is info  ",this.$route.params.type);
                switch(this.$route.params.type){
                    //   dfk   dfh   dsh   yjs
                    case 'dfk':
                        this.oType = 'dfk';
                        break;
                    case 'dfh':
                        this.oType = 'dfh';
                        break;
                    case 'dsh':
                        this.oType = 'dsh';
                        break;
                    case 'yjs':
                        this.oType = 'yjs';
                        break;
                    default:
                        this.oType = 'all';
                        break;
                }
            },
            changOtype(n){
                this.oType = n;
            }
        }
    }
</script>