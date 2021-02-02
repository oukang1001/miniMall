<template>
     <div class="goods_item">
           <img v-lazy="getImage" alt="" @load="imageLoad" @click="handleDetailClick(goodsItem.iid)" :key="getImage">
            <div class="goods_item_content">
                <p>{{goodsItem.title}}</p>
                <span class="price">{{goodsItem.price}}</span>
                <span class="collect">{{goodsItem.cfav}}</span>
            </div>
    </div>
</template>

<script>
    export default {
        name:"GoodListItem",
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        computed:{
            getImage(){
                return this.goodsItem.show?this.goodsItem.show.img:this.goodsItem.image;
            }
        },
        methods:{
            imageLoad(){
                this.EventBus.$emit("imageLoaded")
            },
            handleDetailClick(id){
                this.$router.push({
                    path:"/detail",
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
           

            .goods_item{
                width:48%;
                position:relative;
                 padding-bottom:40px;
                img{
                    width:100%;
                    
                };
                .goods_item_content{
                    padding:2px;
                    position:absolute;
                    bottom:5px;
                    left:0;
                    right:0;
                   
                    p{
                        white-space:nowrap;          /* 不换行 */
                        overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
                        text-overflow:ellipsis; 
                        padding-bottom:2px; 
                    };
                    .price{
                        color:var(--color-high-text);
                        margin-right:20px;
                    };
                    .collect{
                        position:relative;
                        &:before{
                            content:"";
                            position:absolute;
                            left:-15px;
                            top:-1px;
                            width:14px;height:14px;
                            background:url("~assets/img/common/collect.svg") 0 0/14px 14px;
                        }
                    }
                }
            }
</style>