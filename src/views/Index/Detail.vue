<template>
    <div class="amion">
        <p class="goodBack" @click="goBack">
            <img src="../../assets/img/back.png">
        </p>
        <div class="contain" flex="dir:left">
            <mu-carousel hide-indicators hide-controls v-if='goodInfo'>
                <mu-carousel-item v-for='(info,key) in this.goodInfo.Imglist.split(";")' :key='key'>
                    <img :src="info ? info : require('../../assets/img/car1.jpg')">
                </mu-carousel-item>
            </mu-carousel>
        </div>
        <div>
            <h3 class="countdown"><CountDown v-on:myspot='myspot' v-if="this.goodInfo" :item="this.goodInfo" type="2"/></h3>
        </div>
        <div class="focus" flex="dir:left box:last">
            <h3 flex="cross:center">{{goodInfo ? goodInfo.Title : 'amion auction'}}</h3>
            <img @click="addColl" :src="wheFoucs ? require('../../assets/img/myfocused.png') : require('../../assets/img/myfocus.png')">
        </div>
        <div class="goodInfo">
            <p>
                <i>当前价格：</i>
                <span class="theme">￥{{this.nowPrice ? this.nowPrice : "--"}}</span>
            </p>
            <p>
                <i>市场估价：</i>
                <span>￥{{this.goodInfo ? this.goodInfo.CankaoMoney : "--"}}</span>
            </p>
            <p>
                <i>起拍时间：</i>
                <span>{{this.goodInfo ? this.goodInfo.StartTime : "--"}}</span>
            </p>
            <p>
                <i>结拍时间：</i>
                <span>{{this.goodInfo ? this.goodInfo.EndTime : "--"}}</span>
            </p>
            <p>
                <i>保证金：</i>
                <span>{{this.goodInfo ? (this.nowPrice * this.goodInfo.GuaranteeBili/100) : 0}} <i class="i_price">当前价格的 {{this.goodInfo ? (this.goodInfo.GuaranteeBili) : "--"}} %</i></span>
            </p>
            <div>
                <ul flex="box:mean">
                    <li flex="dir:top">
                        <p>拍卖方式</p>
                        <p class="theme">{{this.auctType ? auctType :""}}拍</p>
                    </li>
                    <li flex="dir:top">
                        <p>{{this.auctType =="加价" ?  "最高限价" : "最低限价"}}</p>
                        <p class="theme">￥{{ this.goodInfo ? this.goodInfo.EndMoney : "--" }}</p>
                    </li>
                </ul>
                <ul flex="box:mean">
                    <li flex="dir:top">
                        <p>起拍价</p>
                        <p class="theme">￥{{this.goodInfo ? this.goodInfo.StartMoney : "--"}}</p>
                    </li>
                    <li flex="dir:top">
                        <p>加价幅度</p>
                        <p class="theme">￥{{this.goodInfo ? this.goodInfo.JiajiaMoney : "--"}}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!--      商品的出价部分        -->
        <div class="offerCont">
            <ul>
                <li flex="dir:left box:last">
                    <h2>出价列表</h2>
                    <p @click="priceInfo(this.goodInfo.Id)" class="priceInfo">查看更多</p>
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
            <div id="infodetail" class="content" v-html="this.goodInfo ? this.goodInfo.Content : ''"></div>
        </div>

         <!--      用户出价拍卖     -->
        <b :class="offerType ? '' : 'offer'" v-on:click="offerType ? offer : offer">
            出价
        </b>
     

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        .countdown span{
            color:#fff !important;
        }
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
        b{
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
        .offer{
            background-color: #f0f0f0;
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import Top from '../../components/Top.vue';
    import MuCarousel from 'muse-ui';
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    import CountDown from '../../components/CountDown.vue';
    export default {
        name: 'detail',
        data() {
            return {
                wheFoucs:false,
                goodId:0,
                goodInfo:'',
                nowPrice:0,
                auctType:'',
                priceList:[],    //   出价记录
                offerType:false,   //  刚开始是默认用户不可以出价
            };
        },
  
        components: {
            CountDown,
            Bottom,
            Top
        },

        mounted(){
            console.log('mounted',this)
            if(this.$route.query.type){
                this.goodId = this.$route.query.type;
                this.collected();
                this.getList();
            }else{
                this.$router.push({
                    name:'login'
                })
            }
        },

        methods:{
            //    获取详情页的数据    不需要先判断用户是否登录了
            getList(){
                let data = {
                    "Id":+this.goodId
                };
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.GoodsInfo,data).then(res => {
                        console.log("get goodsInfo details",res)
                        if(res.msg == 'success'){
                            this.goodInfo = res.data;
                            this.nowPrice = res.data.StartMoney;
                            this.auctType = res.data.GoodsType == 1 ? "加价" : res.data.GoodsType == 2 ? "减价" : "一口价";
                            this.OfferList();
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },

            myspot(info){
                // info ? 
                // info ? this.offerType = info : (console.log("failed-------------------------------------"));
                console.log('checked console NAN here ?',+info)
                // console.log("myspot  info -----------------------------",info);
            },

            //    判断用户是否收藏了
            collected(){
                let data = {
                    GoodsId: +this.goodId
                };
                console.log("check whether collect",data)
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.WheCollect,data).then(res => {
                        if(res.msg == 'success'){
                            res.data == "Y" ? this.wheFoucs = true : this.wheFoucs = false;
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },

            //    用户出价
            offer(){
                console.log("offer")
                if(Maps.get("user").Status ==4){
                    let data = {
                        GoodsId:+this.goodId,
                        Money:this.nowPrice,
                        HongbaoId:0   //   +this.refs.bankname.value
                    };
                    console.log("offer info data ",data)
                    let result = new Promise((resolve,reject)=>{
                        this.$http.post(url.offerAdd,data).then(res => {
                            if(res.msg == 'success'){
                                console.log('offer list res',res);
                                this.$alert('你已成功出价 ！','温馨提示');
                            }else{
                                this.$alert(res.msg,'温馨提示');
                            }
                        }).catch(error => {
                            console.log('error offer list',error)
                        })
                    })
                }else{
                    this.isAuth();
                }
            },

            //    获取出价记录
            OfferList(){
                console.log('offerlist',this)
                let data = {
                    GoodsId: +this.goodId,
                    Page:1,
                    Limit:500
                }
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.publicList,data).then(res => {
                        console.log("get goodsInfo details",res)
                        if(res.msg == 'success'){
                            this.priceList = res.data.List
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },

            // addColl    添加收藏    删除收藏
            addColl(){
                if(Maps.get("user").Status ==4){
                    let data = {
                        "GoodsId":+this.goodId
                    };
                    let myurl = this.wheFoucs ? url.delCol : url.addCol;
                    let result = new Promise((resolve,reject)=>{
                        this.$http.post(myurl,data).then(res => {
                            if(res.msg == 'success'){
                                this.wheFoucs = !this.wheFoucs;
                            }
                        }).catch(error => {
                            console.log(error);
                        });
                    })
                }else{
                    this.isAuth();
                }
            },

            //   用户实名认证  用户必须登录
            isAuth(){
                this.$confirm('您还未实名，请您先认证？', '温馨提示', {
                    type: 'warning'
                }).then(({ result }) => {
                    if (result) {
                        console.log("my isAuth")
                        // this.$router.push({
                        //     name:'auth'
                        // })
                    } else {
                        console.log("cancle")
                    }
                });
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
