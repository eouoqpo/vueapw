<template>
    <div id="amion">
        <Top :info="'修改支付密码'" />
        <div class="input">
           <input type="password" placeholder="请您输入旧的支付密码！"> 
        </div>
        <div class="input">
           <input type="password" placeholder="请您输入新的支付密码！"> 
        </div>
        <div class="input">
           <input type="password" placeholder="再次输入新的支付密码！"> 
        </div>
        <div>
            <p>确认修改</p>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .input{
            padding:.3rem .5rem;
            background-color:#fff;
            margin-bottom:.1rem;
            input{
                width:80%;
                font-size: .42rem;
                padding-left:.8rem;
                background:url('../../assets/img/suo.png') left center no-repeat;
                background-size: .6rem .6rem;
            }
        }
        p{
            width:7rem;
            margin:1.2rem auto;
            color:#fff;
            height: 1rem;
            line-height: 1rem;
            text-align: center;
            border-radius: .6rem;
            background-color:#ff1933;
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'mpay',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                type:false
            }
        },
        methods:{
            
        }
    }
</script>