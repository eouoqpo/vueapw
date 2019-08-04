<template>
    <div class="amion">
        <p class="goodBack" @click="goBack">
            <img src="../../assets/img/back.png">
        </p>
        <div class="contain" flex="dir:left">
            <mu-carousel hide-indicators hide-controls>
                <mu-carousel-item>
                    <img src="../../assets/img/car1.jpg">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="../../assets/img/car2.jpg">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="../../assets/img/car3.jpg">
                </mu-carousel-item>
            </mu-carousel>
        </div>

        <div>
            <h3 class="countdown">距结束：32:34:59</h3>
        </div>
        <div class="focus" flex="dir:left box:last">
            <h3 flex="cross:center">商品的名称所发生的商</h3>
            <img @click="focus" :src="wheFoucs ? require('../../assets/img/myfocused.png') : require('../../assets/img/myfocus.png')">
        </div>
        <div class="goodInfo">
            <p>
                <i>拍卖价格：</i>
                <span class="theme">6800</span>
            </p>
            <p>
                <i>市场估价：</i>
                <span>6800</span>
            </p>
            <p>
                <i>剩余数量：</i>
                <span>23</span>
            </p>
            <p>
                <i>结束时间：</i>
                <span>2019-7-10 20:03:37</span>
            </p>
            <div>
            </div>
        </div>

        <!--      商品的详情页信息      -->
        <div class="goodDetails">
            是的发送到发送到发斯蒂芬
            说的分离水电费水电费是的发送到
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>

            拉萨的发了啥地方 <br>拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>

            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            拉萨的发了啥地方 <br>
            LS地方了胜多负少电风扇是劳动法扣水电费s <br>
            <!-- <div className={style.content}
                dangerouslySetInnerHTML={{__html: this.state.item && this.state.item.Context ? this.state.item.Context : null}}/> -->
        </div>

        <div class="offerCont">
            <ul>
                <li flex="dir:left box:mean">
                    <p flex="cross:center">
                        商品数量：
                        <img src='../../assets/img/decrease.png' @click="decrease">
                        <span>{{ num }}</span>
                        <img src='../../assets/img/increase.png' @click="increase">
                    </p>
                    <p>单价：<span>4500</span></p>
                </li>
                <li>
                    <p>总价：<span>{{ num * 4500 }}</span></p>
                </li>
                <li>
                    <p class="purchase" @click="purchase">购买</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    @import 'src/assets/css/carousel.scss';
    .amion{
        .offerCont{
            padding:.30rem .5rem;
            background-color:#fff;
            p{
                font-size: .38rem;
                height: 1.1rem;
                line-height: 1.1rem;
                img{
                    width: .6rem;
                    height: .6rem;
                    margin:.0rem .25rem;
                }
            }
            .purchase{
                width:5rem;
                color:#fff;
                text-align: center;
                margin:.0rem auto;
                border-radius: .2rem;
                background-color:#05a0e5;
                border:.02rem solid #f0f0f0;
            }
        }
    }
</style>
<script>
    import Bottom from '../../components/Bottom.vue';
    import {Message} from 'muse-ui-message';
    import Top from '../../components/Top.vue';
    // import MuCarousel from 'muse-ui';
    export default {
        name: 'index',
        data() {
            return {
                show: false,
                type:'add',
                wheFoucs:false,
                num:1
            };
        },
  
        components: {
            Bottom,
            Top
        },

        mounted(){
            
        },

        methods:{
            onClickRight(){
                this.show = true
            },

            //   用户关注
            focus(){
                this.wheFoucs = !this.wheFoucs
            },

            decrease(){
                let num = this.num;
                // $alert('温馨提示', '商品的数量最低为 1 ！');
                Message.alert('温馨提示', '商品的数量最低为 1 ！');
                // num > 1 ? this.num = num - 1 : alert("温馨提示，商品的数量最低为 1 ！")
            },
            increase(){
                let num = this.num;
                num < 4 ? this.num = num + 1 : alert("超过最大值")
            },
            purchase(){
                alert("用户正在购买 ！")
            },

            onChangeType(n){
                this.type = n;
            },

            onClickLeft(){
                this.$router.go(-1)
            },

            goBack(){
                this.$router.go(-1);
            },

            goDetail(n){
                // this.$router.push()
            }
        } 
    }
</script>
