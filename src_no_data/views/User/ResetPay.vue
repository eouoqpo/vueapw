<template>
    <div id="amion">
        <Top :info="'重置密码'" />
        <div>
           <input type="password" placeholder="请您输入旧的支付密码！"> 
        </div>
        <div>
           <input type="password" placeholder="请您输入新的支付密码！"> 
        </div>
        <div>
           <input type="password" placeholder="再次输入新的支付密码！"> 
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        div{
            background-color:#fff;
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'resetpay',

        components: {
            Bottom,
            Top
        },

        mounted(){
            
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