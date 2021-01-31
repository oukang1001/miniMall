<template>
    <div class='check_button' >
        <img src="~assets/img/cart/选中.png" alt=""  v-show="isSelect">
    </div>
</template>

<script>
    export default {
        name:"CheckButton",
        data(){
            return {
        
            }
        },
        props:{
            isSelect:{
                type:Boolean,
                default:false
            }
        },
        
        
    }
</script>

<style lang="scss" scoped>
    .check_button{
        width:20px;height:20px;
        border-radius:50%;
        border:2px solid #eee;
        img{
            width:100%;
            height:100%;
        }
    }
</style>