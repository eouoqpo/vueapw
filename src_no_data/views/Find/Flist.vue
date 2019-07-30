<template>
    <div id="amion">
        <Top :info="'发现列表'"/>
        <div class='item' flex="dir:left box:last">
            <img src="../../assets/img/ad.png">
            <div flex="dir:top box:last">
                <h3>闪电法师</h3>
                <p>是的发送到</p>
                <span>是的发送到</span>
            </div>                           
        </div>
        <!-- <div>
            <div class='item' flex="dir:left box:last cross:center">
                <span class="span1">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#ff1933"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center">
                <span class="span2">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#ff1933"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center">
                <span class="span1">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#ff1933"/></p>                            
            </div>
            <div class='item' flex="dir:left box:last cross:center">
                <span class="span3">
                    sdfsd你是谁
                </span>
                <p class ='fff'><mu-badge content="3" circle color="#ff1933"/></p>                            
            </div>
        </div> -->
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
