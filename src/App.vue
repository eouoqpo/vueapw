<template>
    <div id="app">
        <router-view/>
        <!-- <h2 v-on:click="myconsole">hello234234</h2>              
        <Bottom :title="1234"/> -->
    </div>
</template>

<style lang="scss" scoped>
    #app{
        // font-size: .72rem;
        // background-color: red;
    }
</style>
<script>
    import Bottom from './components/Bottom'
    export default {
       props:["title"],
        data() {
            return {
                show: false,
            };
        },

        components: {
            Bottom
        },

        methods:{
            onClickRight(){
                this.show = true
            },

            myconsole(){
                alert(1)
                console.log('myconsole  info',this.title)
            },

            onClickLeft(){
                this.$router.go(-1)
            }
        } 
    }
</script>

