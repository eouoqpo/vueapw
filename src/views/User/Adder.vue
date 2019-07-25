<template>
    <div id="amion">
        <Top :info="'添加收货地址'" />
        <div class="content">
            <div flex="cross:center">
                <span>收货人</span>
                <input type="text" placeholder="请输入姓名">
            </div>
            <div flex="cross:center">
                <span>联系电环</span>
                <input type="text" placeholder="请输入手机号码">
            </div>
            <!-- <div flex="cross:center">
                <span>省份</span>
                <select name="" id="" size="" v-model="couponSelected" @click="getCity(2234)">
                    <option v-for="(option,index) in addressProvince" :key="option" :label="option.split(' ')[1]" :value="addressProvince"></option>
                </select>
            </div>
            <div flex="cross:center">
                <span>市</span>
                <select name="" id="">
                    <option :value="addressCity">{{addressCity[0]}}</option>
                </select>
            </div>
            <div flex="cross:center">
                <span> 县 / 区 </span>
                <select name="" id="">
                    <option :value="addressTown">{{addressTown[0]}}</option>
                </select>
            </div> -->
            <textarea name="" id="" placeholder="请输入详细地址"></textarea>
        </div>
        <p>
        </p>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .content{
            div{
                height: 1.5rem;
                background: #fff;
                border-bottom: .02rem solid #f0f0f0;
                margin-bottom: .2rem;
                font-size: .38rem;
                padding-left:.5rem;
                span{
                    width:2.5rem;   
                    text-align: center;
                }
                select{
                    width:6rem;
                    // height: 4rem;
                    border:0px;
                    appearance:none;
                    padding-left:.4rem;
                    line-height: .8rem;
                    -moz-appearance:none;
                    -webkit-appearance:none;
                }
            }
            textarea{
                height: 3rem;
                -webkit-writing-mode: horizontal-tb !important;
                text-rendering: auto;
                color: initial;
                letter-spacing: normal;
                word-spacing: normal;
                text-transform: none;
                text-indent: 0px;
                text-shadow: none;
                display: inline-block;
                text-align: start;
                -webkit-appearance: textarea;
                background-color: white;
                -webkit-rtl-ordering: logical;
                flex-direction: column;
                resize: auto;
                cursor: text;
                white-space: pre-wrap;
                overflow-wrap: break-word;
                margin: 0em;
                font: 400 .38rem Arial;
                border:none;
                // border-width: 1px;
                // border-style: solid;
                // border-color: rgb(169, 169, 169);
                border-image: initial;
                width:100%;
                padding: .25rem;
            }
        }
    }
</style>

<script>
    import District from '../../utils/district.js';
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'adder',
        components: {
            Bottom,
            Top
        },
        data() {
            return {
                district:Object.keys(District),
                addressProvince:{},
                addressCity:[],
                addressTown:[],
                couponSelected:'北京'
            }
        },
        create(){
            // this.couponSelected = this.addressProvince[0].id;
            console.log("234345",this.addressProvince)
        },
        mounted:function(){
            this.showProvince();
        },
        methods:{
            showProvince(){
                let tempP =  (Object.entries(District[0][86]));
                let temp1 = [];
                for(var i=0;i<tempP.length;i++){
                    temp1.push(tempP[i][0]+' '+[tempP[i][1]])
                }
                this.addressProvince = temp1;
            },

            getCity(n){
                // console.log("info n data",this.couponSelected)
            },

            addressChange (value, index) {

            }
        }
    }
</script>
