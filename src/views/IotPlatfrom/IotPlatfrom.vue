<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
       <div class="ant-pro-sider-menu-logo">
          <img src="../../assets/logo.png" style="width:120px" alt="logo"/>
        </div>
       

      <a-menu theme="dark" mode="inline" :default-selected-keys="['17']">

        <a-menu-item  key="17">
          <router-link to="/IotPlatfrom/Buding">
          <a-icon type="home" />
          <span>
           教学楼
            </span>
          </router-link>
        </a-menu-item>

           <a-menu-item  key="1">
          <router-link to="/IotPlatfrom/Analysis">
          <a-icon type="dashboard" />
          <span>
           统计分析
            </span>
          </router-link>
        </a-menu-item>


        <a-menu-item  key="2">
          <router-link to="/IotPlatfrom/ComputeRoom">
          <a-icon type="bank" />
          <span>
            机房
             </span>
          </router-link>
        </a-menu-item>
         
             <!-- <a-menu-item  key="3">
          <router-link to="/IotPlatfrom/Performance">
          <a-icon type="bank" />
          <span>
            性能监控
             </span>
          </router-link>
        </a-menu-item> -->

        <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="robot" />设备管理</span>

             <a-menu-item key="4">
               <router-link to="/IotPlatfrom/DeviceStatus">
               <a-icon type="safety" />
              <span>
                设备状态
                </span>
               </router-link>
            </a-menu-item>

     <a-menu-item key="4_2">
               <router-link to="/IotPlatfrom/DeviceWaning">
               <a-icon type="alert" />
              <span>
                设备报警
                </span>
               </router-link>
            </a-menu-item>

          </a-sub-menu>

         <!-- <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="cloud-server" />设备模拟器</span>
            <a-menu-item key="6">
              <router-link to="/IotPlatfrom/DeviceSimulator">
                <a-icon type="paper-clip" />
              <span>
                设备模拟器
                </span>
                </router-link>
            </a-menu-item>
         </a-sub-menu> -->
   <a-sub-menu key="sub4">
            <span slot="title"><a-icon type="rocket" />规则引擎</span>

             <a-menu-item key="11">
               <router-link to="/IotPlatfrom/RulesInstance">
               规则实例
               </router-link>
            </a-menu-item>

          </a-sub-menu>

       <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="line-chart" />数据可视化</span>

             <!-- <a-menu-item key="7">
               <router-link to="/IotPlatfrom/Tentsensor">
              帐篷传感器
               </router-link>
            </a-menu-item> -->
          <a-menu-item key="7">
               <router-link to="/IotPlatfrom/ClassroomLive">
              课室情况
               </router-link>
            </a-menu-item>
          <a-menu-item key="16">
              <router-link to="/IotPlatfrom/Live">
              现场情况
              </router-link>
            </a-menu-item>

          </a-sub-menu>

       <a-sub-menu key="sub5">
            <span slot="title"><a-icon type="play-square" />视频网关</span>

             <!-- <a-menu-item key="7">
               <router-link to="/IotPlatfrom/Tentsensor">
              帐篷传感器
               </router-link>
            </a-menu-item> -->
          <a-menu-item key="20">
               <router-link to="/IotPlatfrom/Basiconfig">
              基本配置
               </router-link>
            </a-menu-item>
          <a-menu-item key="21">
              <router-link to="/IotPlatfrom/VideoDevices">
               视频设备
              </router-link>
            </a-menu-item>
             <a-menu-item key="22">
              <router-link to="/IotPlatfrom/Splitscreen">
               分屏展示
              </router-link>
            </a-menu-item>
          </a-sub-menu>


          <!-- <a-menu-item  key="13">
          <router-link to="/Home/Show">
          <a-icon type="link" />
          <span>
           返回主菜单
             </span>
          </router-link>
        </a-menu-item> -->

          <!-- <a-menu-item  key="14">
          <router-link to="/IotPlatfrom/Classroom">
          <a-icon type="upload" />
          <span>
           测试
             </span>
          </router-link>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
         <a-avatar class="mylogo" style="backgroundColor:#87d068" icon="user" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '0', background: '#fff', minHeight: '280px' }"
      >
     
       <router-view/>
     
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout{
  height: 100%;
}
.ant-pro-sider-menu-logo{
  overflow: hidden;
}
.mylogo{
  margin-top: 20px;
  margin-right: 20px;
  float: right;
}
</style>