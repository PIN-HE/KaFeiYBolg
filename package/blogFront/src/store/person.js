import axios from 'axios'
import { defineStore } from 'pinia'

// 定义用户信息store
export const usePersonStore = defineStore('person', {
    state: () => {
        return {
            personInfo: null,
        }
    },
    actions: {
        async getPersonInfo(userId){
            await this.axiosGetPersonInfo(userId)
        },
        async axiosGetPersonInfo(userId) {
            try{
                const res = await axios({
                    url: '/api/person',
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    data: {
                        userId: userId
                    }
                })
                if(res.data.code === 200){
                    this.personInfo = res.data.data
                    console.log("获取用户信息成功:", this.personInfo)
                    return true
                }
            }catch(e){
                console.log("获取用户信息失败:" +e)
            }
        },
        clearPersonInfo(){
            this.personInfo = null
            console.log("清除用户信息成功")
        }
    }
})
