<template>
    <div class="pro_shop_list">
        <ul>
            <li><i class="iconfont icon-gouwuchekong"></i><span>我的购物车</span></li>
            <li><i class="iconfont icon-gouwu"></i><span>下载购物APP</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"ProfileshoppingInfo"
    }
</script>

<style lang="scss" scoped>

li{
    padding:12px;
    border-bottom:2px solid #eee;
    &:last-child{
        border-bottom:none;
    }
    i{
        font-size:23px;
        color:rgb(236, 129, 147);
        position:relative;
        top:3px;
       
        
    }
    span{
        font-size:18px;
        padding-left:7px;
    }
}
    .icon-shangcheng{
        left:-2px;
        top:2px;
    }
</style>