# 匠能hvac前端
## 匠能hvac前端使用了Echart.js，Ant Design of Vue,mqtt.js,liveplay.js,支持实时接收传感器消息，并以图表形式实时显示。支持实时播放视频流（webrtc,flv,m3u8格式）

## 所有的包都记录在peckage.json文件中，您只要按如下操作就可以安装全部需要的包
```
npm install
```

### 执行完npm install 后，执行如下命令，就可以在开发者模式中启动项目，并且修改代码后会自动热重载
```
npm run serve
```

### 执行一下命令会生成dist文件，然后将此文件放在服务器中，并将nginx指定dist目录，就部署完成了
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
