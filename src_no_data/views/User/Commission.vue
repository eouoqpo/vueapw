<template>
    <div id="amion">
        <Top :info="'佣金列表'" />
        <div class="cashDetail">


            <mu-appbar style="padding:0rem">
                <div class="contitle" flex="dir:left box:mean">
                    <p flex="dir:top cross:center main:center" @click="changCtype('cp')">
                        参拍明细
                        <span :class="cType=='cp' ? '' : 'span'"></span>
                    </p>
                    <p flex="dir:top cross:center main:center" @click="changCtype('tj')">
                        推荐明细
                        <span :class="cType=='tj' ? '' : 'span'"></span>
                    </p>
                    <p flex="dir:top cross:center main:center" @click="changCtype('zf')">
                        转发明细
                        <span :class="cType=='zf' ? '' : 'span'"></span>
                    </p>
                </div>
            </mu-appbar>

             <mu-container ref="container">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                <mu-list>
                <div ref = 'container'>
                    <div class="singlelist white" flex="dir:left box:mean" v-for='detail in commdetail' :key='detail.key'>
                        <div class="left" flex="dir:top">
                            <i>{{detail.Account.substr(0,3) + '***' + detail.Account.substr(-4)}}</i>
                            <span>{{detail.AddTime.split(' ')[0]}}</span>
                        </div>
                        <div class="right" flex="dir:top">
                            <p>{{detail.Money}}</p>
                            <b>{{detail.Status == 1 ? "到账" : "未到账"}}</b>
                        </div>
                    </div>
                </div>
                </mu-list>
                </mu-load-more>
            </mu-container>


        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    #amion{
        .container{
            padding:0rem;
        }
        .mu-infinite-scroll{
            height: 0rem;
        }
        .mu-appbar-title,.mu-list{
            padding:0rem;
            font-size: 14px;
            line-height: 22px;
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    import Maps from '../../utils/tool.js';
    export default {
        name:'myfocus',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                cType:'cp',
                page:1,
                commdetail:[],
                type:1,
                //   判断下拉涮新的
                refreshing: false,
                loading: false,
            }
        },

        mounted:function(){
            this.Commission(1);
        },

        methods:{
            changCtype(n){
                this.cType = n;
                n == 'zf' ? this.type = 3 : n == 'tj' ? this.type = 2 :  this.type = 1;
                this.page = 1;
                this.Commission();
            },
            Commission(){
                let data = {
                    Flag:this.type,
                    Page:this.page,
                    Limit:50
                };
                console.log("request data info",data)
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.CommList,data).then((res)=>{
                        console.log('printIn data after coming back',res.data);//获取数据
                        if(res.msg == 'success'){
                            this.page == 1 ? this.commdetail = res.data.List : this.commdetail += res.data.List;
                            // this.commdetail = res.data.List
                        }
                    }).catch(error => {
                        console.log(error)
                    });
                });
            },
            refresh () {
                this.refreshing = true;
                this.$refs.container.scrollTop = 0;
                setTimeout(() => {
                    this.refreshing = false;
                    this.page = 1;
                    this.Commission();
                }, 2000)
            },

            load () {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.page = this.page + 1;
                    this.Commission();
                }, 2000)
            }
        }
    }
</script>