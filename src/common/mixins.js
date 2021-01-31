
import {debounce} from "./utils"
//图片加载完成刷新better-scroll
let imageRefresh={
    data(){
        return {
            refreshHeight:null
        }
    },
    mounted(){
        this.refreshHeight=debounce(this.$refs.scroll.refresh,100);
    }
}

let activeCheck={
    data(){
        return {
            boxHeight:0
        }
    },
    mounted(){
            this.$root.$on("scrollChange",(y)=>{
                this.boxHeight=this.$el.offsetHeight;
                if(this.$el.offsetTop+y<=0&&this.$el.offsetTop+y>-this.boxHeight){
                    this.$root.$emit("navbarActive",this.index);
                }

            })
    }
}

let clickChangePosition={
    mounted(){
        this.$root.$on("getOffsetTop",index=>{
            if(index===this.index){
                this.EventBus.$emit("postOffsetTop",this.$el.offsetTop);
            }
        });
    }
}
export {imageRefresh,activeCheck,clickChangePosition}