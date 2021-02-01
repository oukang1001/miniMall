<template>
    <div class="cart_goods">
        <cart-goods-item  v-for="(item,index) in cartList" :cart-list-item="item" :key="index" :index="index"></cart-goods-item>
    </div>
</template>

<script>

import CartGoodsItem from "./CartGoodsItem"
    export default {
        name:"CartGoods",
        data(){
            return {
                
            }
        },
        components:{
            CartGoodsItem
        },
        computed:{
            cartList(){
                return this.$store.state.cartList;
            }
        },
        created(){
            
        }
    }
</script>

<style lang="scss" scoped>
    .cart_goods{
         padding:10px 5px;
    }
</style>