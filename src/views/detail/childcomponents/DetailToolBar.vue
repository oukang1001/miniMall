<template>
    <div class="tool_bar">
       <div class="l">
           <div class="kefu"><div class="img"></div><span>客服</span></div>
           <div class="dianpu"><div class="img"></div><span>店铺</span></div>
           <div class="shoucang"><div class="img"></div><span>收藏</span></div>
       </div>
       <div class="r">
           <div class="joinCart" @click="handleJoincartClick">加入购物车</div>
           <div class="purchase">购买</div>
       </div>
    </div>
</template>

<script>
    export default {
        name:"DetailToolBar",
        methods:{
            handleJoincartClick(){
                this.$emit("addCart")
                console.log("join cart");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tool_bar{
        height:49px;
        background:#fff;;
        display:flex;
        text-align:center;
        font-size:12px;
        .l{
            flex:1;
            display:flex;
            .kefu,.shoucang,.dianpu{
                flex:1;
            }
            .kefu{    
                .img{
                  
                    background:url("~assets/img/detail/detail_bottom.png") 0 -48px/20px ;     
                }
            }
            .dianpu{
                  .img{
                   
                    background:url("~assets/img/detail/detail_bottom.png") 0 -90px/20px ;     
                }
            }
            .shoucang{
                  .img{
                   
                    background:url("~assets/img/detail/detail_bottom.png") 0 0/20px ;     
                }
            }
        }
        .r{
            flex:1;
            display:flex;
            line-height:49px;
            font-size:13px;
            color:#fff;
            div{
                flex:1;
            }
            .joinCart{
                background-color:orange;
               border-radius:16px 0 0 16px;
            }
            .purchase{
                background:red;
                 border-radius:0 16px 16px 0;
               
            }
            .joinCart,.purchase{
                position:relative;
                top:10px;
                 line-height:30px;
                  height:30px;
            }
        }

    }
     .kefu .img,.shoucang .img,.dianpu .img{
                width:20px;height:20px;
                 position:relative;
                    left:17px;
                    top:6px;
            }
    .kefu span,.shoucang span,.dianpu  span{
                 position:relative;
                   top:9px;
             }
            
 </style>