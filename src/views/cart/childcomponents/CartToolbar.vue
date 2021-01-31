<template>
    <div class="cart_toolbar">
       <div class="l">
           <check-button class="select_all" :is-select="isSelectAll" @click.native="changeState"></check-button>
       </div>
       <div class="center">
           <span class="total_price">合计:{{totalPrice}}</span>
       </div>
       <div class="r">
           <span class="total_counter" @click="handlePurchaseClick">结算({{selectCount}})</span>
       </div>
    </div>
</template>

<script>
import checkButton from "./CheckButton"

import {mapState,mapGetters} from "vuex"

import {showToast} from "common/utils"

    export default {
        name:"CartToolbar",
        data(){
            return {
            
            }
        },
        components:{
            checkButton
        },
        computed:{
             ...mapState({
                 cartList:"cartList"
             }),
             ...mapGetters(['totalPrice','selectCount']),

                isSelectAll(){
                  if(this.cartList.length===0){
                      return false;
                  }
                    return this.cartList.filter(item=>{
                        return item.isSelect;
                    }).length===this.cartList.length;
                }
        },
        methods:{
            changeState(){
                 if(this.isSelectAll){
                      this.cartList.forEach(item=>{ item.isSelect=false})
                 }else{
                       this.cartList.forEach(item=>{ item.isSelect=true})
                 }
               
            },
            handlePurchaseClick(){
                if(this.cartList.length===0){
                    showToast(this.$toast,"请先添加商品到购物车哦亲~")
                }else if(!this.cartList.filter(item=>item.isSelect).length){
                    showToast(this.$toast,"请先勾选商品再结算哦亲~")
                }else{
                     showToast(this.$toast,"请先等小生开发完毕先哦亲~")
                }
            }
        }
        
       
    }
</script>

<style lang="scss" scoped>
 .cart_toolbar{
     height:44px;
     display:flex;
     text-align:center;
     line-height:44px;
     justify-content:space-between;
     background:#fff;
     position:relative;
     z-index:10;
     .l,.center,.r{
         flex:1;
     }
     .l{
         
         .select_all{
                 position:relative;
                 left:17px;
                 top:14px;
                 line-height:0;
                 
             }
         
     }
     .r{
         .total_counter{
             background:red;
             color:#fff;
             padding:8px;
             border-radius:10px;
         }
     }

 }
</style>