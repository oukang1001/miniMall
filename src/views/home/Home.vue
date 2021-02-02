<template>
    <div id="home">
        <main-navbar></main-navbar>
        <tab-ctrol :titles="['流行','新款','精选']" @getHomeGoodsData="getHomeGoodsData" ref="tabCtrol" v-if="isFixed" class="fixed" @commonClick="commonClick" :common-index="currentIndex"></tab-ctrol>
        <scroll 
            @isShowBackTop="isShowBackTop" 
            @getGoodsDataMore="getGoodsDataMore"
            ref="scroll"
            @contentScroll="contentScroll"
            class="scroll"
            :finish-pull-up="true"
            :pullup="true"
        >
            <main-swiper :banner="banner" @swiperImageLoaded="swiperImageLoaded"></main-swiper>
            <recommend-view :recommend="recommend"></recommend-view>
            <feature-view></feature-view>
            <tab-ctrol :titles="['流行','新款','精选']" @getHomeGoodsData="getHomeGoodsData" ref="tabCtrol" @commonClick="commonClick" :common-index="currentIndex"></tab-ctrol>
            <goods-list :goods="list"  ref="goodlist"></goods-list>
        </scroll>
        <back-top :isShow="isShow" @backtop="backTop"></back-top>
    </div>
</template>

<script>
    //views组件导入
    import mainNavbar from "./childComponents/MainNavbar"
    import mainSwiper from "./childComponents/MainSwiper"
    import recommendView from "./childComponents/RecommendView"
    import featureView from "./childComponents/FeatureView"
    //componnents组件导入
    import tabCtrol from "components/content/tabctrol/TabCtrol"
    import goodsList from "components/content/goodslist/GoodsList"
    import scroll from "components/content/scroll/Scroll"
    import backTop from "components/content/backtop/BackTop"
    //网络请求接口导入
    import {getHomeMultidata,getHomeGoods} from "network/home"

    
    import {imageRefresh} from "common/mixins"


    export default {
        name:"Home",
        data(){
            return {
                banner:[],
                recommend:[],
                goods:{
                    pop:{page:0,list:[]},
                    new:{page:0,list:[]},
                    sell:{page:0,list:[]},
                },
                currentType:"pop",
                isShow:false,
                offsetTop:0,
                isFixed:false,
                currentIndex:0
            }
        },
        mixins:[imageRefresh],
        computed:{
            list(){
                return this.goods[this.currentType].list;
               
            }
            
        },
        components:{
            mainNavbar,
            mainSwiper,
            recommendView,
            featureView,
            tabCtrol,
            goodsList,
            scroll,
            backTop
        },
        created(){
            getHomeMultidata().then(res=>{
                this.banner=res.data.banner.list;
                this.recommend=res.data.recommend.list;
            });
           this.getHomeGoodsFirstData("pop");
           this.getHomeGoodsFirstData("new");
           this.getHomeGoodsFirstData("sell");
            
          
        },
        activated(){
             this.$refs.scroll.refresh();
             this.EventBus.$emit("tabbarShow");
             this.EventBus.$on("imageLoaded",this.refreshHeight);
             
        },
        deactivated(){
            this.EventBus.$off("imageLoaded",this.refreshHeight);
        },
        methods:{
            getHomeGoodsFirstData(type){
                let page=this.goods[type].page+1;
                 getHomeGoods(type,page).then(res=>{  
                  this.goods[type].list=this.goods[type].list.concat(res.data.list);
                    this.goods[type].page=page;
                });
               
            },
             getGoodsDataMore(){
                    this.getHomeGoodsFirstData(this.currentType);
                }
                ,
            getHomeGoodsData(type){
                this.currentType=type;
                this.getHomeGoodsFirstData(type);
            },
            isShowBackTop(flag){
                this.isShow=flag;    
            },
            backTop(){
                this.$refs.scroll.scrollTo(0,0,300);
            },
            swiperImageLoaded(){
                this.offsetTop=this.$refs.tabCtrol.$el.offsetTop-44;
            },
            contentScroll(){
                if(this.$refs.scroll.getScrollY()>=this.offsetTop){
                    this.isFixed=true;
                }else{
                    this.isFixed=false;
                }
            },
            commonClick(index){
                this.currentIndex=index;
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    #home{
        overflow:hidden;
        height:100vh;
        .home_scroll{
            position:relative;
        }
    }
    .fixed{
        position:fixed;
        top:44px;
        left:0;
        right:0;
        z-index:10
    }
.scroll{
      height:calc(100% - 44px - 49px);
}
</style>


