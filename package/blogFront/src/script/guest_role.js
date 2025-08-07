import { TinyModal } from "@opentiny/vue";
import _service from "../../../shard/utils/request";
import { API_CONFIG } from "../api/api.config";
import { initGuestRoleState } from "../store/user_info";

const api = API_CONFIG
export async function initGuestRole(){
    const guset = initGuestRoleState()
    const existingGuest = guset.getGuestUUID();
    if(!existingGuest){
       try {
        const response = await _service({
            url:`/home/${api.BUSINESS.GUEST}`,
            method:"GET",
        })
        console.log(response.data);
        TinyModal.message({
            message:"正在为您生成访客身份",
            status:"info"
        })
        const {code,message,data} = response.data 
        if(code == 200){
            TinyModal.message({
                message:`${message}:[${data.username}]`
            })
        }
        
       } catch (error) {
        
       }
    }
}