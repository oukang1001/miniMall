<template>
    <div class="goods">
        <slot></slot>
    </div>
</template>

<script>
import {activeCheck,clickChangePosition} from "common/mixins"
    export default {
        name:"goods",
        data(){
            return {
                index:0
            }
        },
     mixins:[activeCheck,clickChangePosition],
    }
</script>

<style lang="scss" scoped>

</style>