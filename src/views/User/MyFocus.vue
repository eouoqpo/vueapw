<template>
    <div id="amion">
        <Top :info="'我的关注'" />
        <div class="focusCont">
            <div flex="dir:left" class="content white">
                <img src='../../assets/img/base.jpg'>
                <div class="orderInfo" flex="dir:top main:last">
                    <h4> 我是托尔斯泰n test  amion test amion test  amion test amion test  amion test amion test </h4>
                    <p>这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述</p>
                    <span>2019-7-22 16:50:24</span>
                </div>
            </div>
            <div flex="dir:left" class="content white">
                <img src='../../assets/img/base.jpg'>
                <div class="orderInfo" flex="dir:top main:last">
                    <h4> 我是托尔斯泰n test  amion test amion test  amion test amion test  amion test amion test </h4>
                    <p>这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述</p>
                    <span>2019-7-22 16:50:24</span>
                </div>
            </div>
            <div flex="dir:left" class="content white">
                <img src='../../assets/img/base.jpg'>
                <div class="orderInfo" flex="dir:top main:last">
                    <h4> 我是托尔斯泰n test  amion test amion test  amion test amion test  amion test amion test </h4>
                    <p>这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述</p>
                    <span>2019-7-22 16:50:24</span>
                </div>
            </div>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    @import '@/assets/css/listComm.scss';
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
                
            }
        },

        mounted:function(){
            
        },

        methods:{
            
        }
    }
</script>