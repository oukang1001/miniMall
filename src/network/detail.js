import {request} from "./request"

export function getData(iid){
    let url="/Detail"
    return request({
        url,
        params:{
            iid
        }
    })
}

export function getRecommendData(){
    let url="/recommend";
    return request({
        url
    })
}

class goodsInfo{
    constructor(itemInfo,columns,shopInfo){
        this.columns=columns;
        this.oldPrice=itemInfo.oldPrice;
        this.price=itemInfo.price;
        this.newPrice=itemInfo.lowPrice;
        this.title=itemInfo.title;
        this.discountDesc=itemInfo.discountDesc;
        this.name=shopInfo.name;
        this.services=shopInfo.services;
    }
}

class getShopInfo{
    constructor(shopInfo){
        this.shopLogo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.cSells=shopInfo.cSells;
        this.cGoods=shopInfo.cGoods;
        this.score=shopInfo.score;
    }
}
export {goodsInfo,getShopInfo}