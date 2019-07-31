<template>
    <div class="amion">

        <Top :info="'商品搜索'"/>

        <div class="searchInfo" flex="box:last cross:center">
            <input type="text" ref="search" placeholder="请您输入要搜索的商品名称">
            <span @click="userSearch">搜索</span>
        </div>

        <div class="commont_content">
            <div class="single" flex="dir:top" @click="goDetail(info.GoodsType,info.Id)" v-for="info in searchList" :key="info.Id">
                <img :src='info.Image ? info.Image : require("../../assets/img/base.jpg")'>    
                <span>{{info.Title}}</span>
                <span :class="(parseInt((new Date(info.EndTime.replace(/-/g, '/'))).getTime()) < parseInt((new Date()).valueOf()) || info.GoodsStatus ==2 || (info.GoodsType ==3 && info.Stock == 0)) ? '' : 'theme'">
                    <!--     // let yourtemp = item.GoodsType==1 ? "加价幅度" : item.GoodsType== 2 ? "减价幅度" : "拍卖价格";       -->
                    {{info.GoodsType==1 ? ('起拍价 ' + info.StartMoney) : info.GoodsType==2 ? ('最终价 ' + info.EndMoney) : ('一口价 ' + info.EndMoney)}}
                </span>
                <CountDown v-if="info" :item="info" type="1" :key="info.Id" />
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
    .amion{
        font-size: .36rem;
        .searchInfo{
            background-color:#fff;
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: .42rem;
            padding:0rem .5rem;
            input{
                padding-left:.9rem;
                margin-right:.3rem;
                height: .8rem;
                border-radius: .4rem;
                line-height: .8rem;
                display: block;
                background: url('../../assets/img/search.png') .1rem .05rem no-repeat;
                background-size: .7rem .7rem;
                background-color:#f0f0f0;
            }
        }
        .contain{
            overflow: hidden;
            .mu-carousel{
                height: 3.6rem;
                img{
                    width:10.8rem;
                    height: 3.6rem;
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
    import Maps from '../../utils/tool.js';
    import CountDown from '../../components/CountDown.vue';
    export default {
        name: 'index',
        data() {
            return {
                searchList:[],
            };
        },
  
        components: {
            CountDown,
            Bottom,
            Top
        },

        mounted(){
            // this.searchInf0();
        },

        methods:{
            userSearch(){
                this.$refs.search.value ? this.searchInfo() : this.$alert('请输入你要搜索的关键词 ！', '温馨提示');;
            },
            searchInfo(){
                let data = {
                    Title:this.$refs.search.value
                };
                console.log("   getSecond    data   info",data);
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FGoodsList,data).then(res => {
                        console.log('getSecond data info in index',res)
                        if(res.msg == 'success'){
                            this.searchList = res.data.List
                        }else{
                            this.$alert(res.msg,'温馨提示');
                        }
                    }).catch(error => {
                        console.log(error)
                    })
                })
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
        } 
    }
</script>
