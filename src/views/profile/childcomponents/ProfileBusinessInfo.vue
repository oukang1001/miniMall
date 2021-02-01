<template>
    <div class="pro_bus_info">
        <div class="balance"><span>{{balance}}</span>元<p>我的余额</p></div>
        <div class="discount"><span>{{discount}}</span>个<p>我的优惠</p></div>
        <div class="integral"><span>{{integral}}</span>分<p>我的积分</p></div>
    </div>
</template>

<script>
    export default {
        name:"ProfileBusinessInfo",
        data(){
            return {
                balance:"0.00",
                discount:0,
                integral:0
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .pro_bus_info{
        display:flex;
        text-align:center;
      
        color:#666;
       border-bottom:8px solid #eee;
        .balance,.discount,.integral{
            flex:1;
             padding:8px;
             font-size:16px;
        }
        .balance p,.discount p,.integral p{
            line-height:25px;
            font-size:16px;
        }
        .balance span,.discount span,.integral span{
            color:red;
            padding-right:2px;
        }
        .balance,.discount{
            border-right:2px solid #eee;
        }
    }
</style>