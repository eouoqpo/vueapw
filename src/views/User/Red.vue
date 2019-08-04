<template>
    <div id="amion">
        <Top :info="'红包列表'" />
        <div class="contitle" flex="dir:left box:mean">
            <p flex="dir:top cross:center main:center" @click="redType('dsy')">
                待使用
                <span :class="rType=='dsy' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="redType('ysy')">
                已使用
                <span :class="rType=='ysy' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="redType('ygq')">
                已过期
                <span :class="rType=='ygq' ? '' : 'span'"></span>
            </p>
        </div>
        <div class="redCont">
            <div class="single" flex="dir:left">
                <div class="left">
                    <h4>
                        ￥100
                    </h4>
                    <p>不限专场使用</p>
                </div>
                <div class="right">
                    <li flex="box:last cross:center">
                        <span>189***6003</span>
                        <i class="gray">未使用</i>
                    </li>
                    <p>
                        抢拍价格 ≥1000 元可用
                    </p>
                    <i>有效期至 2020-06-07</i>
                </div>
            </div>

            <!--    info gray info     -->
            <div class="single" flex="dir:left">
                <div class="left gray">
                    <h4>
                        ￥100
                    </h4>
                    <p>不限专场使用</p>
                </div>
                <div class="right gray">
                    <li flex="box:last cross:center">
                        <span>189***6003</span>
                        <i class="bggray">未使用</i>
                    </li>
                    <p>
                        抢拍价格 ≥1000 元可用
                    </p>
                    <i>有效期至 2020-06-07</i>
                </div>
            </div>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    #amion{
       .redCont{
           .single{
                width:9.9rem;
                height: 3.2rem;
                background:url('../../assets/img/pack.png') no-repeat;
                background-size: 9.9rem 3.29rem;
                margin: .35rem auto;
                //    本来是在 left 里面 提出来避免权重过高
                h4{
                    color:#05a0e5;
                    line-height: 1.2rem;
                    font-size: .65rem;
                    text-align: center;
                    margin-top:.2rem;
                }
                .left{
                    width:3rem;
                    margin:.4rem .8rem .0rem .0rem;
                    p{
                        margin-top:.2rem;
                        text-align: center;
                    }
                }
                .gray{
                    color:#e6e6e6;
                    *{
                        color:#e6e6e6;
                    }
                }                
                .right{
                    width:5.4rem;
                    p{
                        margin:.1rem 0rem .2rem 0rem;
                    }
                    li{
                        .bggray{
                            background-color:#e6e6e6;
                        }
                        margin-top:.3rem;
                        height: 1.2rem;
                        color:#05a0e5;
                        span{
                            font-size: .46rem;
                            margin-right:.6rem;                   
                        }
                        i{
                            color:#fff;
                            height: .7rem;
                            line-height: .7rem;
                            border-radius: .2rem;
                            background-color:#05a0e5;
                            font-size: .4rem;
                            padding:.0rem .3rem;
                        }
                    }
                }
           }
       }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'red',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                rType:'dsy'
            }
        },

        mounted:function(){
            // this.consQuery();
        },

        methods:{
            redType(n){
                console.log("chang redType info n",n)
                this.rType = n;
            }
        }
    }
</script>