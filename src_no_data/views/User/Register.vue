<template>
    <div id="amion">
        <Top :info="'账号注册'" />
        <div class="content">
            <!--   手机号码   -->
            <div class="single" flex="cross:center">
                <input type="text" ref="phone" placeholder="请输入手机号码">
            </div>
            <!--     推荐人代码      -->
            <div class="single" flex="cross:center">
                <input type="text" ref="recom" placeholder="请填写推荐人代码">
            </div>
            <!--    昵称     -->
            <div class="single" flex="cross:center">
                <input type="text" ref="nick" placeholder="请填写昵称">
            </div>
            <!--    登录密码     -->
            <div class="single" flex="cross:center">
                <input type="password" ref="pwd" placeholder="请输入密码">
            </div>
            <!--     验证是获取的图片验证码      -->
            <div :class="showType ? 'vcode' : 'none'" flex="dir:top">
                <li flex="main:justify cross:center">
                    <input type="text" ref="imgcode" placeholder="请输入图片验证码">
                    <img :src="imgCode ? imgCode : require('../../assets/img/verfiy.png')" @click="getVcode">
                </li>
                <p @click="Vconform">确定</p>
            </div>
            <div :class="showType ? 'none' : ''" flex="main:justify cross:center">
                <input type="text" ref="phonecode" placeholder="请输入验证码">
                <span @click="changType">{{countDown}}</span>
            </div>
            <!--    注册协议等信息    -->
            <div class="confirm">
                <span @click="agree" :class="agreeType ? 'theme' : ''">我已阅读</span>
                <i @click="lookagree">《注册协议书》</i>
                <p>确认并同意该协议内容，自愿成为九泰丰会员</p>
            </div>
            <b @click="register">注册</b>
        </div>
        <Agreement :title="'title'" :detail="'detail'" :class="xieyiType ? '' : 'none'" @click="checkAgree"/>
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
                input{
                    height: 100%;
                    width:7rem;
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
                    background:url('../../assets/img/myverfiy.png') .1rem center no-repeat;
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
    import Agreement from '../../components/Agreement.vue';
    import * as url from "../../config";
    import { Promise } from 'q';
    export default {
        name:'register',
        components: {
            Agreement,
            Top,
        },
        data() {
            return {
                agreeType:false,
                showType:false,
                imgCode:'',
                countDown:'获取验证码',
                count:60,
                whetherClick:true,
                agreeInfo:false,
                xieyiType:false,
            }
        },
        create(){
                        
        },
        mounted:function(){
            this.getVcode();  //   知道为啥了，第一次切换的问题
        },
        methods:{
            checkAgree(){

            },
            //   点击同意用户注册协议
            agree(){
                this.agreeType = !this.agreeType;                
            },
            //   改变隐藏框的 
            changType(){
                if(this.whetherClick){
                    if (!this.$refs.phone.value) {
                        this.$alert('请填写手机号 ！', '温馨提示');
                        return;
                    };
                    if (!/^1[3456789]\d{9}$/.test(this.$refs.phone.value)) {
                        this.$alert('请输入正确的手机号码 ！', '温馨提示');
                        return;
                    };
                    this.getVcode();
                    this.showType = !this.showType;
                }
            },
            //   获取短信验证码的
            Vconform(){
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
                        this.$refs.imgcode.value = '';
                        if(res.msg == 'success'){
                            this.showType = !this.showType;
                            this.countdown();
                            this.$alert('短信验证码发送成功 ！', '温馨提示');
                        }else{
                            this.$alert(res.msg, '温馨提示');
                        }
                    }).catch((error)=>{
                        console.log("error",error)
                    })
                })
            },
            //    倒计时 60 秒
            countdown(){
                if(this.count > 1){
                    this.count = this.count - 1;
                    this.countDown = this.count + ' S',
                    this.whetherClick = false;
                    setTimeout(()=>{this.countdown()}, 1000);
                }else{
                    this.count = 60;
                    this.whetherClick = true;
                    this.countDown = '获取验证码';
                }
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
            //    用户查看注册协议
            lookagree(){
                this.agreeInfo = ! this.agreeInfo;
                console.log(this.agreeInfo,'info  value')
            },
            //    用户注册
            register(){
                if (!this.$refs.nick.value) {
                    this.$alert('请填写昵称 ！', '温馨提示');
                    return;
                };
                if (!this.$refs.phone.value) {
                    this.$alert('请填写手机号 ！', '温馨提示');
                    return;
                };
                if (!/^1[3456789]\d{9}$/.test(this.$refs.phone.value)) {
                    this.$alert('请输入正确的手机号码 ！', '温馨提示');
                    return;
                };
                if (!this.$refs.pwd.value) {
                    this.$alert('请输入密码 ！', '温馨提示');
                    return;
                };
                let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
                if(!reg.test(this.$refs.pwd.value)){
                    this.$alert('请输入两种不同类型且长度不小于8的密码 ！', '温馨提示');
                    return;
                }
                if (!this.$refs.phonecode.value) {
                    this.$alert('请输入短信验证码 ！', '温馨提示');
                    return;
                };
                let data = {
                    'Code': this.$refs.phonecode.value,
                    'Phone': this.$refs.phone.value,
                    'Pwd': this.$refs.pwd.value,
                    'Brokercode': this.$refs.recom.value ? this.$refs.recom.value : "",
                    'UserName':this.$refs.nick.value
                };
                console.log("req data info",data);
                let result = new Promise((resolve,reject) => {
                this.$http.post(url.Register,data)
                    .then(res => {
                        console.log(res);//获取数据
                        if(res.msg == 'success'){
                            
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
                });
            }
        }
    }
</script>
