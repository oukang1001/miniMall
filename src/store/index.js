import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex);

import mutations from"./mutations"
import actions from "./actions"
import getters from "./getters"


const state={
        cartList:[]
}
const store =new vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{

    }
});

export default store;