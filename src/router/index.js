import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/Login"
  },
  {
    path: '/Login',
    name: 'Login',
    meta:{
      title:"登录"
    },
    component: () => import("../views/IotPlatfrom/Login/login")
  },
 
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   meta:{
  //     title:"匠能科技"
  //   },
  //   component: () => import( '../views/Home/Home.vue'),
  //   children:[
  //     {
  //       path: 'Show',
  //       name: 'Show',
  //       meta:{
  //         title:"匠能科技展示"
  //       },
  //       component: () => import("../views/Home/Show/Show.vue")
  //     },
  //     {
  //       path: 'Jnlabapi',
  //       name: 'Jnlabapi',
  //       meta:{
  //         title:"匠能API"
  //       },
  //       component: () => import("../views/Home/JnlabApi/JnlabApi.vue")
  //     },
  //     {
  //       path: 'LabIntroduce',
  //       name: 'LabIntroduce',
  //       meta:{
  //         title:"实验室介绍"
  //       },
  //       component: () => import("../views/Home/LabIntroduce/LabIntroduce.vue")
  //     },
  //   ]
  // },
  {
    path: '/IotPlatfrom',
    name: 'IotPlatfrom',
    meta:{
      title:"物联网平台"
    },
    redirect:'/IotPlatfrom/Analysis',
    component: () => import( '../views/IotPlatfrom/IotPlatfrom.vue'),
    children:[
      {
        path: 'Analysis',
        name: 'Analysis',
        meta:{
          title:"统计分析"
        },
        component: () => import("../views/IotPlatfrom/Analysis/Analysis.vue")
      },
      {
        path: 'Buding',
        name: 'Buding',
        meta:{
          title:"教学楼"
        },
        component: () => import("../views/IotPlatfrom/Buding.vue")
      },
      
      {
        path: 'computeroom',
        name: 'computeroom',
        meta:{
          title:"机房"
        },
        component: () => import("../views/IotPlatfrom/ComputeRoom/ComputeRoom.vue")
      },
      // {
      //   path: 'Performance',
      //   name: 'Performance',
      //   meta:{
      //     title:"性能监控"
      //   },
      //   component: () => import("../views/IotPlatfrom/Performance/Performance.vue")
      // },
      {
        path: 'tentsensor',
        name: 'tentsensor',
        meta:{
          title:"帐篷传感器"
        },
        component: () => import("../views/IotPlatfrom/Tentsensor.vue")
      },
      // {
      //   path: 'TentMonitor',
      //   name: 'TentMonitor',
      //   meta:{
      //     title:"帐篷监控"
      //   },
      //   component: () => import("../views/IotPlatfrom/TentMonitor.vue")
      // },
      // {
      //   path: 'BigScreen',
      //   name: 'BigScreen',
      //   meta:{
      //     title:"大屏展示"
      //   },
      //   component: () => import("../views/IotPlatfrom/BigScreen/BigScreen.vue")
      // },
      {
        path: 'Classroom',
        name: 'Classroom',
        meta:{
          title:"北主楼二楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom.vue")
      },
      {
        path: 'Classroom3',
        name: 'Classroom3',
        meta:{
          title:"北主楼三楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom3.vue")
      },
      {
        path: 'Classroom4',
        name: 'Classroom4',
        meta:{
          title:"北主楼四楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom4.vue")
      },
      {
        path: 'Classroom5',
        name: 'Classroom5',
        meta:{
          title:"北主楼五楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom5.vue")
      },
      {
        path: 'Classroom6',
        name: 'Classroom6',
        meta:{
          title:"北主楼六楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom6.vue")
      },
      {
        path: 'Classroom7',
        name: 'Classroom7',
        meta:{
          title:"北主楼七楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom7.vue")
      },
      {
        path: 'Classroom8',
        name: 'Classroom8',
        meta:{
          title:"北主楼八楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom8.vue")
      },
      {
        path: 'Classroom9',
        name: 'Classroom9',
        meta:{
          title:"北主楼九楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom9.vue")
      },
      {
        path: 'Classroom10',
        name: 'Classroom10',
        meta:{
          title:"北主楼十楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom10.vue")
      },
      {
        path: 'Classroom11',
        name: 'Classroom11',
        meta:{
          title:"北主楼十一楼"
        },
        component: () => import("../views/IotPlatfrom/Classroom/Classroom11.vue")
      },
      {
        path: 'Live',
        name: 'Live',
        meta:{
          title:"现场情况"
        },
        component: () => import("../views/IotPlatfrom/Live/Live.vue")
      },
      {
        path: 'ClassroomLive',
        name: 'ClassroomLive',
        meta:{
          title:"课室情况"
        },
        component: () => import("../views/IotPlatfrom/ClassroomLive/ClassroomLive.vue")
      },
      // {
      //   path: '3Dscatter',
      //   name: '3Dscatter',
      //   meta:{
      //     title:"3D散点图"
      //   },
      //   component: () => import("../views/IotPlatfrom/3Dscatter/scatter3D.vue")
      // },
      // {
      //   path: 'websocket',
      //   name: 'websocket',
      //   meta:{
      //     title:"websocket传输图片"
      //   },
      //   component: () => import("../views/IotPlatfrom/TentMonitor.vue")
      // },
      {
        path: 'DeviceStatus',
        name: 'DeviceStatus',
        meta:{
          title:"设备状态"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceStatus/DeviceStatus.vue")
      },
      {
        path: 'DeviceWaning',
        name: 'DeviceWaning',
        meta:{
          title:"设备报警"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceWaning/DeviceWaning.vue")
      },
      {
        path: 'DeviceSimulator',
        name: 'DeviceSimulator',
        meta:{
          title:"设备模拟器"
        },
        component: () => import("../views/IotPlatfrom/DeviceManage/DeviceSimulator/DeviceSimulator.vue")
      },
      {
        path: 'RulesInstance',
        name: 'RulesInstance',
        meta:{
          title:"规则实例"
        },
        component: () => import("../views/IotPlatfrom/RuleEngine/RulesInstance.vue")
      },
      {
        path: 'Basiconfig',
        name: 'Basiconfig',
        meta:{
          title:"基本配置"
        },
        component: () => import("../views/IotPlatfrom/Monitor/Basiconfig.vue")
      },
      {
        path: 'VideoDevices',
        name: 'VideoDevices',
        meta:{
          title:"视频设备"
        },
        component: () => import("../views/IotPlatfrom/Monitor/VideoDevices.vue")
      },
      {
        path: 'Splitscreen',
        name: 'Splitscreen',
        meta:{
          title:"分屏展示"
        },
        component: () => import("../views/IotPlatfrom/Monitor/Splitscreen.vue")
      },
  
      {
        path: '/IotPlatfrom/test',
        name: 'test',
        meta:{
          title:"测试"
        },
        component: () => import("../views/test.vue")
      },
 
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/Home'||to.path ==='/Login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/Login');
    } else {
      next();
    }
  }
});

export default router
