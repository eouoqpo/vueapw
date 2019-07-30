<template>
    <div id="amion">
        <Top :info="'平台简介'" />
        <div class="cont">
           <div>
               <b>关于九泰丰</b>
               <p>
                    九泰丰是上海硕丰金控集团旗下品牌，是一家互联网拍卖平台，也是以人为先的新拍卖模式开创者。为弘扬中华文化，
                    推动消费升级，满足人民日益增长的物质精神生活需要，九泰丰独创性的参拍分享收益模式，既解决了艺术品和高端
                    消费品的流动性难题，让艺术品和高端消费品等走入千家万户，也增加了参拍者的主动性，让未拍中的参拍者也能有
                    所获有所得。九泰丰以拍卖为核心，创建了联动支付、物流、文化等关联产业的全生态商业模式。
               </p>
           </div>
           <div>
               <b>核心优势</b>
               <p>精准商家+高端商品+卖家资源，实现在线文化交易O2O交易闭环。</p>
               <p>拍卖+支付+物流+文化等多产业，打造全生态商业模式下的新拍卖。</p>
               <p>海量优质拍品+利益分享模式，实现每个拍品拍卖全程参与者都赚。</p>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .cont{
            height: 17.92rem;
            background-color:#fff;
            div{
                padding:.5rem .5rem .9rem .5rem;
            }
            b{
                display:block;
                height:1rem;
                line-height: 1rem;
            }
            p{
                line-height: .8rem;
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'explain',
        components: {
            Bottom,
            Top
        },        
        data(){
            return{
                cType:'today',
            }
        },

        mounted:function(){
            
        },

        methods:{
            
        }
    }
</script>