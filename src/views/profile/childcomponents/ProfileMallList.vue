<template>
    <div class="pro_mall_list">
        <ul>
            <li><i class="iconfont icon-xinxi"></i><span>我的消息</span></li>
            <li><i class="iconfont icon-shangcheng"></i><span>积分商城</span></li>
            <li><i class="iconfont icon-huiyuankax"></i><span>会员卡</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"ProfileMallList"
    }
</script>

<style lang="scss" scoped>
.pro_mall_list{
    border-bottom:8px solid #eee;
}

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