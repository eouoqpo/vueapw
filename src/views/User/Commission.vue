<template>
    <div id="amion">
        <Top :info="'佣金列表'" />
        <div class="cashDetail">
            <div class="contitle" flex="dir:left box:mean">
                <p flex="dir:top cross:center main:center" @click="changCtype('cp')">
                    参拍明细
                    <span :class="cType=='cp' ? '' : 'span'"></span>
                </p>
                <p flex="dir:top cross:center main:center" @click="changCtype('tj')">
                    推荐明细
                    <span :class="cType=='tj' ? '' : 'span'"></span>
                </p>
                <p flex="dir:top cross:center main:center" @click="changCtype('zf')">
                    转发明细
                    <span :class="cType=='zf' ? '' : 'span'"></span>
                </p>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
            <div class="singlelist white" flex="dir:left box:mean">
                <div class="left" flex="dir:top">
                    <i>扣除保证金--成功</i>
                    <span>2019-07-11 15:39:59</span>
                </div>
                <div class="right" flex="dir:top">
                    <p>-230</p>
                    <b>可用余额：9810.83</b>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
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
                cType:'cp'
            }
        },

        mounted:function(){
            
        },

        methods:{
            changCtype(n){
                this.cType = n;
            }
        }
    }
</script>