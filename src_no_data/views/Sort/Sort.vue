<template>
    <div id="amion">
        <Top :info="'分类'"/>
        <div class="sort_cont" flex="dir:left">
            <div class="sort_left">
                <li v-for = 'info in listFirst' :key='info.Id' :class="type==info.Id ? 'active' : ''" @click="changType(info.Id)">{{info.Title}}</li>
                <!-- <li :class="type==0 ? 'active' : ''" @click="changType(0)">茶叶茶道</li> -->
                <!-- <li :class="type==1 ? 'active' : ''" @click="changType(1)">瓷器紫砂</li>
                <li :class="type==2 ? 'active' : ''" @click="changType(2)">高端酒品</li>
                <li :class="type==3 ? 'active' : ''" @click="changType(3)">食品保健</li>
                <li :class="type==4 ? 'active' : ''" @click="changType(4)">文化艺术</li>
                <li :class="type==5 ? 'active' : ''" @click="changType(5)">奇工巧艺</li>
                <li :class="type==6 ? 'active' : ''" @click="changType(6)">家居衣饰</li>
                <li :class="type==7 ? 'active' : ''" @click="changType(7)">稀缺轻奢</li>
                <li :class="type==8 ? 'active' : ''" @click="changType(8)">特色拍卖</li>
                <li :class="type==9 ? 'active' : ''" @click="changType(9)">玉翠珠宝</li> -->
            </div>
            <div class="sort_right">
                <div flex="dir:top" v-for = 'info in secondList' :key='info.Id' @click="goDetail(info.Id)">
                    <img :src="info.Image ? info.Image : require('../../assets/img/sort1.jpg')">
                    <span>{{info.Title}}</span>
                </div>
                <!-- <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort1.jpg">
                    <span>和田玉</span>
                </div> -->
                <!-- <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort2.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetails(1)">
                    <img src="../../assets/img/sort3.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort1.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort2.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetails(1)">
                    <img src="../../assets/img/sort3.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort1.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetail(1)">
                    <img src="../../assets/img/sort2.jpg">
                    <span>和田玉</span>
                </div>
                <div flex="dir:top" @click="goDetails(1)">
                    <img src="../../assets/img/sort3.jpg">
                    <span>和田玉</span>
                </div> -->
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
                    color:#ff1933;
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
                // let list = "";
                // let result = request(url.FiledList,data);
                // result.then(value => {
                //     if(value.List instanceof Array){
                //         list = value.List.map((item,index) => {
                //             return (
                //                 <div key={index} data-flex="dir:top cross:center" onClick={this.fDetail.bind(this,item.Id)}>
                //                     <img src={item.Image ? item.Image : require("../assets/img/sample5.jpg")} />
                //                     <span>{item.Title}</span>   
                //                 </div>
                //             )
                //         })
                //         this.setState({
                //             secondList:list
                //         })
                //     }
                // })
                // this.setState({
                //     secondList:list
                // })
            },

            // changType(n){
            //     this.$router.push({path:"/sort/sdetails"});
            // },

            goDetail(n){
                //    {path:'/detail',query:{id}
                this.$router.push({path:"/sort/sdetails"});
            },

            //   这个是一口价的详情页
            goDetails(){
                this.$router.push({path:"/sort/sdetails"});
            },

        } 
    }
</script>
