<template>
    <span></span>
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
    name: 'countdown',
    // props:["info"],
    props: {
        item:item,
        type:'index'  //  detail  用户详情页 
    },
    data(){
        return {
            countTime:''
        }
    },
    components: {
        
    },
    methods:{
       count(){
            let nId = parseInt((new Date()).valueOf()/1000);
            let sId = parseInt((new Date(item.StartTime.replace(/-/g, '/'))).getTime()/1000);
            let eId = parseInt((new Date(item.EndTime.replace(/-/g, '/'))).getTime()/1000);
            if(sId - nId > 0){
                //     距开拍是多少;
                mydate = sId - nId;
                type = "预展中 | 距开拍";
                type2 = "未开始";
            }else if(eId -nId > 0  && item.GoodsStatus ==1){  //    && item.GoodsStatus ==1
                //    拍卖中
                mydate = eId -nId;
                type = "拍卖中 | 距结束";
                type2 = "出价";
            }else{
                type = "已结束";
                type2 = "已结束";
                change = true;
                // return item.EndTime;         // return item.EndTime.split(" ")[0];
            };
            let myday = parseInt((mydate / 86400));
            let myhour = parseInt(((mydate % 86400)/3600));
            let myMint = parseInt(((mydate%86400)%3600)/60);
            let mySecd = parseInt(((mydate%86400)%3600)%60);
            if(change){
                countTime = item.EndTime;
            }else{
                countTime = myday + " " + myhour + " " + myMint + " " + mySecd + " ";
            }
       }
    }
}
</script>
