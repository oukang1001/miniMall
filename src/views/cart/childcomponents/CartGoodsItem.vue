<template>
    <div class="cart_goods_item">
        <div class="l">
            <check-button class="check_button" :is-select="cartListItem.isSelect" @click.native="changeState(cartListItem.id)"></check-button>
        </div>
        <div class="c">
            <img :src="cartListItem.image" alt="" @load="imageLoaded">
        </div>
        <div class="r">
            <div class="top">
                {{cartListItem.title}}
            </div>
            <div class="middle">
                {{cartListItem.desc}}
            </div>
            <div class="bottom">
                <span class='price'>{{cartListItem.price}}</span>
                <span class="count">数量: ×{{cartListItem.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import checkButton from "./CheckButton"

import {mapState} from "vuex"
    export default {
        name:"CartGoodsItem",
        props:{
            cartListItem:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        components:{
            checkButton
        },
        computed:{
           ...mapState({
               cartList:"cartList"
           })
        },
        methods:{
            imageLoaded(){
                this.$root.$emit("Loaded")
            },
            changeState(id){
            //   this.cartList.forEach(item=>{
            //         if(item.id===id){
            //          item.isSelect=!item.isSelect;
            //          return;
            //        }
            //     })
                this.cartList.find(item=>{
                    return item.id===id
                }).isSelect=!this.cartList.find(item=>{
                    return item.id===id
                }).isSelect;
                
            }
        },
       
    }
</script>

<style lang="scss" scoped>
    .cart_goods_item{
        display:flex;
        justify-content:space-between;
        padding-bottom:4px;
       
    }
    .c{
        img{
              width:60px;
              border-radius:5px;
        }
    }
    .r{
        width:70%;
       .top,.middle,.bottom{
            white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis
       }
       .top{
           font-size:15px;
       }
       .middle{
           color:#aaa;
           font-size:13px;
           line-height:31px;
       }
       .bottom{
           display:flex;
           justify-content:space-between;
           padding-top:20px;
           span.price{
               color:var(--color-high-text);
           }
           span.count{
               font-size:14px;
           }
       }
    }
    .check_button{
        margin-top:31px;
    }
</style>