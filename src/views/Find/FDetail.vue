<template>
    <div id="amion">

        <Top :info="title"/>

        <div class="goodDetails" v-if='detailInfo'>
            <h3>{{detailInfo.Title}}</h3>
            <p>
                <span>{{detailInfo.Author}}</span>
                <span v-if='detailInfo.DateTime'>{{detailInfo ? detailInfo.DateTime.split(' ')[0] : ''}}</span>
            </p>
            <div id="infodetail" class="content" v-html="this.detailInfo ? this.detailInfo.Context : ''"></div>
        </div>

        <Bottom :title="'find'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    #amion{
        .goodDetails{
            // background-color:#fff;
            margin-top:0rem;
            h3{
                font-size: .42rem;
                margin-bottom:.2rem;
            }
            p{
                font-size: .36rem;
            }
        }
        .item {
            padding:0.2rem .5rem;
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    export default {
        name: 'fdetail',
        data() {
            return {
                detailInfo:{},
                title:this.$route.query.title ? this.$route.query.title : '发现详情'
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            this.getInfo();
        },

        methods:{
            //      发现的首页数据
            getInfo(){
                let data = {
                    // Url: window.location.href.split("#")[0]
                    Value:+this.$route.query.id
                };
                console.log("FDetail info data",data);
                // let tempUrl = this.$route.params.title == '分享详情' ? url.FindShare : url;
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FsDetail,data).then(res => {
                        if(res.msg == 'success'){
                            this.detailInfo = res.data
                        }
                    }).catch(error => {
                        console.log('error',error)
                    });
                })
                // let result = request(url.FindShare,data);
                // result.then(value => {
                //     if(value){
                //         this.setState({
                //             appid:value.appid,
                //             timestamp:value.unix,
                //             signature:value.sign,
                //             nonceStr:value.nonceStr,
                //         })
                        
                //     }
                //     this.wxconfig()
                // })
            }
        }
    }
</script>
