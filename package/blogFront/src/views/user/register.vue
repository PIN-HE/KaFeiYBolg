<template>
  <div class="flex w-80 flex-col">
    <div class=" m-4 ml-0">
      <span class=" text-blue-400 cursor-pointer" @click="router.back()"
      @mouseenter="isHoverAnimation = true"
      @mouseleave="isHoverAnimation = false"
      >
        <i class="fas fa-angle-left inline-block"
        :class="{'animate-shake': isHoverAnimation}"
        ></i>&nbsp;BACK 返回
      </span>
    </div>
    <div>
      <tiny-form>
        <tiny-form-item label="电子邮箱">
          <tiny-input v-model="registerFormData.email" input-box-type="underline"
          placeholder="请输入需要注册的邮箱账号"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="验证码">
          <div class="flex flex-row items-center">
            <tiny-input class="pr-2" v-model="registerFormData.emailCode"
            input-box-type="underline" placeholder="请输入验证码"
            clearable
            ></tiny-input>
            <tiny-button type="primary" :loading="user.loading" 
             @click="requestEmailCode(registerFormData.email)"
            >
              {{ user.sendEmailCodeButtonState }}
            </tiny-button>
          </div>
        </tiny-form-item>
        <tiny-form-item label="用户昵称">
          <tiny-input v-model="registerFormData.nickName" input-box-type="underline"
          placeholder="请输入需要注册的用户昵称"
          ></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="密码">
          <tiny-input v-model="registerFormData.password" input-box-type="underline"
          placeholder="请输入大于6位的注册密码" type="password" clearable 
          ></tiny-input>
        </tiny-form-item>
      </tiny-form>
      <!-- 操作区 -->
      <div class="flex flex-row justify-center items-center">
        <tiny-button type="info" @click="requestRegister(registerFormData)" class="w-full">注册</tiny-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import _service from '../../../../shard/utils/request';
import { TinyModal } from '@opentiny/vue';
import { initUserState } from '../../store/user';


const route = useRoute()
const router = useRouter()
const user = initUserState()

const isHoverAnimation = ref(false)

const registerFormData = ref({
  email:"",
  nickName:"",
  password:"",
  emailCode:"",
})

const requestEmailCode = (data)=>{
  console.log(data);
  user.sendEmaikCode(data)
}

const requestRegister = (regiserData) =>{
  console.log(regiserData);
  user.register(regiserData);
}

function showError(message){
  TinyModal.message({
    message:message,
    status: 'info'
  })
}
</script>


<style scoped>
.animate-shake{
  animation: moveTagI 1s ease-in infinite;
}

@keyframes moveTagI{
  0%,100%{
    transform : translateX(-10px);
  }
  50%{
    transform: translateX(0px);
  }
}
</style>