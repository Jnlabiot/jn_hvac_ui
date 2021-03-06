window.g={
    //登录
    login:"http://你的服务器ip地址:8080/api/v2/login",
//设备状态列表
     device_list:"http://你的服务器ip地址:8080/api/v2/equipmentList",
//设备模拟器
    //新建设备
     new_devices:"http://你的服务器ip地址:8080/api/v2/addNewTool",
     //恢复设备传True
      //禁止设备传false
      //两个是同一个接口
     recover_devices:"http://你的服务器ip地址:8080/api/v2/forbiddenTool",
     //删除设备
     delete_devices:"http://你的服务器ip地址:8080/api/v2/deleteEquipment",
//规则引擎
    //规则实例
        //规则列表
    rules_list:"http://你的服务器ip地址:8080/api/v2/controlList",
        //新建规则
    new_rules:"http://你的服务器ip地址:8080/api/v2/addNewControl",
       //执行规则 publish,输入行为
    rules_publish:"http://你的服务器ip地址:8080/api/v2/publish",
       //删除规则
    rules_delete:"http://你的服务器ip地址:8080/api/v2/deleteControl",
    //修改规则
    rules_revise:"http://你的服务器ip地址:8080/api/v2/updateControl",
       
     //帐篷传感器数据
     tent_sensor:"wss://你的ip+端口",

     //课室
     selectSheet2601:"http://你的服务器ip地址:7070/api/v2/selectSheet2601",
     selectSheet2602:"http://你的服务器ip地址:7070/api/v2/selectSheet2602",
     selectSheet2603:"http://你的服务器ip地址:7070/api/v2/selectSheet2603",
     selectSheet2604:"http://你的服务器ip地址:7070/api/v2/selectSheet2604",
     selectSheet2605:"http://你的服务器ip地址:7070/api/v2/selectSheet2605",
     selectSheet3601:"http://你的服务器ip地址:7070/api/v2/selectSheet3601",
     selectSheet3602:"http://你的服务器ip地址:7070/api/v2/selectSheet3602",
     selectSheet3603:"http://你的服务器ip地址:7070/api/v2/selectSheet3603",
     selectSheet3604:"http://你的服务器ip地址:7070/api/v2/selectSheet3604",
     selectSheet3605:"http://你的服务器ip地址:7070/api/v2/selectSheet3605",
     selectSheet4601:"http://你的服务器ip地址:7070/api/v2/selectSheet4601",
     selectSheet4602:"http://你的服务器ip地址:7070/api/v2/selectSheet4602",
     selectSheet4603:"http://你的服务器ip地址:7070/api/v2/selectSheet4603",
     selectSheet4604:"http://你的服务器ip地址:7070/api/v2/selectSheet4604",
     selectSheet4605:"http://你的服务器ip地址:7070/api/v2/selectSheet4605",
//现场监控websocket,
big_top:"websocket地址",
//课室websocket
 classroom_live:"websocket地址",
//3维温度场
  url:"ws://你的服务器ip地址:8083/mqtt",
  username:"你的mqtt用户名",
  password: "你的mqtt密码",
  //课室3d温度场主题
  theme:[`3dscatter`],//[`topic/+`, `topic/+/test`],可以同时订阅多个主题，那个符号是三角符号
  //帐篷3d温度场主题
  theme_tent:[`3dscatterTent`],
   //北主楼20x
   theme_classroom_live_20x:[`beizhulou_20x`],
     //北主楼全部
     theme_beizhulou_all:[`buding_beizhulou`],
   //classroom_videoUrl:"http://zhangdengzhen.top:3013/live/stream.flv",
   //课室，视频流
   classroom_videoUrl:"你的视频流地址",
   //现场视频流
   live_videoUrl:"你的视频流地址",
//后端swagger地址
swagger_url:"你的swagger后端地址"
}   
