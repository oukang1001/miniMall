import Vue from "vue"
import vueRouter from "vue-router"

const Home=()=>import("views/home/Home")
const Category=()=>import("views/category/Category")
const Cart=()=>import("views/cart/Cart")
const Profile=()=>import("views/profile/Profile")
Vue.use(vueRouter);


const routes=[
    {
        path:"/",
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home
    },
    {
        path:"/category",
        component:Category
    },
    {
        path:"/cart",
        component:Cart
    },
    {
        path:"/profile",
        component:Profile
    }
]

const router=new vueRouter({
    routes,
    mode:"history"
});

router.afterEach((to,from)=>{
    let title="";
    switch(to.path){
        case "/home":title="首页";break;
        case "/category":title="分类";break;
        case "/cart":title="购物车";break;
        case "/profile":title="我的";break;
    }
    document.title=title;
})
export default router