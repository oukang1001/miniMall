<template>
    <div class="comment_info" v-if="commentInfo.list">
        <div class="head"><span>用户评价</span><span>更多</span></div>
        <div class="top">
            <img :src="commentInfo.list[0].user.avatar" alt="">
            <span>{{commentInfo.list[0].user.uname}}</span>
        </div>
        <div class="middle">{{commentInfo.list[0].content}}</div>
        <div class="bottom">
            <span class="time">{{time}}</span>
            <span class="">{{commentInfo.list[0].style}}</span>
        </div>
        <div class="comment_img" v-if="commentInfo.list[0].images">
            <img :src="item" alt="" v-for="(item,index) in commentInfo.list[0].images" :key="index">
        </div>
    </div>
</template>

<script>

import {getTime} from "common/utils"
import {activeCheck,clickChangePosition} from "common/mixins"

    export default {
        name:"DetailCommentInfo",
        data(){
            return {
                 index:2
            }
        },
        props:{
            commentInfo:{
                type:Object,
                default(){
                    return {};
                }
            }
        },
        mixins:[activeCheck,clickChangePosition],
        computed:{
            time(){
                return getTime(this.commentInfo.list[0].created);
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="scss" scoped>
    .comment_info{
        padding:10px 0;
        border-bottom:5px solid #eee; 
        .head{
            display:flex;
            justify-content:space-between;
            border-bottom:3px solid #eee;
            margin-bottom:5px;
            span{
               padding:10px 5px;
            }
        }       
        .top{
            img{
                width:50px;height:50px;
                border-radius:50%;
            }
            span{
                position:relative;
                top:-20px;
                padding-left:10px;
                font-weight:bold;font-size:15px;
            }
        }
        .middle{
            font-size:14px;
            
        }
        .bottom{
            span{
                // color:#eee;
                font-size:12px;
                padding-right:10px;
                opacity:.8;
                line-height:24px;
            }
        }
        .comment_img{
            img{
                width:50px;
                margin-right:5px;
            }
        }
    }
</style>