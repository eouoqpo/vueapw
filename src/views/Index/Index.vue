<template>
    <div class="amion">
        <Top/>
        <div class="contain" flex="dir:left">
            <mu-carousel hide-indicators hide-controls>
                <mu-carousel-item v-for="info in Banner" :key="info.Id">
                    <img :src="info.ImgUrl ? info.ImgUrl : require('../../assets/img/car1.jpg')">
                </mu-carousel-item>
            </mu-carousel>
        </div>

        <div class="index_sort">
            <div class="sortCont">
                <div flex="dir:top cross:center" v-for="(info) in GoodsType" :key="info.Id" @click="sortType(info.Id)">
                    <img :src="info ? info.Image : require('../../assets/img/sample1.png')">
                    <span :class="stype==info.Id ? 'theme' : ''">{{info.Title}}</span>
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
                <div class="single" flex="dir:top" @click="goDetail(info.GoodsType,info.Id)" v-for="info in IndexList" :key="info.Id">
                    <img :src='info.Image ? info.Image : require("../../assets/img/base.jpg")'>    
                    <span>{{info.Title}}</span>
                    <span :class="(parseInt((new Date(info.EndTime.replace(/-/g, '/'))).getTime()) < parseInt((new Date()).valueOf()) || info.GoodsStatus ==2 || (info.GoodsType ==3 && info.Stock == 0)) ? '' : 'theme'">{{addNum==1 ? ('起拍价 ' + info.StartMoney) : addNum==2 ? ('最终价 ' + info.EndMoney) : ('一口价 ' + info.EndMoney)}}</span>
                    <CountDown :item="info" type="1" :key="info.Id" />
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
            .mu-carousel,.ivu-carousel{
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
            .sortCont{
                div{               
                    margin:.15rem 0rem .1rem;
                    display: inline-block;
                    width:2.16rem;
                    img{
                        width:1rem;
                        margin:0px auto;
                        height: 1rem;
                        border-radius: 50%;
                    }
                    span{
                        padding-top:.16rem;
                        text-align: center;
                    }
                    .theme{
                        color:#ff1933;   //  05a0e5
                    }
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
                    background-color:#05a0e5;
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
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    import CountDown from '../../components/CountDown.vue';
    export default {
        name: 'index',
        data() {
            return {
                show: false,
                stype:0,
                value1:0,
                type:'add',
                Banner:[],
                GoodsType:[],
                IndexList:[],

                addNum:1,  //   加减价所对应的的数字   分别是  1 2 3 
                stypeNum:0
            };
        },
  
        components: {
            CountDown,
            Bottom,
            Top
        },

        mounted(){
            this.list();
            this.getSecond(1)
        },

        methods:{
            onClickRight(){
                this.show = true
            },

            sortType(n){
                this.stype = n;
                this.stypeNum = n;
                this.getSecond(1)
            },

            onChangeType(n){
                //   1 2 3 加价 减价 一口价
                this.type = n;
                this.stype = 0;
                this.stypeNum = 0;
                this.addNum = n == 'add' ? 1 : n == 'dec' ? 2 : 3;
                this.getSecond(1)
            },

            onClickLeft(){
                this.$router.go(-1)
            },
            //    这个是加价拍和减价拍的详情页
            goDetail(n,id){
                let name =  n == 3 ? 'stable' : 'detail';
                this.$router.push({
                    name:name,
                    query:{
                        type:id
                    }
                });                
                // window.location.href= "http://"+Online+"/filed/info?id=" +id;
            },

            //    获取首页的详情
            list(){
                let data = {};
                let result = new Promise((resolve,reject)=> {
                    this.$http.post(url.IindexData,data).then((res) => {
                        if(res.msg == "success"){
                            this.Banner = res.data.Banner;
                            this.GoodsType = res.data.GoodsType;
                            // this.stypeNum = res.data.GoodsType[0].Id;
                        }else{
                            this.$alert(res.msg,'温馨提示');
                        }
                    }).catch((error)=>{
                        console.log("error")
                    });
                })
            },

            //   下面的推荐
            getSecond(n){
                console.log(" the info of stypeNum",this.stypeNum)
                let page;
                n ? (page = n) : page=1;
                let data = {
                    GoodsFlag1: +this.stypeNum,  //一级分类   +(this.state.tempSort)
                    GoodsType: +this.addNum,      //1 2 3 加价 减价 一口价
                    Page:page,        //
                    Limit:20,       //
                };
                console.log("   getSecond    data   info",data);
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FGoodsList,data).then(res => {
                        console.log('getSecond data info in index',res)
                        if(res.msg == 'success'){
                            this.IndexList = res.data.List
                        }else{
                            this.$alert(res.msg,'温馨提示');
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                })
            }
        },
        beforeDestroy(){
            clearInterval(this.timer);
        },
        destroyed(){
            clearInterval(this.timer);
        }
    }
</script>
