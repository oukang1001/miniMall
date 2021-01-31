<template>
    <div id="profile">
       <navbar>
           <div slot="center" class="center">个人中心</div>
       </navbar>
       <profile-login-info></profile-login-info>
       <profile-business-info></profile-business-info>
       <profile-mall-list></profile-mall-list>
       <profile-shopping-list></profile-shopping-list>
    </div>
</template>

<script>
 import navbar from "components/common/navbar/Navbar"
import profileLoginInfo from "./childcomponents/ProfileLoginInfo"
import profileBusinessInfo from "./childcomponents/ProfileBusinessInfo"
import profileMallList from "./childcomponents/ProfileMallList"
import profileShoppingList from "./childcomponents/ProfileShoppingList"

    export default {
        name:"Profile",
        components:{
             navbar,
             profileLoginInfo,
             profileBusinessInfo,
             profileMallList,
             profileShoppingList
        }
    }
</script>

<style lang="scss" scoped>
    .center{
        font-size:25px;
        font-weight:bold;
        color:#fff;
    }
</style>