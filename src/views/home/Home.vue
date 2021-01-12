<template>
    <div>
        <navbar class="navbar">
            <div slot="left"></div>
            <div slot="center" class="center">首页</div>
            <div slot="right"></div>
        </navbar>
    </div>
</template>

<script>
    //组件导入
     import navbar from "components/common/navbar/Navbar"
    //网络请求接口导入
    import instance from "network"
    export default {
        name:"Home",
        components:{
            navbar
        },
        created(){
            instance.request({
                url:"/home/multidata",
                params:{
                    id:1,
                    message:"hello world"
                }
            }).then(res=>{
                console.log(res);
            });
        }
    }
</script>

<style lang="scss" scoped>
    .navbar{
        background-color:rgb(245, 132, 151);
        color:#fff;
        .center{
            font-weight:bold;
            font-size:25px;
        }
    }
</style>


