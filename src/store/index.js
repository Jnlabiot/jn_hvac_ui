import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    //帐篷传感器数据
    tentsensor:{},
    power:{},
    //三维温度场,课室
    scatter3d:null,
    //帐篷3d温度场
    scatter3dTent:null,
    imgdata1:"",
    imgdata2:"",
    classroomlive_20x:{},
    classroomlive_205:{},
    beizhulou_buding:{},

  },
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user;
      localStorage.setItem('Authorization', user);
    },
    //帐篷传感器
    changetentsensor(state,data){
      state.tentsensor = data
    },
    //电表
    changetentpower(state,data){
      state.power = data
    },
    changescatter3d(state,data){
      state.scatter3d = data
    },
    changescatter3dTent(state,data){
      state.scatter3dTent = data
    },
    changesimgdata1(state,data){
      state.imgdata1 = data
    },
    changesimgdata2(state,data){
      state.imgdata2 = data
    },
    //课室情况mqtt
    //北主楼二楼
    changeclassroomlive_20x(state,data){
      state.classroomlive_20x=data
    },
    //205
    changeclassroomlive_205(state,data){
      state.classroomlive_205=data
    },
    changebeizhulou_buding(state,data){
      state.beizhulou_buding=data
    },
  },
  actions: {
  },
  modules: {
  }
})
