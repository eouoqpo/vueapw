<template>
    <div id="amion">
        <Top :info="'收货地址列表'" />
        <div class="content">
            <div>
                <li flex="box:last">
                    <span>amion</span>
                    <span>18964026003</span>
                </li>
                <p>
                    是的发送到发送到发斯蒂芬是地方撒旦法撒旦法拉萨的发删掉了发生的看法救死扶伤水电费拉斯柯达法士大夫看到
                    对了司法考试的发生的叫法是水电费拉拉水电费卡是的发送到水电费卢卡斯的发生地方我没加大多数发大水发哦市
                    删掉了福克斯的飞机上来得快是的发送到里发阿萨德浪费框架是到付款了大水井坊阿斯蒂芬第三方拉斯发了啥咖啡
                    阿萨德飞拉萨蝶恋蜂狂水电费卡是打发第三方看到发卡士大夫卡士大夫卡是的发送到开放就爱上的看法阿斯顿发送
                </p>
                <li flex="box:last">
                    <i>编辑</i>
                    <i>删除</i>
                </li>
            </div>
            <div>
                <li flex="box:last">
                    <span>amion</span>
                    <span>18964026003</span>
                </li>
                <p>
                    是的发送到发送到发斯蒂芬是地方撒旦法撒旦法拉萨的发删掉了发生的看法救死扶伤水电费拉斯柯达法士大夫看到
                    对了司法考试的发生的叫法是水电费拉拉水电费卡是的发送到水电费卢卡斯的发生地方我没加大多数发大水发哦市
                    删掉了福克斯的飞机上来得快是的发送到里发阿萨德浪费框架是到付款了大水井坊阿斯蒂芬第三方拉斯发了啥咖啡
                    阿萨德飞拉萨蝶恋蜂狂水电费卡是打发第三方看到发卡士大夫卡士大夫卡是的发送到开放就爱上的看法阿斯顿发送
                </p>
                <li flex="box:last">
                    <i>编辑</i>
                    <i>删除</i>
                </li>
            </div>
            <p class="add" @click="add">添加收货地址</p>
        </div>
        <Bottom :title="'user'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .content{
            div{
                padding:.3rem .5rem .2rem;
                background-color:#fff;
                margin-bottom:.1rem;
                p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    line-clamp: 2;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                span{
                    color:#333;
                    font-size: .38rem;
                }
                i{
                    margin-top:.2rem;
                    color:#999;
                }
            }
            .add{
                color:#fff;
                width:7rem;
                font-size:.42rem;
                text-align:center;
                margin:1.2rem auto 0rem;
                line-height: 1.2rem;
                border-radius: .6rem;
                background-color:#ff1933;
            }
        }
    }
</style>

<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    export default {
        name:'addlist',
        components: {
            Bottom,
            Top
        },
        data(){
            return{
                type:false,
                typeInfo:"添加收货地址"
            }
        },
        methods:{
            add(){
                this.$router.push({
                    name:'adder'
                })
            }
        }
    }
</script>


