<template>
    <div id="amion">
        <Top :info="'发现'"/>
        <div>
            <div class='item' flex="dir:left box:last cross:center" @click="fdetails(n)">
                <span class="span1">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#05a0e5"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center" @click="fdetails(n)">
                <span class="span2">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#05a0e5"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center" @click="fdetails(n)">
                <span class="span1">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#05a0e5"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center" @click="fdetails(n)">
                <span class="span3">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#05a0e5"/></p>                            
            </div>
        </div>
        <Bottom :title="'find'"/>
    </div>
</template>

<style lang="scss" scoped>
    #amion{
        .item {
            padding:0.2rem .5rem;
            height: 1.36rem;
            background-color:#fff;
            border-bottom: .02rem solid #f0f0f0;
            span{
                padding-left:.8rem;
                color:#999;
                font-size: .48rem;
            }
            .span1{
                background:url('../../assets/img/topSort.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            .span2{
                background:url('../../assets/img/record.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            .span3{
                background:url('../../assets/img/Fshare.png') left center no-repeat;   //   record
                background-size:.6rem .6rem;
            }
            p{
                padding-right:.8rem;
                background:url('../../assets/img/arrow_down.png') right center no-repeat;
                background-size:.8rem .8rem;
            }
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue'
    import Bottom from '../../components/Bottom.vue'
    export default {
    //    props:["active"], 
        name: 'find',
        data() {
            return {
                show: false,
                // title:'',
                rawHtml:'<span style="color:yellow">sdhfsdfsd</span>'
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            // this.myconsole();
        },

        methods:{

            //   跳转到详情页
            fdetails(n){
                this.$router.push({
                    path:'/find/fdetails'
                })
                //    this.$router.push({path:"/index/stable"});
            },

            onClickRight(){
                this.show = true
            },

            onClickLeft(){
                this.$router.go(-1)
            },

            myconsole(){
                alert(1)
                console.log('myconsole  info',this.title)
            }
        } 
    }
</script>
