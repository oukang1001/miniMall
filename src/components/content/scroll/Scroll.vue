<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import BScroll from "@better-scroll/core"
import pullup from "@better-scroll/pull-up"
import pulldown from "@better-scroll/pull-down"

BScroll.use(pullup);
BScroll.use(pulldown);

    export default {
        name:"Scroll",
        data(){
            return {
                scroll:null,
            }
        },
        props:{
            probetype:{
                type:Number,
                default:3
            },
            pulldown:{
                type:Boolean,
                default:false
            },
            pullup:{
                type:Boolean,
                default:false
            }
            ,
            refreshDelay:{
                type:Number,
                default:20
            },
            click:{
                type:Boolean,
                default:true
            },
            finishPullUp:{
                type:Boolean,
                default:false
            },
            beforescrollstart:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.initScroll();
            this.scrollEvent();
         if(this.pullup){
            this.pullUp();
         }
        if(this.pulldown){
            this.pullDown();
           }
        },
        methods:{
            //初始化better-scroll
            initScroll(){
                this.scroll=new BScroll(this.$refs.wrapper,{
                   probeType:this.probetype,
                   pullUpLoad:this.pullup,
                   click:this.click,
                   pullDownRefresh:this.pulluown
                });
            },
            scrollEvent(){
                this.scroll.on("scroll",(position)=>{
                    let isShow=false;
                    if(Math.abs(position.y)>800){
                        isShow=true;
                    }else{
                        isShow=false; 
                    }
                      this.$emit("isShowBackTop",isShow)
                    this.$emit("contentScroll");
                    this.$root.$emit("scrollChange",position.y)
                });
            },
            pullUp(){
                this.scroll.on("pullingUp",()=>{
                   this.$emit("getGoodsDataMore")
                   if(this.finishPullUp) { 
                        this.scroll.finishPullUp();
                       }
                  
                })
            },
            pullDown(){
                this.scroll&&this.scroll.on("pullingDown",()=>{
                    this.scroll.finishPullDown();
                })
            },
            scrollTo(x,y,time=300){
               this.scroll&&this.scroll.scrollTo(x,y,time);
            },
            refresh(){
                this.scroll&&this.scroll.refresh();
                // console.log(111)
            },
            getScrollY(){
                return this.scroll&&-this.scroll.y
            },
           
        }
    }
</script>

<style lang="scss" scoped>
   
</style>