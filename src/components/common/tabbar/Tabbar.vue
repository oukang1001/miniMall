<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
    export default{

    }
</script>
<style>
    .tabbar{
        display:flex;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        height:49px;
        text-align:center;
        box-shadow:0 -1px 1px rgba(150,150,150,.5);
        padding-top:2px;
        background-color:#fff;
        z-index:10;
    }
</style>