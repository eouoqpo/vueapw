<template>
    <!--    有一个比较严重的问题就是 当父组件需要用到子组件的状态时，怎么把子组件的状态传递给父组件  -->
    <!--    解决方法    设置模拟点击   把状态存储到 localstorage 中  不用这个组件在需要的地方写一个相同的方法或者函数等 -->
    <span :class="saleType != '已结束 ' ? 'theme' : ''">{{saleType + countTime}}</span>
</template>

<style lang="scss" scoped>
    .theme{
        color:#05a0e5;
    }
</style>


<script>
    import { types } from 'util';
    export default {
        name: 'countdown',
        props:["item",'type'],
        data(){
            return {
                countTime:'',
                saleType:'',
                amion:1,
            }
        },
        mounted(){
            this.count();
            this.timer = setInterval(() => {
                if(this.saleType != '已结束 '){
                    this.count();
                }else{
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        components: {
            
        },
        methods:{
            count(){
                let nId = parseInt((new Date()).valueOf()/1000);
                let sId = parseInt((new Date(this.item.StartTime.replace(/-/g, '/'))).getTime()/1000);
                let eId = parseInt((new Date(this.item.EndTime.replace(/-/g, '/'))).getTime()/1000);
                let change = false,type = '',mydate = '' ,type2 = '';
                if(sId - nId > 0){
                    mydate = sId - nId;
                    type = "距开拍 ";
                    type2 = "未开始";
                }else if(eId -nId > 0  && this.item.GoodsStatus ==1){  //    && item.GoodsStatus ==1
                    mydate = eId -nId;
                    type = "距结束 ";
                    type2 = "出价";
                    this.saleType = type;
                }else{
                    type = "已结束 ";
                    type2 = "已结束";
                    change = true;
                };
                let myday1 = parseInt((mydate / 86400));
                let myhour1 = parseInt(((mydate % 86400)/3600));
                let myhour = parseInt((mydate/3600));
                let myMint = parseInt(((mydate%86400)%3600)/60);
                let mySecd = parseInt(((mydate%86400)%3600)%60);
                this.saleType = type;
                if(this.type !== '1'){
                    this.countTime = change ? this.item.EndTime : myday1 + "天" + myhour1 + "小时" + myMint + "分钟" + mySecd + "秒";
                }else{
                    this.countTime = change ? this.item.EndTime.split(' ')[1] : " " + myhour + ":" + myMint + ":" + mySecd + " ";
                }
            },
        },
        beforeDestroy(){
            clearInterval(this.timer);
        },
        destroyed(){
            clearInterval(this.timer);
        }
    }
</script>
