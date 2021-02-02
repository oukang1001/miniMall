<template>
    <div id="cat">
        <category-navbar class="cat_nav"></category-navbar>
        <category-content :title-list="titleList" class="cat_content" :title-content="titleContent"
            @getTitleContentData="getTitleContentData"
        ></category-content>
    </div>
</template>

<script>
import categoryNavbar from "./childcomponents/CategoryNavbar"
import categoryContent from "./childcomponents/CategoryContent"



import {getCategoryData,getCategorySubData} from "network/category"
    export default {
        name:"Category",
        data(){
               return {
                 titleList:null,
                 titleContent:null
               }
        },
        components:{
            categoryNavbar,
            categoryContent,
         
        },
        methods:{
            getTitleContentData(index){
                 getCategorySubData( this.titleList[index].maitKey).then(res=>{
                        this.titleContent=res.data.list;
                         });    
            }
        },
        created(){
            //获取左边title数据
            getCategoryData().then(res=>{
                this.titleList=res.data.category.list;
                getCategorySubData(this.titleList[0].maitKey).then(res=>{
                        this.titleContent=res.data.list;
                         });        
            });
                 
        },
        
    }
</script>

<style lang="scss" scoped>
   #cat{
       height:100vh;
       overflow:hidden;
     .cat_content{
         height:calc(100% - 44px - 49px);
     }
     .cat_nav{
         position:relative;
         z-index:10;
     }
   }
</style>
