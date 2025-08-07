import { TinyModal } from "@opentiny/vue";
import _axios from "axios";


// 创建axios实例
const _service = _axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, //从环境变量获取URL实例，详情见.env.${mode}文件
    timeout: 100000, //请求超时时间 100s
})

// 请求拦截器，前端无需配置token值，浏览器自动处理，后端设置了HttpOnly防止xss攻击
_service.interceptors.request.use(
    config => {
        return config
    },
    // 请求错误配置
    error => {
        return Promise.reject(error)
    }
)

//请求拦截所有user接口
_service.interceptors.request.use(
    config =>{
        if(config.url && config.url.includes('/user')){
            // 禁止发送请求
            TinyModal.message({message:"[功能未开放]UGC功能已关闭!当前接口禁止访问!", status:"error"})
            return Promise.reject(new Error('UGC接口禁止发送请求'))
        }
        return config
    }
)

// 响应拦截器
_service.interceptors.response.use(
    response => {
        const resp = response.data;
        const { code } = resp;
        
        // 业务错误 (非200状态)
        if (code !== 200) {
            // 只显示错误消息，不返回任何内容
            TinyModal.message({
                message: resp.message || "业务错误!",
                status: "error"
            });
            // 让调用者处理错误
            return Promise.reject(new Error(resp.message || "业务错误!"));
        }
        
        // 成功响应直接返回data
        return resp;
    },
    // 网络错误处理
    error => {
        console.error("发生错误:", error);
        
        if (error.response) {
            // HTTP状态码错误
            const status = error.response.status;
            const message = error.response.data?.message || "请求失败";
            
            switch (status) {
                case 400:
                    TinyModal.message({
                        message: message,
                        status: "error"
                    });
                    break;
                case 403:
                    TinyModal.message({
                        message: "当前页面拒绝访问!",
                        status: "error"
                    });
                    break;
                default:
                    TinyModal.message({
                        message: `HTTP错误 ${status}: ${message}`,
                        status: "error"
                    });
            }
        } else {
            // 网络连接问题
            TinyModal.message({
                message: "[服务端]网络异常,请稍后重试！",
                status: "error"
            });
        }
        
        // 传递错误给调用者
        return Promise.reject(error);
    }
);

export default _service;