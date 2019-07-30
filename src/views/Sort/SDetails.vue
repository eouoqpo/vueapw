<template>
    <div id="amion">
        <Top :info="info"/>
        <div class="commont_content">
            <div class="single" flex="dir:top" @click="goDetail(info.GoodsType,info.Id)" v-for="info in infoList" :key="info.Id">
                <img :src='info.Image ? info.Image : require("../../assets/img/base.jpg")'>    
                <span>{{info.Title}}</span>
                <span :class="(parseInt((new Date(info.EndTime.replace(/-/g, '/'))).getTime()) < parseInt((new Date()).valueOf()) || info.GoodsStatus ==2 || (info.GoodsType ==3 && info.Stock == 0)) ? '' : 'theme'">
                    <!--     // let yourtemp = item.GoodsType==1 ? "加价幅度" : item.GoodsType== 2 ? "减价幅度" : "拍卖价格";       -->
                    {{info.GoodsType==1 ? ('起拍价 ' + info.StartMoney) : info.GoodsType==2 ? ('最终价 ' + info.EndMoney) : ('一口价 ' + info.EndMoney)}}
                </span>
                <CountDown v-if="info" :item="info" type="1" :key="info.Id" />
            </div>
        </div>
        <Bottom :title="'sort'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    import CountDown from '../../components/CountDown.vue';
    export default {
    //    props:["active"], 
        name:'sdetails',
        data() {
            return {
                show: false,
                type:0,
                info:'商品列表',
                infoId:0,
                infoList:[]
            };
        },

        components: {
            CountDown,
            Bottom,
            Top
        },

        mounted:function(){
            ((this.$route.params && this.$route.params.id) || this.infoId != 0) ? (this.infoId = this.$route.params.id,this.getInfo()) : this.$router.push({name:'login'});
        },

        methods:{
            changType(n){
                this.type = n;
            },

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

            getInfo(){
                let data = {
                    GoodsFlag2:this.infoId,
                    Page:1,        //
                    Limit:20, 
                };
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.FGoodsList,data).then(res => {
                        console.log("checked count whether is zero sDetails getInfo data",res.data.Count)
                        if(res.msg == 'success'){
                            this.infoList = res.data.List;
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            }

        } 
    }
</script>
