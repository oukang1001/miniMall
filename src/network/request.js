import axios from "axios"

let request=(config)=>{
    //创建axios实例
    let instance=axios.create({
        baseURL:"http://152.136.185.210:7878/api/m5",
        timeout:3000
    });
    //请求拦截
    instance.interceptors.request.use(config=>{
        return config;
    },error=>{
        console.log(error);
    });
    //响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    })
    return instance(config);
}
export {request}