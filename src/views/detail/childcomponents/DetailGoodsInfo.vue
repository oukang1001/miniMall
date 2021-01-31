<template>
    <div class="detail_goods_info">
       <p class="top"><span>【{{goodsInfo.name}}】</span><span>{{goodsInfo.title}}</span></p>
       <div class="middle">
           <span class="l">{{goodsInfo.oldPrice}}</span>
           <span class="m">{{goodsInfo.price}}</span>
           <span class="r">{{goodsInfo.discountDesc}}</span>
        </div>
       <div class="bottom">
           <div v-for="(item,index) in goodsInfo.columns" :key="index">{{item}}</div>
       </div>
       <div class="foot">
           <div v-for="(item,index) in goodsInfo.services" :key="index">
               <img :src="item.icon" alt="">
               <span>{{item.name}}</span>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name:"DetailGoodsInfo",
        props:{
            goodsInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detail_goods_info{
        padding:8px;
        border-bottom:5px solid #eee;
    }
    .top{
        font-size:14px;
        text-indent:1em;
        line-height:19px;
        font-weight:bold;
        padding-bottom:10px;
    }
    .middle{
        padding-bottom:10px;
        span.m{
            color:var( --color-high-text);
            font-size:18px;
            padding-right:3px;
            
        }
        span.l{
           text-decoration:line-through;
            font-size:12px;
            padding-right:10px;
        }
        span.r{
            font-size:10px;
            background-color:var(--color-high-text);
            border-radius:5px ;
            color:#fff;
            position:relative;
            top:-5px;
            margin-left:5px;
        }
    }
    .bottom{
        display:flex;
        // justify-content:space-between;
        padding-bottom:10px;
        border-bottom:2px solid #eee;
        div{
            flex:1;
            font-size:13px;
            &:nth-child(1){
                text-align:left;
            }
            &:nth-child(2){
                text-align:center;
            }
            &:nth-child(3){
                text-align:right;
            }
        }
    }
    .foot{
        display:flex;
        font-size:8px;
        padding:10px 0 10px 0;
        justify-content:space-between;
        flex-wrap:wrap;
        div{
            width:33%;
            padding-top:5px;
            img{
                width:15px;height:15px;
                position:relative;
                top:3px;
            }
            span{
                padding-left:2px;
            }
        }
    }
</style>