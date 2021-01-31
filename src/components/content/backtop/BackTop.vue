<template>
    <div class="backtop" v-show="isShow"  @click="handleTopClick">
        <img src="~assets/img/common/top.png" alt="" >
    </div>
</template>

<script>
    export default {
        name:"BackTop",
    props:{
        isShow:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleTopClick(){
            this.$emit("backtop")
        }
    }

    }
</script>

<style lang="scss" scoped>
    .backtop{
        position:fixed;
        right:8px;
        bottom:54px;
        img{
            width:43px;
            height:43px;
        }
    }
</style>