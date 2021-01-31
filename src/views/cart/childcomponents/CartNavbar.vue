<template>
        <navbar class="navbar">
            <div slot="center">购物车({{totalCount}})</div>
            <div slot="right"  class="manage"><span @click="handleManageClick">删除</span></div>
        </navbar>
</template>

<script>
   import navbar from "components/common/navbar/Navbar"

   import {mapState}  from "vuex"

   import {showToast} from "common/utils"
   
    export default {
        name:"CartNavbar",
        data(){
            return {
               
            }
        },
        components:{
            navbar
        },
        computed:{
            ...mapState({
                cartList:"cartList"
            }),
            totalCount(){
                return this.$store.state.cartList.reduce((pre,item)=>pre+=item.count,0);
            }
        },
        methods:{
            handleManageClick(){
                if(this.cartList.length){
                    if(!this.cartList.filter(item=>item.isSelect).length){
                        showToast(this.$toast,"请先勾选要删除的商品亲~");
                    }else{
                        this.$store.dispatch("deleteSelectedItem").then(res=>{
                                showToast(this.$toast,res);
                        })
                    }
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
   .navbar{
         color:#fff;
        font-size:25px;  
   }
   .manage{
       font-size:15px;
       text-align:right;
       span{
           padding-right:10px;
       }
   }
</style>