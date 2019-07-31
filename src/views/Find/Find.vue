<template>
    <div id="amion">
        <Top :info="'发现'"/>
        <div>
            <div v-for='(info,key) in findList' :key='info.Id' class='item' flex="dir:left box:last cross:center" @click="fdetails(info.Id,'发现列表')">
                <span :class="'span'+(key+1)">{{info.Title}}</span>
                <p class ='fff'><mu-badge :content="''+info.Unread" circle color="#ff1933"/></p>                            
            </div>

            <div class='item' flex="dir:left box:last cross:center" @click="fdetails(0,'分享列表')">
                <span class="span3">分享</span>
                <p class ='fff'><mu-badge content="0" circle color="#ff1933"/></p>                            
            </div>
        </div>
        <Bottom :title="'find'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .item {
            padding:0.2rem .5rem;
            height: 1.36rem;
            background-color:#fff;
            border-bottom: .02rem solid #f0f0f0;
            span{
                padding-left:.8rem;
                color:#999;
                font-size: .48rem;
            }
            .span1{
                background:url('../../assets/img/topSort.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            .span2{
                background:url('../../assets/img/record.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            .span3{
                background:url('../../assets/img/Fshare.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            p{
                padding-right:.8rem;
                background:url('../../assets/img/arrow_down.png') right center no-repeat;
                background-size:.8rem .8rem;
            }
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    export default {
        name: 'find',
        data() {
            return {
                findList:[],
                rawHtml:'<span style="color:yellow">sdhfsdfsd</span>'
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            this.getFind();
        },

        methods:{
            //      发现的首页数据
            getFind(){
                let data={};
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FindIndex,data).then(res => {
                        if(res.msg == 'success'){
                            this.findList = res.data;
                            //    失败的情况不弹出  要不要设置一下在请求一次
                        }
                    }).catch(error => {
                        console.log("error info",error)
                    })
                })    
            },

            //      获取分享的页面



            //   跳转到详情页
            fdetails(n,title){
                this.$router.push({
                    // path:'/find/flist',
                    name:'flist',
                    params:{
                        id:n,
                        title:title
                    }
                })
                //    this.$router.push({path:"/index/stable"});
            },

        } 
    }
</script>
