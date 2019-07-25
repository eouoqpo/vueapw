<template>
    <div id="amion">
        <Top :info="'账号注册'" />
        <div class="content">
            <!--   手机号码   -->
            <div class="single" flex="cross:center">
                <input type="text" placeholder="请输入手机号码">
            </div>
            <!--     推荐人代码      -->
            <div class="single" flex="cross:center">
                <input type="text" placeholder="请填写推荐人代码">
            </div>
            <!--    昵称     -->
            <div class="single" flex="cross:center">
                <input type="text" placeholder="请填写昵称">
            </div>
            <!--    登录密码     -->
            <div class="single" flex="cross:center">
                <input type="text" placeholder="请输入密码">
            </div>
            <!--     验证是获取的图片验证码      -->
            <div :class="showType ? 'vcode' : 'none'" flex="dir:top">
                <li flex="main:justify cross:center">
                    <input type="text" placeholder="请输入图片验证码">
                    <img src="../../assets/img/verfiy.png" @click="getVcode">
                </li>
                <p @click="Vconform">确定</p>
            </div>
            <div :class="showType ? 'none' : ''" flex="main:justify cross:center">
                <input type="text" placeholder="请输入验证码">
                <span @click="changShow">获取验证码</span>
            </div>
            <!--    注册协议等信息    -->
            <div class="confirm">
                <span @click="agree" :class="agreeType ? 'theme' : ''">我已阅读</span>
                <i>《注册协议书》</i>
                <p>确认并同意该协议内容，自愿成为九泰丰会员</p>
            </div>
            <b>注册</b>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        height: 19.2rem;
        overflow: hidden;
        font-size: .38rem;
        background:url('../../assets/img/mybg.jpg') left bottom no-repeat;
        background-size:10.8rem 19.2rem;
        .none{
            display: none !important;
        }
        .content{
            padding:.0rem .5rem;
            b{
                color:#fff;
                border-radius: .3rem;
                height: 1.2rem;
                line-height: 1.2rem;
                display: block;
                width:9rem;
                margin:2.1rem auto .0rem;
                text-align: center;
                background-color:#ff1933;
            }
            //    注册协议的样式
            .confirm{
                padding: .7rem .0rem .0rem;
                border:none;
                span{
                    color:#999;
                    padding:.1rem .0rem;
                    padding-left:.95rem;
                    background:url("../../assets/img/myselect.png") 0.35rem center no-repeat;
                    background-size: 0.5rem 0.5rem;
                }
                .theme{
                    color:#ff1933;
                    background:url("../../assets/img/myselect_on.png") 0.35rem center no-repeat;
                    background-size: 0.45rem 0.45rem;
                }
                i{
                    color:#ff1933;
                }
                p{
                    color:#666;
                    padding:.4rem .0rem .0rem .4rem;
                }
            }
            .vcode{
                height: inherit;
            }
            div{
                height: 1.2rem;
                margin-top:.3rem;
                color: #c6c6c6;
                padding:.0rem .0rem .0rem .75rem;
                border-bottom: .02rem solid #ccc;
                span{
                    color:#ff1933
                }
                li{
                    height: 1.2rem;
                    border-bottom: .02rem solid #ccc;
                    img{
                        width: 1.6rem;
                        height: .8rem;
                        margin-right: .1rem;
                    }
                }
            }
            div:nth-child(1){
                background:url('../../assets/img/reg_user.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(2){
                background:url('../../assets/img/regJg.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(3){
                background:url('../../assets/img/nickname.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(4){
                background:url('../../assets/img/regSuo.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(5){
                padding-left:.0rem;
                border-bottom:none;
                input{
                    padding-left:.75rem;
                    background:url('../../assets/img/myverfiy.png') .0rem .0rem no-repeat;
                    background-size: .5rem .5rem;
                }
                p{
                    width:8rem;
                    margin:.7rem auto;
                    color:#ff1933;
                    text-align: center;
                    height: 1rem;
                    line-height: 1rem;
                    border: .02rem solid #ccc;
                    border-radius: .3rem;
                }
            }
            div:nth-child(6){                
                background:url('../../assets/img/myverfiy.png') .1rem .3rem no-repeat;
                background-size: .5rem .5rem;
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import * as url from "../../config";
    export default {
        name:'register',
        components: {
            Top
        },
        data() {
            return {
                agreeType:false,
                showType:false
            }
        },
        create(){
                        
        },
        mounted:function(){
            console.log("IindexData info data at register ",url.IindexData)
        },
        methods:{
            agree(){
                this.agreeType = !this.agreeType;
            },
            changShow(){
                this.showType = !this.showType;
            },
            Vconform(){
                this.showType = !this.showType;
            },
            //    用户获取验证码
            getVcode(){
                console.log("getVcode info")
            }
        }
    }
</script>
