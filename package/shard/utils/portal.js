import { createApp } from "vue";

export function createPortal(component,props){
    // 创建临时容器并添加到body中
    const container = document.createElement('div')
    document.body.appendChild(container)

    //挂载组件
    const app  = createApp({
        ...props,
        // 关闭时销毁容器
        onClose: ()=>{
            app.unmount()
            document.body.removeChild(container)
        }
    });

    return app.mount(container)
}