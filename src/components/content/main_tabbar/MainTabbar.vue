<template>
       <div v-if="isShop"> 
                <tabbar >
                    <tabbar-item path="/home" >
                        <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
                        <img src="~assets/img/tabbar/home.active.svg" alt="" slot="active_img">
                        <span slot="text">首页</span>
                    </tabbar-item>
                    <tabbar-item path="/category" >
                        <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
                        <img src="~assets/img/tabbar/category.active.svg" alt="" slot="active_img">
                        <span slot="text">分类</span>
                    </tabbar-item >
                    <tabbar-item path="/cart" >
                        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
                        <img src="~assets/img/tabbar/shopcart.active.svg" alt="" slot="active_img">
                    <span slot="text">购物车</span>
                    </tabbar-item >
                    <tabbar-item path="/profile" >
                        <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
                        <img src="~assets/img/tabbar/profile.active.svg" alt="" slot="active_img">
                        <span slot="text">我的</span>
                    </tabbar-item>
            </tabbar>
       </div>
</template>

<script>
    import tabbar from "components/common/tabbar/Tabbar"
    import tabbarItem from "components/common/tabbar/tabbar-item"
    export default {
        name:"MainTabbar",
        data(){
            return {
                isShop:true,
            }
        },
        components:{
            tabbar,
            tabbarItem
        },
        created(){ 
              this.EventBus.$on("tabbarShow",()=>{
                        switch(this.$route.path){
                        case "/home": this.isShop=true;break;
                        case "/detail": this.isShop=false;break;
                    }
              })
        }
    }
</script>

<style lang="scss" scoped>
    span{
        font-size:15px;
    }
</style>