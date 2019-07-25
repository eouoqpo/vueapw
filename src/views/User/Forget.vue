<template>
    <div id="amion">
        <Top :info="'账号注册'" />
        <div class="content">
            <!--   手机号码   -->
            <div class="single" flex="cross:center">
                <input type="text" placeholder="请输入手机号码">
            </div>
            <!--     图片验证码      -->
            <div class="single" flex="main:justify cross:center">
                <input type="text" placeholder="请输入图片验证码">
                <img src="../../assets/img/verfiy.png">
            </div>
            <!--     手机验证码      -->
            <div class="single" flex="main:justify cross:center">
                <input type="text" placeholder="请输入验证码">
                <span>获取验证码</span>
            </div>
            <!--    设置登录密码     -->
            <div class="single" flex="cross:center">
                <input type="password" placeholder="请输入8 ~ 20位的密码">
            </div>
            <b>提交</b>
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
            div{
                height: 1.2rem;
                margin-top:.3rem;
                color: #c6c6c6;
                padding:.0rem .0rem .0rem .75rem;
                border-bottom: .02rem solid #ccc;
                img{
                    width: 1.6rem;
                    height: .8rem;
                    margin-right: .1rem;
                }
                span{
                    color:#ff1933;
                }
            }
            div:nth-child(1){
                background:url('../../assets/img/reg_user.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(2){
                background:url('../../assets/img/myverfiy.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(3){
                background:url('../../assets/img/myverfiy.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
            div:nth-child(4){
                background:url('../../assets/img/regSuo.png') .1rem .3rem no-repeat;
                background-size:.5rem .5rem;
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    export default {
        name:'forget',
        components: {
            Top
        },
        data() {
            return {
                agreeType:false
            }
        },
        create(){
                        
        },
        mounted:function(){
            
        },
        methods:{
            agree(){
                this.agreeType = !this.agreeType;
            }
        }
    }
</script>
