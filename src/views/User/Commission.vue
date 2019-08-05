<template>
    <div id="amion" ref='refreshCton'>
        <Top :info="'佣金列表'" ref='comTop' id="comTop"/>
        <div class="cashDetail" id="myresh">

            <div class="contitle" flex="dir:left box:mean" ref='TopTitle'>
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

            <div ref = 'container' @click="refreshFun($event)">
                <div class="singlelist white" flex="dir:left box:mean" v-for='detail in commdetail' :key='detail.Id'>
                    <div class="left" flex="dir:top">
                        <i>{{detail.Account ? detail.Account.substr(0,3) + '***' + detail.Account.substr(-4) : ''}}</i>
                        <span>{{detail.AddTime ? detail.AddTime.split(' ')[0] : ''}}</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>{{detail.Money}}</p>
                        <b>{{detail.Status == 1 ? "到账" : "未到账"}}</b>
                    </div>
                </div>

                <!--     自己添加测试的数据     -->
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>
                <div class="singlelist white" flex="dir:left box:mean">
                    <div class="left" flex="dir:top">
                        <i>189****6004</i>
                        <span>2019-8-5</span>
                    </div>
                    <div class="right" flex="dir:top">
                        <p>234</p>
                        <b>未到账</b>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    // #amion{
    //     .container{
    //         padding:0rem;
    //     }
    //     #myresh .mu-infinite-scroll{
    //         height: 0rem;
    //     }
    //     #myresh .mu-appbar-title,#myresh .mu-list{
    //         padding:0rem;
    //         font-size: 14px;
    //         line-height: 22px;
    //     }
    // }
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
                pageLimit:1,
                type:1,
                //   判断下拉涮新的
                refreshing: false,
                loading: false,

                //     下拉加载上拉涮新定义的数据

            }
        },

        mounted:function(){
            this.Commission(1);
            this.refreshFun();
        },

        methods:{
            changCtype(n){
                this.cType = n;
                n == 'zf' ? this.type = 3 : n == 'tj' ? this.type = 2 :  this.type = 1;
                this.page = 1;
                this.Commission();
            },
            
            //     获取佣金的  三种情况   参拍     推荐    转发
            Commission(){
                let data = {
                    Flag:this.type,
                    Page:this.page,
                    Limit:2
                };
                console.log("request data info",data)
                let result = new Promise((resolve,reject)=>{
                    this.$http.post(url.CommList,data).then((res)=>{
                        console.log('printIn data after coming back',res);//获取数据
                        if(res.msg == 'success'){
                            console.log("this.page in Commission",this.page,this.pageLimit);
                            this.pageLimit = res.data.Count;    //    Math.ceil(res.data.Count / );
                            if(this.page == 1){
                                this.commdetail = res.data.List;
                            }else if(this.pageLimit == 2){
                                this.commdetail = this.commdetail.concat(res.data.List);
                            }else if(this.commdetail[this.commdetail.length-1].Id != res.data.List[res.data.List.length-1].Id){
                                this.commdetail = this.commdetail.concat(res.data.List);
                            }
                        }else if(res.msg == '登录状态已过期，请重新登录'){
                            this.$alert("how cute you are",'confirm')
                        }
                    }).catch(error => {
                        console.log(error)
                    });
                });
            },

            //    获取元素的高度    clientHeight 可见区域   
            refreshFun(){
                console.log("this.refresh info  最大的包含 div  的高度",this.$refs.refreshCton.clientHeight,this.$refs.refreshCton.clientWidth);
                console.log("头部的高度,",document.querySelector('#comTop').clientHeight);
                console.log("标题的高度，",this.$refs.TopTitle.clientHeight);
                // console.log("this.refresh info clientHeight",document.body.clientHeight);    //  整个标题的高度
                // console.log("头部的高度,",document.querySelector('#comTop').clientHeight);
                // console.log("this.refresh info scrollHeight",document.body.scrollTop);
                // console.log("内容的高度,",this.$refs.container.clientHeight);
                // console.log("标题的高度，",this.$refs.TopTitle.clientHeight);
                // console.log("window.screen.height",window.screen.height);
                let list = document.querySelector('.container');
                list.addEventListener('touchend', function (e) {
                    // eTop = list.offsetTop;
                    console.log('list info')
                    // if (eTop >= (minTop + startOffsetTop)) {
                    //     loadData(MORE, 3);
                    //     topItem.innerHTML = '正在加载';
                    //     setTimeout(function () {
                    //         resize()
                    //     }, 1000)
                    // } else {
                    //     resize()
                    // }
                });
            }
            
        }
    }
</script>