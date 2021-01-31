export default{
    totalPrice(state){
        return '¥'+state.cartList.filter(item=>item.isSelect).reduce((preValue,item)=>{
             return preValue+=parseFloat(item.price)*item.count;
        },0).toFixed(2);
    },
    selectCount(state){
        return state.cartList.filter(item=>item.isSelect).reduce((pre,item)=>{
            return pre+=item.count;
        },0);
    },
    cartList(state){
        return state.cartList;
    }
}