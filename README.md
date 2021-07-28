# 匠能hvac前端

## 使用
```javascript
$ git clone https://github.com/Jnlabiot/jn_hvac_ui.git
$ cd main
$ npm install
$ npm start         # visit http://localhost:8000
```
### 安装之前，推荐使用淘宝镜像源，npm默认是从国外源下载的会很慢，
```javascript
npm config set registry https://registry.npm.taobao.org

```
### 本地开发环境要求
+ nodeJs V14.x
+ npm V6.x
+ Chrome v80.0+

### 修改后台接口 public/config.js
```javascript
window.g={
    //登录
    login:"",
//设备状态列表
     device_list:"",
//设备模拟器
    //新建设备
     new_devices:"",
     //恢复设备传True
      //禁止设备传false
      //两个是同一个接口
     recover_devices:"",
     //删除设备
     delete_devices:"",
//规则引擎
    //规则实例
        //规则列表
    rules_list:"",
        //新建规则
    new_rules:"",
       //执行规则 publish,输入行为
    rules_publish:"",
       //删除规则
    rules_delete:"",
    //修改规则
    rules_revise:"",
       
//帐篷传感器数据
     tent_sensor:"",

//3维温度场
  url:"",
  username:"",
  password: "",
  //课室3d温度场主题
  theme:[`3dscatter`],//[`topic/+`, `topic/+/test`],可以同时订阅多个主题，那个符号是三角符号
  //帐篷3d温度场主题
  theme_tent:[`3dscatterTent`],
   //北主楼20x
   theme_classroom_live_20x:[`beizhulou_20x`],
     //北主楼全部
     theme_beizhulou_all:[`buding_beizhulou`],
   //classroom_videoUrl:"",
   //课室，视频流
   classroom_videoUrl:"",
   //现场视频流
   live_videoUrl:"",

}   

```
### 更多接口参考使用文档


