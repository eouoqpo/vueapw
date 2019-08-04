<template>
    <div flex="dir:left box:mean" class="top" v-bind:title="title">
        <p v-on:click="changeType('index')" flex="dir:top cross:center main:center" :class="title=='index' ? 'theme' : ''">
            <img :src="title=='index' ? require('../assets/img/index_on.png') : require('../assets/img/index.png')"/>
            <span>首页</span>
        </p>
        <p v-on:click="changeType('sort')" flex="dir:top cross:center main:center" :class="title=='sort' ? 'theme' : ''">
            <img :src="title=='sort' ? require('../assets/img/sort_on.png') : require('../assets/img/sort.png')"/>
            <span>分类</span>
        </p>
        <p v-on:click="changeType('find')" flex="dir:top cross:center main:center" :class="title=='find' ? 'theme' : ''">
            <img :src="title=='find' ? require('../assets/img/find_on.png') : require('../assets/img/find.png')"/>
            <span>发现</span>
        </p>
        <p v-on:click="changeType('user')" flex="dir:top cross:center main:center" :class="title=='user' ? 'theme' : ''">
            <img :src="title=='user' ? require('../assets/img/myuser_on.png') : require('../assets/img/myuser.png')"/>
            <span>我的</span>
        </p>
    </div>
</template>


<style lang="scss" scoped>
    .top{
        position: fixed;
        bottom:0rem;
        width: 100%;
        height: 1.38rem;
        background-color:#fff;
        border-top:.02rem solid #f0f0f0;
        font-size: .38rem;
        font-weight: 500;
        p{
            font-size: .32rem;
            color:#999999;
            img{
                width: .6rem;
                height: .6rem;
            }
        }
        .theme{
          color:#05a0e5;

        }
    }
</style>
<script>

export default {
    name: 'bottom',
    props:["title"],
    data() {
        return {
            active1: this.active,
            amion:"12334",
            // title:'index'
        };
    },

    created(){
        
    },

    mounted(){
        
    },

    computed:{
        
    },
    methods:{
        changeType(n){
            /**
             * 
             * 有两种实现方式  第一种是 整个主体分为两部分  
             * 点击底部的导航栏   显示上面的内容    这种方式可以做成无路由的形式
             * 
             * 点击下面的导航栏切换路由 
             * 
             */
            switch(n){
                case 'sort' :
                    // this.title = 'sort';
                    this.$router.push({path:'/sort'})
                    break;
                case 'find' :
                    this.$router.push({path:'/find'})
                    break;
                case 'user' :
                    this.$router.push({path:'/user'})
                    break;
                default:
                    this.$router.push({path:'/index'})
                    break;
            }
        },
    }
}
</script>
