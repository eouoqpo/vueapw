<template>
    <div id="amion">
        <Top :info="'我的账户'" />
        <div class="cashInfo white" flex="dir:left box:mean">
            <div class="left" flex="dir:top">
                <div>
                    <p>用户余额</p>
                    <span>345.56</span>
                </div>
                <div>
                    <p>可用资金</p>
                    <span>3453</span>
                </div>
            </div>
            <div class="right" flex="dir:top">
                <div>
                    <p>保证金</p>
                    <span>3453</span>
                </div>
                <div>
                    <p>佣金</p>
                    <span>3453.2</span>
                </div>
            </div>
        </div>
        <div class="cashDetail">
            <div class="contitle" flex="dir:left box:mean">
                <p flex="dir:top cross:center main:center" @click="changCtype('today')">
                    全部
                    <span :class="cType=='today' ? '' : 'span'"></span>
                </p>
                <p flex="dir:top cross:center main:center" @click="changCtype('before')">
                    待付款
                    <span :class="cType=='before' ? '' : 'span'"></span>
                </p>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    #amion{
        .cashInfo{
            padding:.4rem .5rem;
            margin-bottom:.1rem;
            .left{
                border-right:.02rem solid #ddd;
            }
            div{
                color:#666;
                text-align: center;
                span{
                    color:#ff1933;
                    font-weight: 700;   
                }
                p{
                    margin:.3rem .0rem .1rem;
                }
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'myfocus',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                cType:'today'
            }
        },

        mounted:function(){
            
        },

        methods:{
            changCtype(n){
                this.cType = n;
            }
        }
    }
</script>