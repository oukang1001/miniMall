<template>
    <div id="detail">
       <detail-navbar :titles="titles" class="detail_navbar" ></detail-navbar>
       <scroll 
            ref="scroll" 
            class="scroll"
            @isShowBackTop="isShowBackTop" 
       >
           <detail-goods> 
                <detail-swiper :topImages="topImages" ref="swiper" ></detail-swiper>
                <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
                <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
                <detail-goods-detail-info :detailImage="detailInfo.detailImage" ref="detailImage" ></detail-goods-detail-info>
            </detail-goods>
            <detail-goods-params :itemParams="itemParams" ref="params"></detail-goods-params>
            <detail-comment-info :comment-info="commentInfo" ref="comments"></detail-comment-info>
            <detail-recommend-info :recommend-info="recommendInfo" class="recommend" ref="recommends"></detail-recommend-info>
       </scroll>
       <back-top :is-show="isShow" @backtop="backtop"></back-top>
       <detail-tool-bar class="tool_bar" @addCart="addCart"></detail-tool-bar>
    </div>
</template>

<script>

import detailNavbar from "./childcomponents/DetailNavbar"
import detailSwiper from "./childcomponents/DetailSwiper"
import detailGoodsInfo from "./childcomponents/DetailGoodsInfo"
import detailShopInfo  from "./childcomponents/DetailShopInfo"
import detailGoodsDetailInfo from "./childcomponents/DetailGoodsDetailInfo"
import detailGoodsParams from "./childcomponents/DetailGoodsParams"
import detailCommentInfo from "./childcomponents/DetailCommentInfo"
import detailRecommendInfo from "./childcomponents/DetailRecommendInfo"
import detailGoods from "./childcomponents/DetailGoods"
import detailToolBar from "./childcomponents/DetailToolBar"

import scroll from "components/content/scroll/Scroll"
import backTop from "components/content/backtop/BackTop"


import {getData,goodsInfo,getShopInfo,getRecommendData} from "network/detail"

import {imageRefresh} from "common/mixins"
import {showToast} from "common/utils"

    export default {
        name:"Detail",
        data(){
            return {
                id:this.$route.query.id,
                timer:null,
                titles:["商品","参数","评论","推荐"],
                topImages:[],
                goodsInfo:{},
                shopInfo:{},
                detailInfo:[],
                itemParams:{},
                commentInfo:{},
                recommendInfo:[],
                isShow:false
            }
        },
        components:{   
            detailNavbar,
            detailSwiper,
            detailGoodsInfo,
            detailShopInfo,
            detailGoodsDetailInfo,
            detailGoodsParams,
            detailCommentInfo,
            detailRecommendInfo,
            scroll,
            backTop,
            detailGoods,
            detailToolBar
           
        },
        mixins:[imageRefresh],
        created(){
            getData(this.id).then(data=>{
                let result=data.result;
            //获取轮播图片
               this.topImages=result.itemInfo.topImages;
               //获取商品基本信息
               this.goodsInfo=new goodsInfo(result.itemInfo,result.columns,result.shopInfo);
               //获取商家信息
               this.shopInfo=new getShopInfo(result.shopInfo);  
               //获取商品详情信息
               this.detailInfo=result.detailInfo;
               //获取商品的参数信息
               this.itemParams=result.itemParams;
               //获取商品评论信息
               this.commentInfo=result.rate;
               console.log(data)
            });
             //获取推荐数据
               getRecommendData().then(data=>{
                   this.recommendInfo=data.data.list;
               });
               
    
        },
        mounted(){
             this.EventBus.$emit("tabbarShow");
             this.EventBus.$on("imageLoaded",this.refreshHeight);
             this.EventBus.$on("postOffsetTop",offsetTop=>{
                this.$refs.scroll.scrollTo(0,-offsetTop,0);
             })
           
        },
        methods:{
            isShowBackTop(isShow){
                this.isShow=isShow;
            },
            backtop(){
                this.$refs.scroll.scrollTo(0,0,200);
            },
            addCart(){
                let obj={};
                obj.id=this.id;
                obj.image=this.topImages[0];
                obj.oldPrice=this.goodsInfo.oldPrice;
                obj.price=this.goodsInfo.newPrice;
                obj.title=this.goodsInfo.title;
                obj.discount=this.goodsInfo.discountDesc;
                obj.columns=this.goodsInfo.columns;
                obj.services=this.goodsInfo.services;
                obj.desc=this.detailInfo.desc;
                obj.count=1;
                obj.isSelect=false;
                this.$store.dispatch("addCartList",obj).then(res=>{
                    showToast(this.$toast,res);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #detail{
        height:100vh;
          overflow:hidden;
        .detail_navbar{
            position:relative;
            z-index:10;
        }
    }
    .scroll{
          height:calc(100% - 44px -  49px );
           
           
    }
    .recommend{
        padding-top:20px;
    }
    .tool_bar{
        position:relative;
    }
</style>