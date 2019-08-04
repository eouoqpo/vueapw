<template>
    <div id="amion">
        <Top :info="'分类'"/>
        <div class="sort_cont" flex="dir:left">
            <div class="sort_left">
                <li v-for = 'info in listFirst' :key='info.Id' :class="type==info.Id ? 'active' : ''" @click="changType(info.Id)">{{info.Title}}</li>
            </div>
            <div class="sort_right">
                <div flex="dir:top" v-for = 'info in secondList' :key='info.Id' @click="goDetail(info.Id)">
                    <img :src="info.Image ? info.Image : require('../../assets/img/sort1.jpg')">
                    <span>{{info.Title}}</span>
                </div>
            </div>
        </div>       
        <Bottom :title="'sort'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .sort_cont{
            background-color: #fff;
            height: 16.54rem;
            .sort_left{
                border-right: .02rem solid #f0f0f0;
                li{
                    width:2.7rem;
                    text-align: center;
                    font-size: .4rem;
                    line-height: 1rem;
                    height: 1rem;
                    border-bottom: .02rem solid #f0f0f0;
                }
                .active{
                    color:#05a0e5;
                    border-right:none;
                }
            }
            .sort_right{
                div{
                    width: 2.65rem;
                    margin: .3rem 0;
                    display: inline-block;
                    text-align: center;
                    img{
                        width:1.5rem;
                        height: 1.5rem;
                        border-radius: 50%;
                        margin-left: .57rem;
                    }
                    span{
                        margin-top: .3rem;
                    }
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
        name:'sort',
        data() {
            return {
                show: false,
                type:0,
                listFirst:[],
                secondList:[],
            };
        },

        components: {
            Bottom,
            Top,
        },

        mounted(){
            this.getFirst();
        },

        methods:{
            changType(n){
                this.type = n;
                this.getSecond(n);
            },

            getFirst(){
                let data = {
                    "Pid":0
                };
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.FiledList,data).then(res => {
                        console.log("get goodsInfo details",res)
                        if(res.msg == 'success'){
                            this.listFirst = res.data.List;
                            this.type = res.data.List[0].Id;
                            this.getSecond(res.data.List[0].Id);
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },

            getSecond(n){
                let data = {
                    "Pid":+n,
                    Page:1,  
                    Limit:20, 
                };
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.FiledList,data).then(res => {
                        console.log("get goodsInfo details",res)
                        if(res.msg == 'success'){
                            this.secondList = res.data.List;
                        }
                    }).catch(error => {
                        console.log("failed in collected",error);
                    });
                })
            },


            goDetail(n){
                //    {path:'/detail',query:{id}
                this.$router.push({
                    // path:"/sort/sdetails"
                    name:'sdetails',
                    query:{
                        type:n
                    }
                });
            },

        } 
    }
</script>
