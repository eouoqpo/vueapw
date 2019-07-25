<template>
    <div class="top" flex="dir:left box:justify cross:center">
        <img @click="goback" :src="info ? require('../assets/img/back.png') : require('../assets/img/logo.png')">
        <input @click='onChange' type="text" placeholder="请输入要搜索的商品名称" :class="info ? 'none' : ''">
        <span :class="info ? '' : 'none'">{{info}}</span>
        <img src="../assets/img/kefu.png" @click="openphone">
    </div>
</template>

<style lang="scss" scoped>
    .top{
        position: relative;
        top:0px;
        height: 1.28rem;
        padding:0rem 0.5rem 0rem 0.36rem;
        background-color:#ff1933;
        font-size:.38rem;
        color:#fff;
        text-align: center;
        img{
            width: .6rem;
            height: .6rem;
        }
        span{
            font-size: .48rem;
        }
        input{
            margin:.0rem .4rem 0rem .28rem;
            background-color:#fff;
            height: .8rem;
            color:#333;
            padding-left:.32rem;
            border-radius: .4rem;
        }
        .none{
            display: none;
        }
    }
</style>


<script>
// @ is an alias to /src

export default {
  name: 'top',
  props:["info"],
  components: {
    // HelloWorld
  },
  methods:{
    goback(){
        this.$router.go(-1);
    },

    openphone(){
        console.log("info message");
        window.location.href = "tel://86-18679179445"
    },

    onChange(){
        console.log("info data")
        this.$router.push({path:"/index/search"});
    }
  }
}
</script>
