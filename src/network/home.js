import {request} from "./request"

//获取轮播图和推荐数据
function getHomeMultidata(){
    const url="/home/multidata";
    return request({
        url
    });
}
//获取goods商品数据

function getHomeGoods(type,page){
    const url="/home/data";
    return request({
        url,
        params:{
            type,page
        }
    })
} 

export {getHomeMultidata,getHomeGoods}