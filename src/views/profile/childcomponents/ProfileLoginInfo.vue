<template>
    <div class="pro_login_info">
       <div class="l"><div><i class="iconfont icon-wodegerenzhongxin"></i></div></div>
       <div class="center">
             <p class="login">登录/注册</p>
             <p class="phone"><i class="iconfont icon-shouji"></i><span>暂无绑定手机号</span></p>
        </div>
       <div class="r">
           <i class="iconfont icon-xiangyou"></i>
       </div>
    </div>
</template>

<script>
    export default {
        name:"ProfileLoginInfo"
    }
</script>

<style lang="scss" scoped>
    .pro_login_info{
        padding:10px 0;
        display:flex;
        background:rgb(236, 129, 147);
        .l,.center,.r{
            flex:1;
        }
        .l{
          
           div{
               width:50px;height:50px;
               border-radius:50%;
               border:2px solid #eee;
               
                position:relative;
                left:20px;
           }
           .icon-wodegerenzhongxin{
               font-size:40px;
               font-weight:bold;
               position:relative;
               top:-5px;
               left:2px;
                color:#eee;
                
           }
        }
        .center{
            font-size:13px;
            position:relative;
            left:-24px;
            color:#fff;
            .login{
                padding:5px 0;
            }
            .phone{
                 padding:5px 0;
                 position:relative;
                 left:-5px;
                 i{
                     font-size:11px;
                 }
            }
        }
        .r{
            i{
                font-size:25px;
                position:relative;
                left:70px;;
                top:8px;
            }
        }
    }
</style>