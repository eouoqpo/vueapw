import axios from 'axios';
import qs from 'qs';
import host from '../ip.js';
import Maps from './tool.js';

//     是否允许跨域
axios.defaults.withCredentials = true;

//   axios 初始化；延迟时间，主路由地址
let amion = axios.create({
    retry: 2, // 请求次数
	retryInterval: 1000,
    baseURL: host,
    timeout: 5000,
});

// 设置拦截器
amion.interceptors.request.use(function (config) {
    //在发送请求之前做某事
    return config;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});
//响应拦截器
amion.interceptors.response.use(function (response) {
    //对响应数据做些事
    return response;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

// 请求成功的回调
function checkStatus(res) {
    console.log(res)
    //请求结束成功
    if (res.status === 200 || res.status === 304) {
        // console.log("code 200 code 304 res",res)
        //    统一返回   
        // if(res.data.Data)
        // return res.data.Data ? res.data.Data : res.data.Msg;
        return {
            msg: res.data.Code==0 ? 'success' : res.data.Msg,
            data: res.data.Data
        }
        // if(res.data.Code==0){
        //     return res.data.Data ? res.data.Data : 'success'
        // }else if(res.data.Code==1){
        //     //   请求成功返回的数据是失败的
        //     return res.data.Msg;
        // }
    }
}

// 请求失败的回调
function checkCode(res) {
    console.log("axios checkCode info",res)
    // if (res.code === 0) {
    //     //    感觉失败的处理有问题
    //     throw new Error(res.msg)
    // }
    return res
}


//模块化导出
export default {
    // get(url, params) {
    //     if (!url) return;
    //     return instance({
    //         method: 'get',
    //         url: url,
    //         params,
    //         timeout: 30000
    //     }).then(checkStatus).then(checkCode)
    // },
    //    只有一个方法的请求  成功和失败的处理方式也可以不用封装
    post(url, data) {
        let user = Maps.get("user");
        let Req = {
            Code: 0,
            Msg: user ? user.Sid : "",
            Data: data
        }
        console.log("axios req info",Req);
        console.log("json axions req info",JSON.stringify(Req))
        console.log("qs axios req info ",qs.stringify(Req))
        if (!url) return;
        return amion({
            method: 'post',
            url: url,
            data: JSON.stringify(Req),  //    用 qs 一直提示解析失败  和后台的配置有关系
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    // postFile(url, data) {
    //     if (!url) return;
    //     return instance({
    //         method: 'post',
    //         url: url,
    //         data
    //     }).then(checkStatus).then(checkCode)
    // }
}
