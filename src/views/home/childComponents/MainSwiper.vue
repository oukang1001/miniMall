<template>
    <div >
        <swiper>
            <swiper-item v-for="(item,index) in banner" :key="index" class="swiper_item">         
                    <img :src="item.image" alt="" @load="swiperImageLoaded">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
 import {swiper, swiperItem} from "components/common/swiper"

    export default {
        name:"MainSwiper",
        data(){
            return {
                imageLoaded:false
            }
        },
        components:{
            swiper, swiperItem
        },
        props:{
            banner:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        methods:{
            swiperImageLoaded(){
                if(!this.imageLoaded){
                     this.$emit("swiperImageLoaded");
                      this.imageLoaded=true;
                }
               
            }
        }
    }
</script>

<style lang="scss" scoped>
    .swiper_item{
        a{
            img{
                width:100%;
            }
        }
    }
</style>