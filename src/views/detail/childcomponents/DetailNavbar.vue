<template>
    <div>
        <navbar class="navbar">
            <div slot="left" class="left" @click="handleBackClick"><img src="~assets/img/common/back.svg" alt=""></div>
            <div slot="center" class="center">
                <div v-for="(item,index) in titles" :key="index" @click="handleActiveClick(index)" ><span :class="{active:currentIndex===index}">{{item}}</span></div>
            </div>
        </navbar>
    </div>
</template>

<script>
  import navbar from "components/common/navbar/Navbar"

    export default {
        name:"DetailNavbar",
        data(){
            return {
                currentIndex:0
            }
        },
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            navbar
        },
        methods:{
            handleBackClick(){
                this.$router.back();
            },
            handleActiveClick(index){
                this.currentIndex=index;
                this.$root.$emit("getOffsetTop",index);
            }
        },
        mounted(){
            this.$root.$on("navbarActive",index=>{
                switch(index){
                    case 1: 
                    case 2: 
                    case 3: this.currentIndex=index;break;
                    default:this.currentIndex=0
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .navbar{
          
        .left{
            padding-top:5px;
            img{
                width:18px;height:18px;
            }
        }
        .center{
                display:flex;
                font-size:15px; 
                div{
                    flex:1;
                }
            }
    }
    .active{
         color:var(--color-high-text);
        border-bottom:3px solid var(--color-tint);
        font-weight:bold;
    }
    .navbar{
        background:#fff;
    }
</style>