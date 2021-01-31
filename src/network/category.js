import {request} from "./request"

export function getCategoryData(){
    let url="/category";
    return request({
        url
    });
    
}

export function getCategorySubData(maitKey){
    let url="/subcategory"
    return request({
        url,
        params:{
            maitKey
        }
    })
}


