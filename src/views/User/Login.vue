<template>
    <div id="amion">
        <div class="content">
            <img src="../../assets/img/amionlogo.png">
            <p class="one"><input type="text" ref="account" placeholder="请输入账号"></p>
            <p class="two"><input type="password" ref="password" placeholder="请输入密码"></p>
            <div>
                <i @click="login">登录</i>
                <li flex="main:justify">
                    <span @click="forget">忘记密码</span>
                    <b @click="register">注册</b>
                </li>
            </div>
            <div flex="dir:top main:center cross:center">
                <span>第三方登录</span>
                <img src="../../assets/img/wechat.png" @click="weLogin">
            </div>
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
            img{
                width: 2.5rem;
                height: 2.5rem;
                display: block;
                border-radius: .3rem;
                margin: 1.8rem auto 1rem;
            }
            p{
                color: #333;
                margin: 0 .55rem;
                padding:.6rem .0rem .25rem 1rem;
                border-bottom: .04rem solid #ccc;
            }
            .one{
                background:url('../../assets/img/reg_user.png') .2rem .6rem no-repeat;
                background-size:.5rem .5rem;
            }
            .two{
                background:url('../../assets/img/regSuo.png') .2rem .6rem no-repeat;
                background-size:.5rem .5rem;
            }
            div{
                margin:1.5rem .0rem .0rem;
                padding:.0rem .5rem;
                i{
                    color:#fff;
                    display: block;
                    text-align:center;
                    height: 1.2rem;
                    line-height: 1.2rem;
                    border-radius: .3rem;
                    background-color:#ff1933;
                }
                li{
                    margin-top:.4rem;
                    padding:.0rem .2rem;
                    b{
                        color:#ff1933;
                        padding-right:.65rem;
                        background:url('../../assets/img/loginnext.png') right center no-repeat;
                        background-size:.5rem .5rem;
                    }
                }
                img{
                    width:1rem;
                    height:1rem;
                    border-radius: none;
                    margin:.3rem .0rem .0rem;
                }
            }
        }
    }
</style>

<script>
    import * as url from "../../config";
    import Maps from "../../utils/tool.js"
    export default {
        name:'login',
        components: {
            
        },
        data() {
            return {
                
            }
        },
        create(){
                        
        },
        mounted:function(){
            
        },
        methods:{
            weLogin(){
                console.log("wechat login info");
            },
            forget(){
                this.$router.push({
                    name:'forget'
                })
            },
            register(){
                console.log("register info");
                this.$router.push({
                    name:'register'
                })
            },
            //      通过账号登录的情况  还有一种是通过三方账号登录（微信）
            login(){
                if(!this.$refs.account.value){
                    this.$alert('手机号不能为空 ！', '温馨提示');
                }
                if(!this.$refs.password.value){
                    this.$alert('请您填写密码 ！', '温馨提示');
                }
                let data = {
                    "Account": this.$refs.account.value,
                    "Platform": 4,
                    "Pwd": this.$refs.password.value
                };
                let result = new Promise((resolve,reject) => {
                this.$http.post(url.Login,data)
                    .then(res => {
                        console.log(res);//获取数据
                        if(res.msg == 'success'){
                            Maps.get("user",res.data);
                            this.$router.push({
                                name:"user"
                            })
                        }else{
                            this.$alert(res.msg, '温馨提示');
                        }
                    })
                    .catch(error => {
                        this.$alert(res.msg, '温馨提示');
                    })
                });
            },
        }
    }
</script>
