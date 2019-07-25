<template>
    <div id="amion">
        <Top :info="'我的推广'" />
        <div class="cont">
            <img src="../../assets/img/ercode.png">
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