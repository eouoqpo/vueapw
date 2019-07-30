<template>
    <div id="amion">
        <Top :info="'我的参拍  '" />
        <div class="contitle" flex="dir:left box:mean">
            <p flex="dir:top cross:center main:center" @click="auctType('jxz')">
                进行中
                <span :class="aType=='jxz' ? '' : 'span'"></span>
            </p>
            <p flex="dir:top cross:center main:center" @click="auctType('yjs')">
                已结束
                <span :class="aType=='yjs' ? '' : 'span'"></span>
            </p>
        </div>
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
        name:'myauct',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                aType:'jxz'
            }
        },

        mounted:function(){
            // this.consQuery();
        },

        methods:{
            auctType(n){
                console.log("chang redType info n",n)
                this.aType = n;
            }
        }
    }
</script>