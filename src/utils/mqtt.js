// mqtt.js
import mqtt_module from 'mqtt'

const Mqtt = function (params) {
  this.mqtt = mqtt_module

  // 随机数
  let outTradeNo = ''
  for (let i = 0; i < 3; i++) {
    outTradeNo += Math.floor(Math.random() * 10)
  }
  outTradeNo = parseInt(new Date().getTime() / 1000) + outTradeNo
  let options = {
    clientId: outTradeNo,
    username: params.username,
    password: params.password
  }
console.log(params.username)
  // 传参处理
  if (params.options) {
    Object.keys(params.options).forEach(key => {
      if (options[key]) options[key] = params.options[key]
    })
  }

  this.client = this.mqtt.connect(params.url, options)
console.log(params.url)
  // 重连次数 超10次就算了
  this.reconnectNum = 0

  // 连接
  this.link = function () {

    this.client.on('connect', e => {
      // 订阅
      this.client.subscribe(params.theme, {
        qos: 1
      }, () => {
        console.log(params.theme.join('----分割线----') + '----分割线----订阅成功')
        // .join  arr[0] = "George" arr[1] = "John" arr[2] = "Thomas" arr.join() 输出George,John,Thomas
           
      })
    })

    this.client.on('message', (topic, message) => {
      let data = message.toString()
      params.handleData && params.handleData(data, topic)
    })

    this.client.on('reconnect', error => {
      this.reconnectNum++
      if (this.reconnectNum >= 10) this.client.end(true)
      console.log('正在重连:', error)
    })

    this.client.on('error', error => {
      console.log('订阅失败', error)
    })

  }

  // 关闭
  this.close = function () {
    this.client.end(true)
  }
}

export default Mqtt