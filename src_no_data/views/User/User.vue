<template>
    <div id="amion">          
        <!-- 上一部分 -->
        <div class="headerCont">
            <div flex="dir:left box:justify">
                <img class="portrait" src="../../assets/img/logoImg.png">
                <div flex="dir:top">
                    <!--    没有判断这些数据不存在的情况    -->
                    <h3>{{user.Account.substr(0,3) + '***' + user.Account.substr(-4)}}</h3>
                    <p>
                        <img class="level" src="../../assets/img/lv.png"><i>{{user.Level}}</i>
                        <span>{{user.UserName}}</span>
                    </p>
                </div>
                <img class="setting" @click="goSetting" src="../../assets/img/setting.png">
            </div>
            <div class="list" flex="dir:left box:mean">
                <p flex="dir:top" @click="myAccount">
                    <span>{{user.Amt}}</span>
                    <span>我的余额</span>
                </p>
                <p flex="dir:top" @click="myReward">
                    <span>{{user.HongBaoNum}}</span>
                    <span>我的红包</span>
                </p>
                <p flex="dir:top" @click="myAuct">
                    <span>{{user.CanPaiNum}}</span>
                    <span>我的参拍</span>
                </p>
                <p flex="dir:top" @click="myFocus">
                    <span>{{user.ShouCangNum}}</span>
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

        <div class="useradd">
            <!-- adsCont   useradd 特别好奇，刚开始的时候可以显示下面的广告，过了不到一个小时就不显示了   换一个类名又正常了   -->
            <div>
                <img v-for='(item) in adList' :key="item.Id" :src="item ? item.ImgUrl : require('../../assets/img/base.jpg')">
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
        .useradd,.adsCont{
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
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    export default {
        name: 'user',
        data() {
            return {
                show: false,
                user:Maps.get('user'),
                adList:[]
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            this.defaultStatus();
            this.adverList();
        },

        methods:{
            //      判断用户有没有登录  没有登录的话直接跳转到登录页面
            defaultStatus(){
                Maps.get('user') ? '' : this.$router.push({name:'login'})
            },
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
            },

            //    获取数据的情况

            //    请求广告图    不能重复定义，在使用前必选先设置默认的类型
            adverList(){
                // let result4 = request(url.BannerInfo,data);  // 广告图
                // result4.then( value => {
                //     if(value instanceof Array){
                //         this.setState({
                //             addList:value
                //         })
                //     }
                // })
                let data = {};
                let result = new Promise((resolve,reject) => {
                this.$http.post(url.BannerInfo,data)
                    .then(res => {
                        console.log('printIn data after coming back',res.data);//获取数据
                        if(res.msg == 'success'){
                            this.adList = res.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                });
            }
        } 
    }
</script>
