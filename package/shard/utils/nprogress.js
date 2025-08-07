import nProgress from "nprogress";
import 'nprogress/nprogress.css'

// 加载条全局配置
nProgress.configure({
    easing:"ease",
    showSpinner: true,
    speed:1000,
    trickleSpeed:200,
    minimum:0.3,
    parent:"body",
})

// 启动
export const start = () =>{
     nProgress.start();

}

// 停止
export const close = () =>{
    nProgress.done();
}