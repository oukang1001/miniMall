<template>
    <div id="cart">
        <cart-navbar class='navbar'></cart-navbar>
        <scroll class="scroll"  ref="scroll" @isShowBackTop="isShowBackTop">
            <cart-goods ></cart-goods> 
        </scroll>
        <back-top @backtop="gotop" class="back_top" :is-show="isShow"></back-top>
        <cart-toolbar></cart-toolbar>
    </div>
</template>

<script>
import cartNavbar from "./childcomponents/CartNavbar"
import cartGoods from  "./childcomponents/CartGoods"
import cartToolbar from "./childcomponents/CartToolbar"

import scroll from "components/content/scroll/Scroll"
import backTop from "components/content/backtop/BackTop"




    export default {
        name:"Cart",
        data(){
            return {
                refresh:null,
                isShow:false
            }
        },
        components:{
            cartNavbar,
            cartGoods,
            scroll,
            cartToolbar,
            backTop,
        },
        methods:{
          gotop(){
              this.$refs.scroll.scrollTo(0,0,100);
          },
          isShowBackTop(isshow){
                this.isShow=isshow;
            }
        },
       
        mounted(){
             this.$root.$on("Loaded",()=>{
                this.$refs.scroll.refresh();
            });
            console.log(this.$toast);
        },
        activated(){
            this.$refs.scroll.refresh();
          
        }
    }
</script>

<style lang="scss" scoped>
    #cart{
        height:100vh;
        overflow:hidden;
        .scroll{
            height:calc(100% - 44px - 49px - 44px);
        }
    }
    .navbar{
        position:relative;
        z-index:10
    }
    .back_top{
        transform:translate(0,-50px)
    }
</style>