<template>
    <div class="login-container" @keydown="keyLogin();">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
            <div class="login_header">
                <h3 class="title">管理系统登录</h3>
            </div>

            <el-form-item prop="username">
                <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="请输入用户名"
                name="username"
                type="text"
                tabindex="1"
                autocomplete="off"
                />
            </el-form-item>

            <el-form-item prop="password">
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="请输入密码"
                    name="password"
                    tabindex="2"
                    autocomplete="off"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                    @keyup.enter.native="handleLogin"
                />
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;" 
                @click.native.prevent="handleLogin">
                登录
            </el-button>

        </el-form>
    </div>
</template>
<script>
import store from '@/store/index'
import { UserApi }  from '@/api/user'
import router from '@/router/index'
export default {
    name:'Login',
    data () {
        const validateUsername = (rule, value, callback) => {
            if (!value) {
                callback(new Error('Please enter the correct user name'))
            } else {
                callback()
            }
        }
        const validatePassword = (rule, value, callback) => {
            if (value.length < 6) {
                callback(new Error('The password can not be less than 6 digits'))
            } else {
                callback()
            }
        }
        return {
            loginForm: {
                username: 'admin',
                password: '111111'
            },
            loginRules: {
                username: [{ required: true, trigger: 'blur', validator: validateUsername }],
                password: [{ required: true, trigger: 'blur', validator: validatePassword }]
            },
            passwordType: 'password',
            loading:false
        }
    },
    mounted() {
        if (this.loginForm.username === '') {
            this.$refs.username.focus()
        } else if (this.loginForm.password === '') {
            this.$refs.password.focus()
        }
    },
    methods: {
        keyLogin(e){//回车登陆
           if(event.keyCode == 13){
               this.handleLogin();
           }
        },
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    this.loading = true;
                    this.$message({
                        message: '登陆成功！',
                        type: 'success'
                    });
                    let userInfo = {name:'chen',type:'admin',role:'admin',token:12312123};
                    store.dispatch('userInfo', userInfo);
                    localStorage.setItem('userInfo',JSON.stringify(userInfo));
                    localStorage.setItem('sessionId',userInfo.session_id);
                    store.dispatch('permission', userInfo.type).then((res)=>{
                        router.addRoutes(res);
                    })
                    setTimeout(()=>{
                        this.$router.push({
                            path: '/'
                        })
                    },1000)
                    // homeApi.userLogin(this.form).then(res=>{
                    //     this.$Message.destroy()
                    //     if(res.state==0){
                    //         this.$Message.success('登陆成功！');
                    //         let userInfo = res.data;
                    //         store.dispatch('userInfo', userInfo);
                    //         localStorage.setItem('userInfo',JSON.stringify(userInfo));
                    //         localStorage.setItem('sessionId',userInfo.session_id);
                    //         store.dispatch('permission', userInfo.type).then(()=>{
                    //             router.addRoutes(store.state.navList);
                    //         })
                    //         setTimeout(()=>{
                    //             this.$router.push({
                    //                 path: redirect
                    //             })
                    //         },1000)
                    //     }else{
                    //         this.$Message.error(res.message);
                    //     }
                    // })
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/images/login_bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  .login-form{
      padding: 30px;
      width: 400px;
      position: absolute;
      right: 60px;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      background: #fff;
      border-radius: 4px;
      box-sizing: border-box;
      .login_header{
          margin-bottom: 30px;
          font-size: 20px;
          text-align: center;
          .title{
              font-weight: 500;
          }
      }
  }
}
</style>