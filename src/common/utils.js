const moment=require("moment")

//防抖
function debounce(func,delayTime=200){
    let timer=null;
    return function(){
           if(timer){
               clearTimeout(timer)
           }
        timer=setTimeout(func,delayTime);
    }
}


function getTime(timeStamp){
    return moment(new Date(timeStamp*1000)).format("YYYY-MM-DD HH:mm:SS");  
}

//显示弹出框信息
function showToast(toast,message){
    toast.message=message;
    toast.isShow=true;
    setTimeout(()=>{
       toast.isShow=false;
    },2000)
}
export {debounce,getTime,showToast}