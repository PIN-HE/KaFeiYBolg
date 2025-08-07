<template>
  <div class="tinyform-login" style="width:350px">
    <tiny-form :module="loginFrom" ref="loginFromRef">
      <tiny-form-item label="电子邮箱">
        <tiny-input v-model="loginFrom.email" input-box-type="underline" placeholder="请输入邮箱账号">
        </tiny-input>
      </tiny-form-item>
      <tiny-form-item label="验证码">
        <tiny-input v-model="loginFrom.checkCodeEmail" type="text" input-box-type="underline" placeholder="请输入6位邮箱验证码"
          :maxlength="6" clearable></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button style="width: 100%;" plain @click="sendEmailCode()" 
          :loading="loginFrom.loading">
          {{ loginFrom.checkCodeEmailStatus }}
        </tiny-button>
      </tiny-form-item>
      <tiny-form-item label="密码">
        <tiny-input type="password" v-model="loginFrom.password" input-box-type="underline" placeholder="请输入账户密码"
          show-password></tiny-input>
      </tiny-form-item>
      <!-- 按钮组 -->
      <tiny-form-item>
        <div class="form-link flex-space-around">
          <tiny-checkbox v-model="loginFrom.keep">记住我</tiny-checkbox>
          <tiny-link :underline="false">忘记密码?</tiny-link>
        </div>
        <div class="form-actions flex-center">
          <tiny-button type="info" @click="router.push({'name':'register'})">注册</tiny-button>
          <tiny-button @click="userLoginverify()">登录</tiny-button>
        </div>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script lang="js" setup>

import { onBeforeUnmount, ref } from 'vue'
import { TinyModal } from '@opentiny/vue'
import _service from '../../../../shard/utils/request';
import { useRouter, useRoute } from 'vue-router';
import { initUserState } from '../../store/user';


const route = useRoute();
const router = useRouter();

// 邮箱验证正则
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 表单变量
const loginFrom = ref({
  email: "",
  password: "",
  checkCodeEmail: "",
  checkCodeEmailStatus: "发送验证码",
  loading: false,
  counter: 60,
  keep: false,
})

// 发送邮箱验证码逻辑
function sendEmailCode() {
  // 解构邮箱账号
  const { email } = loginFrom.value;

  // 声明定时器变量
  let countdownInterval = null;

  // 简单邮箱验证
  if (!emailRegex.test(loginFrom.value.email) || !loginFrom.value.email) {
    TinyModal.message({
      message: "请输入正确的邮箱账号!",
      status: "info"
    });
    return;
  }

  // 禁用按钮并进入倒计时
  loginFrom.value.loading = true
  // 显示请求消息，防止请求未成功直接进入倒计时
  loginFrom.value.checkCodeEmailStatus = '正在请求发送验证码'

  // 封装请求接口
  const sendEmailCodeAPI = async () => {
    try {
      let loadingCounter = loginFrom.value.counter
      const response = await _service({
        url: "/user/sendCode",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: { "email": email }
      })

      const { code = nulll, message, status } = response

      if (code === 200) {
        // 请求成功按钮进入倒计时并且显示成功消息
        countdownInterval = setInterval(() => {
          loginFrom.value.checkCodeEmailStatus = `等待${loadingCounter}秒后重新发送验证码`
          loadingCounter--;

          if (loadingCounter <= 0) {
            clearInterval(countdownInterval);
            loginFrom.value.checkCodeEmailStatus = '重新发送'
            loginFrom.value.loading = false
          }
        }, 1000)
        // 显示消息
        TinyModal.message({
          message: message,
          status: status,
        })
      }
    } catch (e) {
      // 按钮取消禁用
      loginFrom.value.loading = false
      // 按钮显示发送失败元素
      loginFrom.value.checkCodeEmailStatus = "请求失败!"
      console.log(e);
    }
  }
  // 调用接口 
  sendEmailCodeAPI()
}

// 登录接口
function userLoginverify() {
  // 封装邮箱验证码 先进行邮箱验证
  // 1.解构邮箱 邮箱验证码 密码
  const { email, checkCodeEmail, password } = loginFrom.value

  if( !checkCodeEmail) {
    TinyModal.message({
      message:"请先发送验证码！再进行登录",
      status:"error"
    })
    return false;
  }

  // 封装请求接口
  const verifyEmailCodeAPI = async () => {
    try {
      const response = await _service({
        url: "/user/verifyCode",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          email: email,
          verCode: checkCodeEmail
        }
      })

      // 解构返回数据
      const { code, message, status } = response

      if (code === 200 && status === "success") {
        TinyModal.message({
          message: message,
          status: "success"
        })
        return true;
      }
    } catch (e) {
      return false;
    }
  }

  // 封装登录请求接口 邮箱验证成功之后进行
  const login = async () => {
    try {
      const loginResp = await _service({
        url: "/user/login",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          email: email,
          password: password
        }
      })
      
      if ( loginResp.code === 200){
        TinyModal.message({
          message:`登录成功🎉欢迎您[${loginResp.data.role}]用户:${loginResp.data.nickName}`,
          status:"success"
        })
      }
      // 解构返回数据
      const {userName, nickName, userPic} = loginResp.data
      const user = initUserState()
      user.loginSuccess(
        {
          "userName":userName,
          "nickName":nickName,
          "userPic":userPic
        }
        );
    } catch (e) {

    }
  }
  // 调用接口
  verifyEmailCodeAPI()
    .then((isVerify)=>{
      if(isVerify){
        login()
      }
    });
}

// 卸载计时器，防止内存泄露
onBeforeUnmount(() => {
  if (loginFrom.value.countdownInterval) {
    clearInterval(loginFrom.value.countdownInterval);
  }
})
</script>

<style scoped>
.flex-space-around {
  display: flex;
  justify-content: space-around;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>