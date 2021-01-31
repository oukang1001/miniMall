<template>
    <div class="shop_info">
       <div class="head">
           <img :src="shopInfo.shopLogo" alt=""> <span>{{shopInfo.name}}</span>
       </div>
       <div class="content">
           <div class="l">
                <div class="l_l">
                    <span>{{sells}}</span>
                    <p>总销量</p>
                </div>
                <div class="l_r">
                    <span>{{shopInfo.cGoods}}</span>
                    <p>全部宝贝</p>
                </div>
           </div>
           <div class="r">
                <table>
                    <tr v-for="(item,index) in shopInfo.score" :key="index">
                        <td>{{item.name}}</td> <td :style="{color:item.isBetter?'red':'green'}">{{item.score}}</td> <td :style="{color:item.isBetter?'red':'green'}">{{item.isBetter?"高":"低"}}</td>
                    </tr>
                </table>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name:"DetailShopInfo",
        props:{
            shopInfo:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        computed:{
            sells(){
                let cSells=this.shopInfo.cSells;
                let passCount;
                let string="";
               if(cSells>=10000){
                   passCount=cSells.toString().split("");
                   for(let i=0;i<passCount.length-3;i++){
                       if(i===passCount.length-4){
                           string+=".";
                       }
                       string+=passCount[i];
                   }
                   string+="万";
               }
                return cSells>=10000?string:cSells;
            },
            
        }
    }
</script>

<style lang="scss" scoped>
    .shop_info{
        border-bottom:5px solid #eee;
    }
    .head{
        padding:20px 0;
       img{
            width:60px;height:60px;
            border-radius:50%;
       }
       span{
           position:relative;
           top:-27px;
           left:5px;
       }
    }
    .content{
        display:flex;
        padding:10px 0;
        color:var(--color-text);
        .l{
            width:50%;
            height:48px;
            display:flex;
            border-right:2px solid #eee;
            div{
                flex:1;
                line-height:26px;
                text-align:center;
                p{
                     font-size:12px;
                }
            }
            .l_l{

            }
            .l_r{
               
            }
        }
        .r{
            font-size:13px;
            padding-left:28px;
          
            tr{
                td{
                    padding:3px;
                    &:nth-child(2),&:nth-child(3){
                          color:green;
                    }
                }
            }
        }
    }
    .active{
        color:red;
    }
</style>