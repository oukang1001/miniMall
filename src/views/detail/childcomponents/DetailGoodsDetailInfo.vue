<template>
    <div class="detail_info">
        <div v-for="(item,i) in detailImage" :key="i">
            <div class="head">
                <div class="start"></div>
                 <span>{{item.key}}</span>
                <div class="end"></div>
            </div>
            <div class="content">
                <div v-for="(element,j) in item.list" :key="j">
                    <img v-lazy="element" alt="" @load="handleLoadedImage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DetailGoodsDetailInfo",
        props:{
            detailImage:{
                type:Array,
                default(){
                    return [];
                }
            }
        },
        methods:{
            handleLoadedImage(){
                this.EventBus.$emit("imageLoaded");
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
    .detail_info{
        padding-top:20px;
        border-bottom:5px solid #eee;
        .head{
            // height:100px;
            position:relative;
            margin-bottom:30px;
            text-align:center;
            .start,.end{
                width:100px;
                position:absolute;
                &::before{
                    content:"";
                    display:block;
                    width:5px;height:5px;border-radius:50%;
                    background:rgb(136, 122, 122);
                    position:absolute;
                    left:-6px;
                    top:-2px;
                }
            }
            .start{
                border-top:1px dashed rgb(136, 122, 122);
                top:0;
                left:10px;
            }
            span{
                line-height:50px;
            }
            .end{
                border-bottom:1px dashed rgb(136, 122, 122);
                right:10px;
                bottom:0;
            }
        }
        .content{
           div{
                img{
                    width:100%;
                }
           }
        }
    }
</style>