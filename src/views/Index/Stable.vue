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
                <i>拍卖价格：</i>
                <span class="theme">￥{{this.goodInfo ? this.goodInfo.EndMoney : "--"}} 元</span>
            </p>
            <p>
                <i>市场估价：</i>
                <span>￥{{this.goodInfo ? this.goodInfo.CankaoMoney : "--"}}元</span>
            </p>
            <p>
                <i>剩余数量：</i>
                <span>{{this.goodInfo ? this.goodInfo.Stock : "0"}}</span>
            </p>
            <p>
                <i>结束时间：</i>
                <span>{{this.goodInfo ? this.goodInfo.EndTime : "--"}}</span>
            </p>
        </div>

        <!--      商品的详情页信息      -->
        <div class="goodDetails">
            <div id="infodetail" class="content" v-html="this.goodInfo ? this.goodInfo.Content : ''"></div>
        </div>

        <div class="offerCont">
            <ul>
                <li flex="dir:left box:mean">
                    <p flex="cross:center">
                        商品数量：
                        <img src='../../assets/img/decrease.png' @click="stockNumber(0)">
                        <span>{{ num }}</span>
                        <img src='../../assets/img/increase.png' @click="stockNumber(1)">
                    </p>
                    <p>单价：<span>4500</span></p>
                </li>
                <li>
                    <p>总价：<span>{{ num * 4500 }}</span></p>
                </li>
                <li>
                    <p class="purchase" @click="purchase">购买</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        .offerCont{
            padding:.30rem .5rem;
            background-color:#fff;
            border-top:.2rem solid #f0f0f0;
            p{
                font-size: .38rem;
                height: 1.1rem;
                line-height: 1.1rem;
                img{
                    width: .6rem;
                    height: .6rem;
                    margin:.0rem .25rem;
                }
            }
            .purchase{
                width:5rem;
                color:#fff;
                text-align: center;
                margin:.0rem auto;
                border-radius: .2rem;
                background-color:#ff1933;
                border:.02rem solid #f0f0f0;
            }
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import {Message} from 'muse-ui-message';
    import Top from '../../components/Top.vue';
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    import CountDown from '../../components/CountDown.vue';
    export default {
        name: 'index',
        data() {
            return {
                show: false,
                type:'add',
                wheFoucs:false,
                num:1,
                goodInfo:'',
                stockNum:0,
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

            getList(){
                let data = {
                    "Id":+this.goodId
                };
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.GoodsInfo,data).then(res => {
                        console.log("get goodsInfo details",res)
                        if(res.msg == 'success'){
                            this.goodInfo = res.data;
                            this.stockNum = res.data.Stock;
                            this.auctType = res.data.GoodsType == 1 ? "加价" : res.data.GoodsType == 2 ? "减价" : "一口价"
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
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

            stockNumber(n){
                let num = this.num;
                if(n == 0){
                    num > 1 ? this.num = num - 1 : this.$alert('温馨提示', '商品的数量最低为 1 ！');
                }else{
                    num < this.stockNum ? this.num = num + 1 : this.$alert('温馨提示', '商品的数量超过了最大值 ！');
                }
            },
            purchase(){
                // this.$alert('温馨提示', '商品的数量最低为 1 ！');
                this.$confirm('是否确定购买', '温馨提示', {
                    type: 'warning'
                }).then(({ result }) => {
                    if (result) {
                        console.log("purchase result info confrim",result)
                    } else {
                        console.log("purchase cancle info ")
                        // this.$toast.message('点击了取消');
                    }
                });
            },

            onChangeType(n){
                this.type = n;
            },

            onClickLeft(){
                this.$router.go(-1)
            },

            goBack(){
                this.$router.go(-1);
            },

            goDetail(n){
                // this.$router.push()
            }
        } 
    }
</script>
