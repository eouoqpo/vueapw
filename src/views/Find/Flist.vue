<template>
    <div id="amion">

        <Top :info="title"/>
        
        <div class="flistCont">
            <div class='item' v-for='info in flistInfo' :key='info.Id' flex="dir:left box:last" @click="goFdetail(info.Id)">
                <img :src="info ? info.Url : require('../../assets/img/amionlogo.png')">
                <div flex="dir:top box:last">
                    <h3>{{info.Title}}</h3>
                    <p>{{info.Descr}}</p>
                    <span>{{info.DateTime.split(' ')[0]}}</span>
                </div>                           
            </div>            
        </div>

        <Bottom :title="'find'"/>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/assets/css/bg.scss';
    #amion{
        .flistCont{
            margin:.0rem .0rem 1.4rem;
        }
        .item{
            h3{
                height: .38rem;
            }
            width: 10.8rem;
            height: 3.65rem;
            background: #fff;
            padding: 0.45rem;
            border-bottom: 0.02rem solid #ccc;
            img{
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 0.2rem;
                margin-right: 0.45rem;
            }    
            span{
                display: block;
                height: .6rem;
                line-height: .6rem;
                font-size: 0.42rem;
                font-weight: 600;
                width: 6rem;
                font-size: 0.34rem;
                color: #05a0e5;
                overflow: hidden;
                white-space: nowrap;
                text-overflow:ellipsis;    
            }    
            p{
                width: 6rem;
                height: .7rem;
                font-size: 0.38rem;
                padding:.05rem .0rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;    
            }
        }
    }
</style>
<script>
    import Top from '../../components/Top.vue';
    import Bottom from '../../components/Bottom.vue';
    import * as url from '../../config.js';
    export default {
        name: 'flist',
        data() {
            return {
               flistInfo:[],
               title:this.$route.query.title ? this.$route.query.title : '发现列表'
            };
        },

        components: {
            Bottom,
            Top
        },

        mounted(){
            console.log("info    this.$route.query.id",this.$route.query.id);
            ( this.$route.query && this.$route.query.id >=0 ) ? this.flist() : (console.log("info"));
            // this.flist();
        },

        methods:{
            flist(){
                let data = {
                    Flag:+this.$route.query.id,   //    this.props.location.state.id
                    Page:1,
                    Limit:20
                };
                let result = new Promise((resolve,reject) => {
                    this.$http.post(url.FindList,data).then(res => {
                        console.log("res info in flist ",res)
                        if(res.msg == 'success'){
                            this.flistInfo = res.data.List
                        }
                    }).catch(error => {
                        console.log('error in find at component Flist method flist',res)
                    });
                })
            },
            //     跳转到详情页
            goFdetail(id){
                this.$router.push({
                    name:'fdetail',
                    query:{
                        id,
                        title:this.title == '发现列表' ? '发现详情' : '分享详情'
                    }
                })
            }
        } 
    }
</script>
