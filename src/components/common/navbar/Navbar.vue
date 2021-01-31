<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
    export default{
        name:"Navbar"
    }
</script>
<style lang="scss" scoped>
    .navbar{
        display:flex;
        height:44px;
        line-height:44px;
        text-align:center;
         background-color:rgb(236, 129, 147);
          
         .left{
             width:80px;
               
         };
         .center{
            flex:1; 
            font-weight:bold;
         };
         .right{
             width:80px;
         }
    }
</style>