<template>
    <div id="amion">
        <Top :info="'我的推广'" />
        <div class="cont">
            <img :src="Imgurl ? Imgurl : require('../../assets/img/ercode.png')">
            <span>我的推广二维码：3306</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .cont{
            position: relative;
            height: 13rem;
            img,span{
                position:absolute;
                left:28%;
                top:30%;
            }
            img{
                width:4.8rem;
                height: 4.8rem;
            }
            span{
               top:68%;
               left:31%;
               font-size: .42rem;
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    export default {
        name:'myspread',
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
                },
                Imgurl:''
            }
        },

        mounted:function(){
            this.spread();
        },

        methods:{
            present(){
                alert("present")
            },
            //    邀请推广二维码和编号
            spread(){
                let data = {};
                let result = new Promise((resolve,reject) => {
                this.$http.post(url.QRCode,data)
                    .then(res => {
                        console.log('printIn data after coming back',res.data);//获取数据
                        if(res.msg == 'success'){
                            this.Imgurl = res.data;
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