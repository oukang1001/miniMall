<template>
    <div class="goods">
        <goods-list-item v-for="(item,index) in goods" :key="index"  :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>
import goodsListItem from "./GoodsListItem"
    export default {
        name:"GoodList",
        props:{
            goods:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        components:{
            goodsListItem
        }
      
    }
</script>

<style lang="scss" scoped>
    .goods{
         display:flex;
            flex-wrap: wrap;
            text-align:center;
            justify-content: space-around;
            padding:2px;
            font-size:12px;
    }
</style>