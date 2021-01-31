import toast from "./Toast"
export default{
    install(Vue){
        let constructor=Vue.extend(toast);
        let Toast=new constructor();
        Toast.$mount(document.createElement("div"));
        document.body.appendChild(Toast.$el)
        Vue.prototype.$toast=Toast;
    }
}
