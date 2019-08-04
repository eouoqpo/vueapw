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
            <h3 class="countdown"><CountDown v-if="this.goodInfo" :item="this.goodInfo" type="2"/></h3>
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
        <div class="offerCont" :class="offerType ? '' : 'none'">
            <ul>
                <li flex="dir:left box:last">
                    <h2>出价列表</h2>
                    <p @click="priceInfo" class="priceInfo">查看更多</p>
                </li>
                <li flex="dir:left box:justify" v-for='(info,key) in priceList' :key='info.Id'>
                    <p>{{info.Account.substr(0,3) + '****' + info.Account.substr(-4)}}</p>
                    <p>￥ {{info.Money}}</p>
                    <p>{{key==0 ? '领先' : '淘汰'}}</p>
                </li>                
            </ul>
        </div>

        <!--      商品的详情页信息      -->
        <div class="goodDetails">
            <div id="infodetail" class="content" v-html="this.goodInfo ? this.goodInfo.Content : ''"></div>
        </div>

         <!--      用户出价拍卖     -->
        <b :class="offerType ? '' : 'offer'" @click="offer">
            出价
        </b>
     

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        .none{
            display: none;
        }
        .countdown span{
            color:#fff !important;
        }
        .offerCont{
            background-color:#fff;
            max-height: 4rem;
            overflow-y: scroll;
            ul{
                h2{
                    font-size: .38rem;
                    // padding:.0rem .5rem 0rem .0rem;
                    padding:.0rem .5rem;
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
            border-top:.02rem solid #ddd;
            background-color:#05a0e5;
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
import { COPYFILE_EXCL } from 'constants';
    export default {
        name: 'detail',
        data() {
            return {
                wheFoucs:false,
                goodId:0,
                goodInfo:[],
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
                            let nId = parseInt((new Date()).valueOf()/1000);
                            let sId = parseInt((new Date(this.goodInfo.StartTime.replace(/-/g, '/'))).getTime()/1000);
                            let eId = parseInt((new Date(this.goodInfo.EndTime.replace(/-/g, '/'))).getTime()/1000);
                            if(sId - nId > 0){
                                this.offerType = false;
                                clearInterval(this.timer);
                            }else if(eId -nId > 0 && this.goodInfo.GoodsStatus ==1){  //    && item.GoodsStatus ==1
                                this.offerType = true;
                                this.timer = setInterval(() => {
                                    // this.OfferList();
                                }, 1000);
                                // if(this.offer){
                                //     this.timer = setInterval(() => {
                                //         this.OfferList();
                                //     }, 1000);
                                // }
                                // this.OfferList();
                            }else{
                                this.OfferList();
                                clearInterval(this.timer);
                                this.offerType = true;
                                // this.OfferList();
                            };
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },

            intervalList(){
                console.log('intervalList')
                this.OfferList();
                let nId = parseInt((new Date()).valueOf()/1000);
                let sId = parseInt((new Date(this.goodInfo.StartTime.replace(/-/g, '/'))).getTime()/1000);
                let eId = parseInt((new Date(this.goodInfo.EndTime.replace(/-/g, '/'))).getTime()/1000);
                if(sId - nId > 0){
                    this.offerType = false;
                }else if(eId -nId > 0 && this.goodInfo.GoodsStatus ==1){  //    && item.GoodsStatus ==1
                    this.offerType = true;
                    if(this.offer){
                        this.timer = setInterval(() => {
                            this.OfferList();
                        }, 1000);
                    }
                    // this.OfferList();
                }else{
                    clearInterval(this.timer);
                    this.offerType = false;
                    // this.OfferList();
                };
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
                if(Maps.get("user").Status ==4){
                    let data = {
                        GoodsId:+this.goodId,
                        Money:this.nowPrice,
                        HongbaoId:0   //   +this.refs.bankname.value
                    };
                    let result = new Promise((resolve,reject)=>{
                        this.$http.post(url.offerAdd,data).then(res => {
                            if(res.msg == 'success'){
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
                this.$once('hook:beforeDestroy', () => {            
                    clearInterval(this.timer);                                    
                })
                let data = {
                    GoodsId: +this.goodId,
                    Page:1,
                    Limit:500
                }
                console.log(" offerList info list detail  获取出价记录",data);
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.publicList,data).then(res => {
                        if(res.msg == 'success'){
                            this.nowPrice = res.data.List[0].Money
                            this.priceList = res.data.List;
                            // this.offerType ? this.intervalList() : '';
                            // if(this.offer){
                            //     this.timer = setInterval(() => {
                            //         this.intervalList()
                            //     }, 1000);
                            // }
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

            priceInfo(n){
                console.log("the priceInfo id data info----------------------------------------------------------",this.goodId,n)
                this.$router.push({
                    path:"/sort/price",
                    query:{
                        id:+this.goodId
                    }
                });
            },

            // beforeDestroy(){
            //     clearInterval(this.timer);
            //     this.timer = null;
            // },

            // this.$once('hook:beforeDestroy', () => {            
            //     clearInterval(timer);                                    
            // }),

            destroyed(){
                clearInterval(this.timer);
                this.timer = null;
            }
        } 
    }
</script>
