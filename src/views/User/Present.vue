<template>
    <div id="amion">
        <Top :info="'用户提现'" />
        <div class="cont">
            <div class="one border">
                <i>请输入以下信息进行充值</i>
            </div>
            <div class="border" flex="dir:left">
                <span>可提金额</span>
                <b>985.36</b>
            </div>
            <div class="two border" flex="dir:left box:first cross:center">
                <span>选择银行</span>
                <mu-col span="12" lg="4" sm="6" full-width="60%" color="#fff" solo='true' underline-color="#fff" disabled='true'>
                    <mu-select v-model="normal.value1">
                        <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                </mu-col>
            </div>
            <div class="border" flex="dir:left">
                <span>充值金额</span>
                <input type="password" placeholder="请输入充值金额">
            </div>
            <div class="border" flex="dir:left">
                <span>支付密码</span>
                <input type="password" placeholder="请输入支付密码">
            </div>
            <p @click="present">确认提现</p>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'present',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                cType:'today',
                options: [
                    'Option 1', 'Option 2', 'Option 3', 'Option 4',
                    'Option 5', 'Option 6', 'Option 7', 'Option 8',
                    'Option 9', 'Option 10'
                ],
                normal: {
                    value1: '不使用红包',
                }
            }
        },

        mounted:function(){
            
        },

        methods:{
            present(){
                alert("present")
            }
        }
    }
</script>