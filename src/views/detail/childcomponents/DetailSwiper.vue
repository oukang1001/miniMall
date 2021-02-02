<template>
    <div>
        <swiper>
            <swiper-item v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="" @load="handleLoadedImage">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>

import {swiper,swiperItem} from "components/common/swiper/index"

    export default {
        name:"DetailSwiper",
        data(){
            return {
                isLoaded:false,
                index:0,
            }
        },
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            }
        },
      
        components:{
            swiper,
            swiperItem
        },
        methods:{
            handleLoadedImage(){
                if(!this.isLoaded){
                    this.EventBus.$emit("imageLoaded");
                     this.isLoaded=true;
                }
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    img{
        height:270px
    }
</style>