let Socket = ''
let setIntervalWesocketPush = null
let mymessage
/**
 * 建立websocket连接
 * @param {string} url ws地址
 */
export const createSocket = (client) => {
 
  Socket && Socket.close()//这样就只允许一个socket
  if (!Socket) {
    mymessage = client.message//要监听的消息
    console.log('建立websocket连接')
    Socket = new WebSocket(client.url)
    Socket.onopen = onopenWS
    Socket.onmessage = onmessageWS
    Socket.onerror = onerrorWS
    Socket.onclose = oncloseWS
  } else {
    console.log('websocket已连接')
  }
}

/**打开WS之后发送心跳 */
const onopenWS = () => {
  sendPing()
}

/**连接失败重连 */
const onerrorWS = () => {
  Socket.close()
  clearInterval(setIntervalWesocketPush)
  console.log('连接失败重连中')
  if (Socket.readyState !== 3) {
    Socket = null
    createSocket()
  }
}

/**WS数据接收统一处理 */
const onmessageWS = e => {
    //这个使用的时候要
    // 注册监听事件
    // window.addEventListener('onmessageWS', getsocketData)

    // // 在需要的时候卸载监听事件，比如离开页面
    // window.removeEventListener('onmessageWS', getsocketData)
  window.dispatchEvent(new CustomEvent(mymessage, {
    detail: {
      data: e.data
    }
  }))
}

/**
 * 发送数据但连接未建立时进行处理等待重发
 * @param {any} message 需要发送的数据
 */
const connecting = message => {
  setTimeout(() => {
    if (Socket.readyState === 0) {
      connecting(message)
    } else {
      Socket.send(JSON.stringify(message))
    }
  }, 1000)
}

/**
 * 发送数据
 * @param {any} message 需要发送的数据
 */
export const sendWSPush = message => {
  if (Socket !== null && Socket.readyState === 3) {
    Socket.close()
    createSocket()
  } else if (Socket.readyState === 1) {
    Socket.send(JSON.stringify(message))
  } else if (Socket.readyState === 0) {
    connecting(message)
  }
}

/**断开重连 */
const oncloseWS = () => {
  clearInterval(setIntervalWesocketPush)
  console.log('websocket已断开....正在尝试重连')
  if (Socket.readyState !== 2) {
    Socket = null
    createSocket()
  }
}
/**发送心跳
 * @param {number} time 心跳间隔毫秒 默认5000
 * @param {string} ping 心跳名称 默认字符串ping
 */
export const sendPing = (time = 5000, ping = 'ping') => {
  clearInterval(setIntervalWesocketPush)
  Socket.send(ping)
  setIntervalWesocketPush = setInterval(() => {
    Socket.send(ping)
  }, time)
}


