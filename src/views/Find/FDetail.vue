<template>
    <div id="amion">
        <Top :info="'发现详情'"/>
        <div>
            sdfasdfasd
        </div>
        <Bottom :title="'find'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
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
                info:{}
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
                    Url:+this.$route.params.id
                };
                // let tempUrl = this.$route.params.title == '分享详情' ? url.FindShare : url
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FindShare,data).then(res => {
                        if(res.msg == 'success'){
                            this.info = res.data
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
