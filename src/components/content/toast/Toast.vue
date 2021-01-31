<template>
    <div class="toast" v-if="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name:"Toast",
       data(){
           return {
                message:"",
                isShow:false
           }
       }
    }
</script>

<style lang="scss" scoped>
    .toast{
       padding:3px 10px;
        background:rgba(44, 34, 34, 0.75);
        position:fixed;
        left:50%;
        top:50%;
        border-radius:5px;
        color:#fff;
        text-align:center;
        font-size:12px;
        transform:translateX(-50%);
    }
</style>