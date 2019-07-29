<template>
    <div :class='type ? "tc" : "none"'>
        <div class='content'>
            <span class='header'>{{title ? title : 'amion plat'}}</span>
            <div class='cont'>
            <!-- <div class='info' v-html="detail ? detail : ''"/> -->
                <!-- dangerouslySetInnerHTML={{__html: this.detail ? this.detail : null}}  -->
            <div class='info' v-html="detail ? detail : ''"/>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
                <p>sfasdfasdfasdfasdfasdfasdfasd酸辣粉卡是打发斯蒂芬阿萨德飞拉萨的是</p>
            </div>
            <div @click='cancel' class='bottom12'>我已阅读</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .tc{
        .content{
            width:9.8rem;
            border-radius: 0.2rem;
            overflow: hidden;
            position: absolute;
            background: #fff;
            top: 2rem;
            z-index: 1000;
            left: .5rem;
            z-index: 1000;
            height: 15rem;
            .header{
                display: block;
                height: 1.21rem;
                background: #e95e5b;
                line-height: 1.21rem;
                text-align: center;
                border-top-left-radius: 0.2rem;
                border-top-right-radius: 0.2rem;
                color: #fff;
                font-size: 0.42rem;
            }    
            .cont{
                h3{
                    height: 1.2rem;
                    text-align: center;
                    line-height: 1.2rem;
                    color: #333;
                    font-size: 0.42rem;
                    font-weight: 600;
                }    
                .info{
                    height: 13rem;
                    box-sizing: border-box;
                    padding: 0.2rem 0.5rem .4rem;
                    overflow-y: auto;
                    line-height: .5rem;
                    border-left: .02rem solid #ccc;  ///  f0f0f0
                    border-right: .02rem solid #ccc;
                }
            }    
            .bottom12{
                height: 1rem;
                line-height: 1rem;
                text-align: center;
                border-top: 0.04rem solid #ececec;
                color: #e1625c;
                font-size: 0.36rem;
                position: absolute;
                bottom:0rem;
                display: block;
                background: #fff;
                width: 9.8rem;
            }
        }
    }
    .none{
        display: none;
    }
</style>


<script>
// import { type } from 'os';

export default {
    name: 'agreement',
    props:["title","detail"],
    data() {
        return {
            type:true
        }
    },
    components: {
        // HelloWorld
    },
    methods:{
        cancel(){
            this.type = false
        }
    }
}
</script>