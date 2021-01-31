<template>
    <div class="tabctrol">
        <div v-for="(item,index) in titles" :key="index" 
        class="tabctrol_item"
        @click="handleActiveClick(index)"
        >
            <span  :class="{active:index===commonIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TabCtrol',
        data(){
            return {
                currentIndex:this.commonIndex,
                type:"pop"
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return [];
                }
            },
            commonIndex:{
                type:Number,
                default:0
            }
        },
        methods:{
            handleActiveClick(index){
                switch(index){
                    case 0:this.type="pop";break;
                    case 1:this.type="new";break;
                    case 2:this.type="sell";break;

                };
                this.$emit("getHomeGoodsData",this.type);
                this.$emit("commonClick",index);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabctrol{
        display:flex;
        text-align:center;
        height:40px;
        line-height:40px;
        font-size:15px;
        background-color:#fff;
        .tabctrol_item{
            flex:1;
            span{
                margin-bottom:5px;
            }
        }
    }
    .active{
        color:var(--color-high-text);
        border-bottom:3px solid var(--color-tint);
        font-weight:bold;
    }
</style>