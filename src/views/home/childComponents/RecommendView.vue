<template>
    <div class="recommend">
       <div v-for="(item,index) in recommend" :key="index" class="recommend_item">
           <a :href="item.link">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
       </div>
    </div>
</template>

<script>
    export default {
        name:"RecommendView",
        props:{
            recommend:{
                type:Array,
                default(){
                    return [];
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .recommend{
         display:flex;
         text-align:center;
         padding:10px 0 10px 0;
         border-bottom:5px solid #eee;
         font-size:12px;
        .recommend_item{
            flex:1;
            a{
                img{
                    width:60px;height:60px;
                    padding-bottom:5px;
                }
            }
        }
    }
</style>