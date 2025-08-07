let heartBeatInterval // 心跳间隔
const HEARTBEAT_TIMER_INTERVAL = 10000 // 心跳间隔时间，单位毫秒

// 开启心跳机制
function startHeartBeat(socket){
    if(heartBeatInterval){
        clearInterval(heartBeatInterval);
    }

    heartBeatInterval = setInterval(()=>{
        // 发送心跳消息
        if(socket && socket.readyState === WebSocket.OPEN ){
            socket.send('PING')
        }
    },HEARTBEAT_TIMER_INTERVAL)
}

// 关闭心跳 
function stopHeartBeat(){
    if(heartBeatInterval){
        clearInterval(heartBeatInterval)
        heartBeatInterval = null;
    }
}

// 导出函数
export {startHeartBeat,stopHeartBeat};