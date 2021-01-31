<template>
    <div class="recommend_info">
         <goods-list :goods="recommendInfo"></goods-list>
    </div>
</template>

<script>
import goodsList from "components/content/goodslist/GoodsList"

import {activeCheck,clickChangePosition} from "common/mixins"

    export default {
        name:"DetailRecommendInfo",
        data(){
            return {
                index:3
            }
        },
        props:{
            recommendInfo:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        mixins:[activeCheck,clickChangePosition],
        components:{
            goodsList
        },
        mounted(){
        
        }
    }
</script>

<style lang="scss" scoped>

</style>