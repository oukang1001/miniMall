import {
    ADD_COUNTER,ADD_TO_CART_LIST,CHANGE_SELECT_STATE,DEL_SELECTED_ITEM
} from "./mutations.types.js"

export default{
    addCartList(context,payload){
        return new Promise((resolve,reject)=>{
                    let flag=false;
                for(let item of context.state.cartList){
                    if(item.id===payload.id){
                    context.commit(ADD_COUNTER,item)
                        flag=true;
                        resolve("商品数+1")
                        break; ;
                    }
                }
                if(!flag){
                    context.commit(ADD_TO_CART_LIST,payload);
                    resolve("加入成功，购物车等亲哦~");
                    }
                });
     
    },
    changeSelectState({commit},payload){
        commit(CHANGE_SELECT_STATE,payload);
    },
    deleteSelectedItem({commit}){
            return new Promise((resolve,reject)=>{
                commit(DEL_SELECTED_ITEM);
                resolve("删除成功哦亲~");
            })
    }
}