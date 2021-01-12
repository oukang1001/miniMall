<template>
    <div class="tabbar_item" @click="handleRouteClick">
       <div v-if="!isActive"><slot name="img"></slot></div>
       <div v-else><slot name="active_img"></slot></div>
       <div :style="textColor"><slot name="text"></slot></div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               
            }
        },
        methods:{
            handleRouteClick(){
                this.$router.push(this.path);      
            }
        },
        props:{
            path:String,
            color:{
                type:String,
                default:"blue"
            }
        },
        computed:{
            isActive(){
                return this.$route.path===this.path;
            },
            textColor(){
                return this.isActive?{color:this.color}:{color:"#666"}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabbar_item{
        flex:1;
    }
    .tabbar_item img{
        width:24px;height:24px;
        vertical-align: middle;
        padding-bottom:2px;
    }
</style>