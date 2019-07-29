<template>
    <div id="amion">
        <Top :info="'账号注册'" />
        <div class="content">
            <!--   手机号码   -->
            <div class="single" flex="cross:center">
                <input type="text" ref="phone" placeholder="请输入手机号码">
            </div>
            <!--     图片验证码      -->
            <div class="single" flex="main:justify cross:center">
                <input type="text" ref="imgcode" placeholder="请输入图片验证码">
                <img @click="getVcode" :src="imgCode ? imgCode : imgCode ? imgCode : require('../../assets/img/verfiy.png')">
            </div>
            <!--     手机验证码      -->
            <div class="single" flex="main:justify cross:center">
                <input type="text" ref="phonecode" placeholder="请输入验证码">
                <span @click="changType">{{countDown}}</span>
            </div>
            <!--    设置登录密码     -->
            <div class="single" flex="cross:center">
                <input type="password" placeholder="请输入8 ~ 20位的密码">
            </div>
            <b @click="register">提交</b>
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
    import * as url from '../../config';
    export default {
        name:'forget',
        components: {
            Top
        },
        data() {
            return {
                agreeType:false,
                imgCode:'',
                countDown:'获取验证码',
                count:60,
            }
        },
        create(){
                        
        },
        mounted:function(){
            this.getVcode();
        },
        methods:{
            agree(){
                this.agreeType = !this.agreeType;
            },
            //    用户获取图片验证码
            getVcode(){
                let data = {};
                let result = new Promise((resolve,reject) => {
                this.$http.post(url.imgcode,data)
                    .then(res => {
                        console.log(res);//获取数据
                        if(res.msg == 'success'){
                            this.imgCode = 'data:image/png;base64,' + res.data;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                });
            },
            //   获取短信验证码的
            changType(){
                this.showType = !this.showType;
                if (!this.$refs.imgcode.value) {
                    this.$alert('输入图形验证码 ！', '温馨提示');
                    return
                };
                if (!this.$refs.phone.value) {
                    this.$alert('请填写手机号 ！', '温馨提示');
                    return
                };
                if (!/^1[3456789]\d{9}$/.test(this.$refs.phone.value)) {
                    this.$alert('请输入正确的手机号码 ！', '温馨提示');
                    return 
                };
                let data = {
                    Codeimg:this.$refs.imgcode.value,
                    Phone:this.$refs.phone.value
                };
                let reslut = new Promise((resolve,reject)=>{
                    this.$http.post(url.Phonecode,data).then(res=>{
                        if(res.msg == 'success'){
                            this.countdown();
                            this.$alert('短信验证码发送成功 ！', '温馨提示');
                        }
                    }).catch((error)=>{
                        // console.log("error",error)
                    })
                })
            },

            //    倒计时 60 秒
            countdown(){
                if(this.count > 1){
                    this.count = this.count - 1;
                    this.countDown = this.count + ' S',
                    setTimeout(()=>{this.countdown()}, 1000);
                }else{
                    this.countDown = '获取验证码'
                }
            },

            register(){
                this.$refs.phone.value = '';
            }
        }
    }
</script>
