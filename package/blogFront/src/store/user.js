import { defineStore } from "pinia";
import _service from "../../../shard/utils/request";
import { API_CONFIG } from "../api/api.config";
import { toRefs } from "vue";
import { TinyModal } from "@opentiny/vue";
import { useRouter } from "vue-router";
import { initIdentityRoleState } from "./identity";

const api = API_CONFIG;
const USER_KEY = "blog_user_info";
const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const identity = initIdentityRoleState();

export const initUserState = defineStore("user_info", {
    state: () => {
        return {
            user_name: "",
            user_avatar: "",
            user_nickname: "",
            counter: 60,
            loading: false,
            sendEmailCodeButtonState: "发送验证码"
        }
    },
    actions: {
        showMessage(message, state) {
            TinyModal.message({
                message: message,
                status: state || "info"
            })
        },
        async sendEmaikCode(emailData) {

            let countdownInterval = null;
            if (!emailRegx.test(emailData)) {
                this.showMessage("邮箱格式不正确！", "warning")
                console.log(emailData);
                return false
            }

            this.loading = true;
            this.sendEmailCodeButtonState = "请求验证码……"

            // 发送验证码
            const sendEmailCodeAPI = async () => {
                try {
                    let loadingCounter = this.counter
                    const response = await _service({
                        url: "/user/sendCode",
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        data: {
                            "email": emailData
                        }
                    })
                    // 结构响应数据
                    const { code = null, message, status } = response
                    if (code === 200) {
                        countdownInterval = setInterval(() => {
                            this.sendEmailCodeButtonState = `${loadingCounter}秒后重试`;
                            loadingCounter--;

                            if (loadingCounter <= 0) {
                                clearInterval(countdownInterval)
                                this.sendEmailCodeButtonState = "重新发送",
                                this.loading = false;
                            }
                        }, 1000)
                        this.showMessage(message, status)
                        return true;
                    }
                } catch (error) {
                    console.log(error);
                    this.loading = false;
                    this.sendEmailCodeButtonState = "请求失败";
                    if (countdownInterval) return clearInterval(countdownInterval);
                    return false;
                }
            }
            return await sendEmailCodeAPI();
        },
        async register(userData) {
            const { email, emailCode, nickName, password } = userData;
            console.log(userData);
            if (!emailRegx.test(email)) return this.showMessage("邮箱格式不正确，请重新输入！");
            if (!nickName || nickName.trim().length === 0) return this.showMessage("用户昵称数据不能为空！");
            if (!password) return this.showMessage("密码不能为空！");
            if (password.length < 6) return this.showMessage("密码长度必须大于6位");
            // 校验邮箱验证码是否匹配
            const verifyCode = async () =>{
                try {
                    const response = await _service({
                        url: `/user/${api.BUSINESS.VERIFY_EMAIL_CODE}`,
                        method:"POST",
                        headers:{"Content-Type": "application/json"},
                        data:{
                            "email": email,
                            "verCode": emailCode
                        }
                    }) 
                    const {code, message, status} = response
                    if (code === 200 && status === "success") {
                        this.showMessage(message, status)
                        return true;
                    } else {
                        this.showMessage(message, "error")
                        return false;
                    }
                } catch (error) {
                    console.log(error);
                    return false
                }
            };
            const registerAPI = async () => {
                try {
                    const response = await _service({
                        url: `/user/${api.BUSINESS.USER_REGISTER}`,
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        data: {
                            "email": email,
                            "nickName": nickName,
                            "password": password
                        }
                    });
                    const { code = null, message, data } = response;
                    if (code === 200) {
                        this.showMessage(message, "success")
                        // 存储当前用户的数据
                        this.user_name = data.userName;
                        this.user_avatar = data.userPic;
                        this.user_nickname = data.nickName;
                    }
                    // 准备跳转路由
                } catch (e) {
                    console.log(e);
                    return false;
                }
            }
            return await verifyCode()
                    .then((isVerify)=>{
                       if( isVerify) return registerAPI()
            })
        },
        loginSuccess(userData){
            const identity = initIdentityRoleState();
            const {userName, userPic,nickName } = userData
            this.user_name = userName;
            this.user_avatar = userPic;
            this.user_nickname = nickName
            identity.clearGuestIdentity()
        },
        loginOut(){
            this.$reset;
            console.log("方法调用")
            localStorage.removeItem(USER_KEY)
        }
    },
    persist: {
        enable: true,
        storage: localStorage,
        key: USER_KEY,
        pick: [
            "user_avatar",
            "user_name",
            "user_nickname"
        ]
    }
})