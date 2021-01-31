<template>
    <div class="main_navbar">
        <navbar class="navbar">
            <div slot="left"></div>
            <div slot="center" class="center">首页</div>
            <div slot="right"></div>
        </navbar>
    </div>
</template>

<script>
     import navbar from "components/common/navbar/Navbar"
    export default {
        name:"MainNavbar",
        components:{
           navbar
        }
    }
</script>

<style lang="scss" scoped>
    .main_navbar{
        position:relative;
        z-index:9;
    }
    .navbar{
         color:#fff;
        font-size:25px;  
    }
</style>