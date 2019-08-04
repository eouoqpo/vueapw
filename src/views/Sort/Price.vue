<template>
    <div class="amion">
        <Top :info="'出价详情页'"/>

        <div class='lead' v-if='listInfo'>
            <div class='cont1' v-for='info in listInfo' :key='info.Id' flex='box:justify'>
                <div flex="dir:top">
                    <img :src='info.Head ? info.Head : require("../../assets/img/amionlogo.png")'/>
                    <h3>V0新手</h3>
                </div>
                <div flex="dir:top">
                    <h3>{{info.Account.substr(0,3) + '****' + info.Account.substr(-4)}}</h3>
                    <span>{{info.ChujiaTime}}</span>
                </div>
                <p class='price' flex="cross:center">￥ {{info.Money}}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        height: 19.2rem;
        .lead{
            background-color:#fff;
            .cont1:nth-child(1){
                border-top:none;
            }
            .cont1{
                font-size: .36rem;
                padding-bottom:.2rem;
                border-top:.02rem solid #f0f0f0;
                padding:.3rem .5rem .1rem;
                h3{
                    margin:0rem;
                    font-size: .48rem;
                    font-weight: normal;
                }
                span{
                    margin-top:.15rem;
                }
                img{
                    margin-left:.15rem;
                    width:1rem;
                    height: 1rem;
                    border-radius: 50%;
                }
                div:nth-child(2){
                    padding-left:.8rem;
                }
                p{
                    padding:0rem .5rem;
                    background:url('../../assets/img/backward.png') 1.45rem .0rem no-repeat;
                    background-size:.8rem .8rem;                    
                    font-size: .48rem;
                    color:#333;
                }
                .price{
                    background:url('../../assets/img/header.png') 1.5rem .0rem no-repeat;
                    background-size:.8rem .8rem;
                    color:#05a0e5;
                    min-width: 2.4rem;
                    padding-right:0rem;
                }
            }
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import Top from '../../components/Top.vue';
    import MuCarousel from 'muse-ui';
    import * as url from '../../config.js';
    export default {
        name: 'price',
        data() {
            return {
                goodId:0,
                listInfo:[],
                userLeve12:[]
            };
        },
  
        components: {
            Bottom,
            Top
        },

        mounted(){
            this.OfferList();
            this.$route.query.id ? this.goodId = this.$route.query.id : console.log("getInfo default");
        },

        methods:{
            OfferList(){
                let data = {
                    GoodsId: +this.$route.query.id,  //   为 0 是查询该用户下的所有出价记录
                    Page:1,
                    Limit:500
                }
                //   this.listInfo = res.data.List;
                console.log("price  出价详情页里面的数据",data)
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.publicList,data).then(res => {
                        if(res.msg == 'success'){
                            this.listInfo = res.data.List;
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },
            //    获取用户等级的情况  木有接口
            userLeve(){
                // let data = {};
                // let result = new Promise((resolve,reject) => {
                //     this.$http.post(url.publicList,data).then(res => {
                //         console.log('userLeve info res',res);
                //         if(res.msg == 'success'){
                //             this.userLeve = res.data.List
                //         }
                //     }).catch(error => {
                //         console.log('error',error)
                //     });
                // })
            },
        } 
    }
</script>
