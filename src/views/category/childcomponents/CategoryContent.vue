<template>
    <div class="cat_content">
       <scroll class="scroll_left" ref="scroll_left">
                <!-- 左边 -->
                <category-content-left class="cat_content_left">
                    <div v-for="(item,index) in titleList" :key="index" @click="handleActiveClick(index)" :class="{active:currentIndex===index}">
                        <span>{{item.title}}</span>
                    </div>
                </category-content-left>
        </scroll>
       <scroll class="scroll_right" ref="scroll_right">
                <!-- 右边 -->
                <category-content-right class="cat_content_right"> 
                    <category-good-info v-for="(item,index) in titleContent" :key="index" class="cat_good_info">
                        <div slot="img" class="img"><img :src="item.image" alt="" @load="imageLoaded"></div>
                        <span slot="title" class="title">{{item.title}}</span>
                    </category-good-info> 
                </category-content-right>
                
       </scroll>
    </div>
</template>

<script>
import scroll from "components/content/scroll/Scroll"

import categoryContentLeft from "./CategoryContentLeft"
import categoryContentRight from "./CategoryContentRight"
 import categoryGoodInfo from "./CategoryGoodInfo"

import {getCategorySubData} from "network/category"

import {debounce} from "common/utils"
    export default {
        name:"CategoryContent",
        data(){
            return {
                currentIndex:0,
                goodData:null,
                imgRefresh:null,
            }
        },
        props:{
            titleList:{
                type:Array,
                default(){
                    return [];
                }
            },
            titleContent:{
                type:Array,
                default(){
                  return []
                }
            }
        },
        components:{
            categoryContentLeft,
            categoryContentRight,
            categoryGoodInfo,
            scroll
        },
       
        methods:{
            handleActiveClick(index){
                this.currentIndex=index;
                this.$emit("getTitleContentData",index);
                this.$refs.scroll_right.scrollTo(0,0,0);
            },
            imageLoaded(){
                this.imgRefresh();
            }
        },
        
        mounted(){
            this.imgRefresh=debounce(this.$refs.scroll_right.refresh,200);
           
        },
        updated(){
             this.$refs.scroll_left.refresh();
             
        }
       
    }
</script>

<style lang="scss" scoped>
    .cat_content{  
         display:flex;
        }

        
    .scroll_left,.scroll_right{
        height:100%;
    }

    .scroll_left{
       width:30%;
    }

    .scroll_right{
        width:70%;
       
    }

    .cat_content_left{
        background:#eee;
        font-size:16px;
        font-weight:bold;
        text-align:center;
        color:#888;
         
        div{
            padding:12px;
        }
    }
    .cat_content_right{
        padding:10px 6px;
        text-align:center;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
      .cat_good_info{
          width:40%;
          padding-bottom:20px;
          color:rgb(201, 51, 76);
        //   font-weight:bold;
        font-size:16px;
          .img{
              width:100%;
              padding-bottom:10px;
              img{
                  width:100%
              }
          }
          .title{
              padding:5px;
          }
      }
    }
    
    .active{
        background:#fff;
        border-left:3px solid rgb(233, 78, 103);
        color: rgb(233, 78, 103)
    }
</style>