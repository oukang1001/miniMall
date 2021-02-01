<template>
    <div class="item_params" v-if="Object.keys(itemParams).length!==0">
          <div class="rule">
            <p>{{itemParams.rule.key}}</p>
                <table>
                    <tr v-for="(tr,j) in itemParams.rule.tables[0]" :key="j">
                        <td v-for="(td,k) in tr" :key="k">
                            {{td}}
                        </td>
                    </tr>
                </table>
                <p class="disclaimer">{{itemParams.rule.disclaimer}}</p>
          </div>
          <div class="info">
              <table>
                    <tr v-for="(tr,j) in itemParams.info.set" :key="j">
                        <td>{{tr.key}}</td><td>{{tr.value}}</td>
                    </tr>
                </table>
          </div>
    </div>
</template>

<script>
import {activeCheck,clickChangePosition} from "common/mixins"
    export default {
        name:"DetailGoodsParams",
        data(){
            return {
                boxHeight:0,
                index:1
            }
        },
        props:{
            itemParams:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        mixins:[activeCheck,clickChangePosition],
    }
</script>

<style lang="scss" scoped>
    .item_params{
        text-align:center;
        padding:10px 0;
        border-bottom:5px solid #eee;
        font-size:12px;
      .rule{
                p{
                padding:10px 0;
                border-bottom:2px dashed #eee;
            }
            td{
                padding:5px 10px;
            }
      }
        .info{
            padding-top:10px;
                table{
                tr{
                    td{
                        padding:5px 10px;
                        &:nth-child(2){
                            background:yellow;
                        }
                    }
                }
            }
        }
        .disclaimer{
            font-size:12px;
        }
    }
</style>