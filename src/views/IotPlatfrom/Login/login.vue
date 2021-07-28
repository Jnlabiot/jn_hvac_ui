<template>
  <div class="login">
      <div class="logo"><img src="../../../assets/logo.png" alt="" class="imglogo"></div>
        <div class="login-box">
        <h2>超低能耗空调系统</h2>
        <form>
            <div class="user-box">
            <input type="text" v-model="loginForm.username" placeholder='' >
            <label>用户名</label>
            </div>
            <div class="user-box">
            <input type="password" v-model="loginForm.password" placeholder="">
            <label>密码</label>
            </div>
            <a href="#" @click="login">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            进入系统
            </a>
        </form>
        </div>
  </div>
</template>
<style src='./login.css' scoped>

</style>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import '@/utils/css/login.css'
import axios from 'axios'
export default {
  name: 'login',
  data(){
      return {
          mypath:"",
          loginForm: {
              password:'',
              username:'',
          },
          userToken:""
      }
  },
  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0;padding:0;font-family: sans-serif;background: linear-gradient(#141e30, #243b55);')
    },
  beforeDestroy() {
        document.body.removeAttribute('style')
    },

  methods:{
       login: function(){
            let _this = this;
            _this.mypath=window.g.login
        if (this.loginForm.username === '' || this.loginForm.password === '') {
            alert('账号或密码不能为空');
        } 
        else {
         // console.log(_this.loginForm)
            axios({
            method: 'post',
            url: _this.mypath,
            data: _this.loginForm
            })
            .then(res => {
           // console.log(res.data);
            _this.userToken = "Bearer "+res.data.data.toString();
            // 将用户token保存到vuex中
           // console.log(_this.userToken)
            _this.$store.commit('changeLogin',_this.userToken);
            _this.$router.push('/IotPlatfrom/Buding');
            _this.$message.success("身份验证成功，欢迎使用匠能科技面向多模态空调系统")
            })
            .catch(error => {
            _this.$message.error("身份验证失败请重新输入账号密码");
            console.log(error)
            });
        }
        
    }
  }
 
}
</script>
