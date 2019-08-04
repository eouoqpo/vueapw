<template>
    <div id="amion">
        <Top :info="'设置'"/>
        <div>
            <div class="item" flex="dir:left box:last cross:center" @click="changImg">
                <span>头像</span>
                <img src="../../assets/img/amionlogo.png">
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="changNick">
                <span>昵称</span>
                <i>amion</i>
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="changWx">
                <span>微信</span>
                <i>已绑定</i>
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="changLogin">
                <span>修改登录密码</span>
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="changPay">
                <span>修改支付密码</span>
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="resetPay">
                <span>重置支付密码</span>
                <i></i>
            </div>
            <div class="item" flex="dir:left box:last cross:center" @click="adderList">
                <span>我的收货地址</span>
                <i></i>
            </div>
            <p @click="logout">退出登录</p>
        </div>
        <Bottom />
    </div>
</template>
<style lang="scss" scoped>
    @import 'src/assets/css/single.scss';
    #amion{
        font-size: .36rem;
        div{
            p{
                margin:1.2rem auto 1rem;
                width:7rem;
                color:#fff;
                border-radius: .6rem;
                text-align: center;
                display: block;
                height: 1.2rem;
                line-height:1.2rem;
                background-color:#05a0e5;
            }
        }
        .item{
            color:#666;
            height: 1.2rem;
            margin-bottom:.1rem;
            padding:.0rem .9rem .0rem .5rem;
            background:url('../../assets/img/arrow_down.png') 9.9rem center no-repeat;
            background-color:#fff;
            background-size: .6rem .6rem;
            img{
                width:.8rem;
                height: .8rem;
                border-radius: 50%;
            }
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'setting',
        data(){
            return {
                type:false
            }
        },
        components:{
            Top,
            Bottom
        },
        methods:{
            changImg(){
                console.log("changImg info");
            },

            changNick(){
                console.log("changNick info");
            },

            changWx(){
                console.log("changWx info");
            },
            
            changLogin(){
                console.log("changLogin info");
                this.$router.push({
                    path:"/user/mlogin"
                })
            },

            changPay(){
                console.log("changPay info");
                this.$router.push({
                    path:'/user/mlogin'
                })
            },

            resetPay(){
                console.log("resetPay info");
                this.$router.push({
                    path:'/user/reserpay'
                })
            },

            adderList(){
                console.log("adderList");
                this.$router.push({
                    name:"addlist"
                })
            },

            logout(){
                console.log("user logout");
                this.$router.push({
                    name:'login'
                })
            }
        }
    }
</script>

