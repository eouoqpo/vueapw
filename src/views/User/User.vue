<template>
    <div id="amion">          
        <!-- 上一部分 -->
        <div class="headerCont">
            <div flex="dir:left box:justify">
                <img class="portrait" src="../../assets/img/logoImg.png">
                <div flex="dir:top">
                    <h3>amiona阿萨德</h3>
                    <p>
                        <img class="level" src="../../assets/img/lv.png"><i>1</i>
                        <span>amion</span>
                    </p>
                </div>
                <img class="setting" @click="goSetting" src="../../assets/img/setting.png">
            </div>
            <div class="list" flex="dir:left box:mean">
                <p flex="dir:top" @click="myAccount">
                    <span>34.00</span>
                    <span>我的余额</span>
                </p>
                <p flex="dir:top" @click="myReward">
                    <span>4</span>
                    <span>我的红包</span>
                </p>
                <p flex="dir:top" @click="myAuct">
                    <span>23</span>
                    <span>我的参拍</span>
                </p>
                <p flex="dir:top" @click="myFocus">
                    <span>34</span>
                    <span>我的关注</span>
                </p>
            </div>
        </div>

        <!--     订单    -->
        <div class="service">
            <h3 flex="box:last" @click="goOrder('all')">
                <p>我的订单</p>
                <span>查看全部</span>
            </h3>
            <div class="" flex="dir:left box:mean">
                <p flex="dir:top" @click="goOrder('dfk')">
                    <img src="../../assets/img/dfk.png"/>
                    <span>待付款</span>
                </p>
                <p flex="dir:top" @click="goOrder('dfh')">
                    <img src="../../assets/img/dfh.png"/>
                    <span>待发货</span>
                </p> 
                <p flex="dir:top" @click="goOrder('dsh')">
                    <img src="../../assets/img/dsh.png"/>
                    <span>待收货</span>
                </p>
                <p flex="dir:top" @click="goOrder('yjs')">
                    <img src="../../assets/img/yqs2.png"/>
                    <span>已签收</span>
                </p>
            </div>
        </div>

        <div class="service">
            <h3 flex="box:last">
                <p>我的资金</p>
                <span class="cashMag">银行卡管理</span>
            </h3>
            <!--    资金     -->
            <div class="" flex="dir:left box:mean">
                <p flex="dir:top" @click="recharge">
                    <img src="../../assets/img/recharge.png">
                    <span>充值</span>
                </p>
                <p flex="dir:top" @click="present">
                    <img src="../../assets/img/presentation.png">
                    <span>提现</span>
                </p>
                <p flex="dir:top" @click="myAccount">
                    <img src="../../assets/img/account.png">
                    <span>账户</span>
                </p>
                <p flex="dir:top">
                    <img src="../../assets/img/kf2.png">
                    <span>客服</span>
                </p>
            </div>
        </div>

        <div class="service">
            <h3 flex="box:last">
                <p>我的服务</p>
                <!-- <span>查看更多</span> -->
            </h3>
            <div class="" flex="dir:left box:mean">
                <p flex="dir:top" @click="myCommission">
                    <img src="../../assets/img/yong.png">
                    <span>我的佣金</span>
                </p>
                <p flex="dir:top" @click="twoAuct">
                    <img src="../../assets/img/twoauct.png">
                    <span>二次拍卖</span>
                </p>
                <p flex="dir:top" @click="myspread">
                    <img src="../../assets/img/invitation.png">
                    <span>我的邀请</span>
                </p>
                <p flex="dir:top" @click="aboutPlat">
                    <img src="../../assets/img/aboutPlat.png">
                    <span>关于九泰丰</span>
                </p>
            </div>
        </div>

        <div class="adsCont">
            <div>
                <img src="../../assets/img/base.jpg">
                <img src="../../assets/img/base.jpg">
                <img src="../../assets/img/base.jpg">
                <img src="../../assets/img/base.jpg">
            </div>
        </div>

        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        font-size: .36rem;
        margin-bottom:1.38rem;
        .headerCont{
            color:#fff;
            padding:.7rem .5rem .3rem;
            background-color:#ff1933;
            div{
                .portrait{
                    width:1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    margin: .0rem .3rem .0rem .0rem; 
                }
                h3{
                    margin:.0rem 0rem .3rem .4rem;
                    font-size: .46rem;
                }
                p{
                    position: relative;
                    padding-left:.3rem;
                    .level{
                        width:.95rem;
                    }
                    i{
                        position: absolute;
                        left:.9rem;
                        padding:0rem .4rem 0rem 0rem;   
                    }
                    span{
                        padding-left:.3rem;
                        position: relative;
                        top:-.1rem;
                    }
                }
            }
            .setting{
                width:.8rem;
                height: .8rem;
                margin-top:.2rem;
            }
            .list{
                margin-top:.55rem;
                font-size: .36rem;
                p{
                    padding:0rem;
                    text-align: center;
                    span{
                        padding:.0rem;
                    }
                    span:nth-child(1){
                        margin-bottom:.1rem;
                    }
                }
            }
        }
        .service{
            color:#333;
            margin:.4rem;
            border-radius: .3rem;
            background-color:#fff;
            h3{
                height: 1.0rem;
                font-size: .42rem;
                padding:.0rem .3rem;
                line-height: 1.0rem;
                border-bottom:.04rem solid #f0f0f0;   //   f2f2f2
                span{
                    color:#999;
                    font-size: .32rem;
                    padding-right:.4rem;
                    background:url('../../assets/img/arrow_down.png') 1.4rem .35rem no-repeat;
                    background-size: .3rem .3rem;
                }
                .cashMag{
                    background:url('../../assets/img/arrow_down.png') 1.7rem .35rem no-repeat;
                    background-size: .3rem .3rem;
                }
            }
            div{
                padding:.3rem;
                p{
                    text-align: center;
                    img{
                        width:.8rem;
                        height: .8rem;
                        margin:0px auto .2rem   ;
                    }
                }
            }
        }
        .adsCont{
            width: 10.8rem;
            padding:.0rem .5rem .2rem;
            overflow-x: auto;
            div{
                width:55.6rem;
                img{
                    width: 4rem;
                    height: 2.7rem;
                    float: left;
                    margin: 0 0.3rem 0rem 0rem;
                    border-radius: 0.2rem;
                }
            }
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name: 'user',
        data() {
            return {
                show: false,
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            
        },

        methods:{
            //   设置页面
            goSetting(){
                this.$router.push({
                    name:'setting'
                })
            },
            //   跳转到订单列表
            goOrder(n){
                this.$router.push({
                    name:'order',
                    params:{
                        type:n
                    }
                })
            },
            //    我的红包
            myReward(){
                this.$router.push({
                    name:'red'
                })
            },
            //    我的参拍
            myAuct(){
                this.$router.push({
                    name:'myauct'
                })
            },
            //    我的关注
            myFocus(){
                this.$router.push({
                    name:'myfocus'
                })
            },
            //   我的账户
            myAccount(){
                this.$router.push({
                    name:'myaccount'
                })
            },
            //   用户充值
            recharge(){
                this.$router.push({
                    name:'recharge'
                })
            },
            //   用户提现
            present(){
                this.$router.push({
                    name:'present'
                })
            },
            //   我的推广
            myspread(){
                console.log("goto here info message")
                this.$router.push({
                    name:'myspread'
                })
            },
            //   平台简介
            aboutPlat(){
                this.$router.push({
                    name:'explain'
                })
            },
            //     我的佣金
            myCommission(){
                this.$router.push({
                    name:'commission'
                })
            },
            //    用户二次拍卖 
            twoAuct(){
                this.$router.push({
                    name:'sdetails',
                    params:{
                        info:'二次拍卖'
                    }
                })
            }
        } 
    }
</script>
