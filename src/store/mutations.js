import {ADD_COUNTER,ADD_TO_CART_LIST,DEL_SELECTED_ITEM} from "./mutations.types.js"

export default {  
    //商品数加1
    [ADD_COUNTER](state,payload){
        payload.count++;
    },
    //添加商品
    [ADD_TO_CART_LIST](state,payload){
        state.cartList.push(payload);
    },
    //改变商品的选中状态
    // [CHANGE_SELECT_STATE](state,payload){
    //     state.cartList.forEach((item,index)=>{
    //         if(item.id===payload.id){
    //             item.isSelect= !item.isSelect;
    //         }
    //     })
    // }
    [DEL_SELECTED_ITEM]({cartList}){
         for(let i=0;i<cartList.length;i++){
             if(cartList[i].isSelect){
                 cartList.splice(i,1);
                 i--;
             }
         }
    }
}