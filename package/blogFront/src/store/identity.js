import { defineStore } from "pinia";
import _service from "../../../shard/utils/request";
import { API_CONFIG } from "../api/api.config";
import { TinyModal } from "@opentiny/vue";

const api = API_CONFIG;
const GUEST_KEY = "blog_guest_uuid";
const USER_KEY = "blog_user_info"


export const initIdentityRoleState = defineStore("guest_role", {
    state: () => {
        return {
            guest_uuid: localStorage.getItem(GUEST_KEY) || "",
            guest_username: "",
            isLoginUserToken: JSON.parse(localStorage.getItem(USER_KEY) || null),
            role: "",
            tip_login_msg:"",
        }
    },
    actions: {
        async verityIdentity() {
            // 用户模式
            if (this.isLoginUserToken) {
                // 清除访客状态
                this.clearGuestIdentity();
                return true;
            }

            // 访客模式
            if (!this.guest_uuid) {
                await this.createGuestRole()
            }
            return false;
        },
        async createGuestRole() {
            try {
                const response = await _service({
                    url: `/home/${api.BUSINESS.GUEST}`,
                    method: "GET"
                })
                TinyModal.message({
                    message: "正在为您生成新的访客身份",
                    status: "info"
                })
                console.log(response.data);
                const { code = null, message, data } = response;
                if (code === 200) {
                    TinyModal.message({
                        message: `${message}:[${data.guestUsername}]`,
                        status: "success"
                    })
                } else {
                    TinyModal.message({
                        message: "生成访客身份失败,请稍候重试!",
                        status: 'error'
                    })
                }
                this.guest_username = data.guestUsername;
                this.role = data.role;
                this.tip_login_msg = data.guestMsg;
                return this.guest_uuid = data.guestUUID;

            } catch (error) {
                console.log("Failed to generate UUID successfully.");
            }
        },
        loginSuccess(userDara){
            this.isLoginUserToken = userDara,
            localStorage.setItem(USER_KEY,JSON.stringify(userDara))
            this.clearGuestIdentity()
        },
        clearGuestIdentity(){
            this.guest_uuid = "",
            localStorage.removeItem(GUEST_KEY)
        },
        clear() {
            this.$reset();
            const storage = this.persist?.storage || localStorage;
            const key = this.persist?.key || this.$id;
            storage.removeItem(key);
        }
    },
    getters: {
        getGuestUUID: (state) => state.guest_uuid,
        isGuest: (state) => !!state.guest_uuid
    },
    persist: {
        enable:true,
        storage: localStorage,
        key: GUEST_KEY,
        pick:[
            "guest_username",
            "guest_uuid",
            "role",
            'tip_login_msg',
        ]
    }
})