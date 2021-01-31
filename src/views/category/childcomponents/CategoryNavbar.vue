<template>
    <div class="category_nav">
       <navbar >
           <div slot="center" class="center">商品分类</div>
       </navbar>
       
    </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"

    export default {
        name:"CategoryNavbar",
        components:{
            navbar
        }
    }
</script>

<style lang="scss" scoped>
    .center{
        color:#fff;
        font-size:25px;
    }
</style>