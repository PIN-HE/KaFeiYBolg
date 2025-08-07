<template>
    <div class="flex flex-row items-center">
        <div class="w-30 flex flex-col justify-center items-center">
            <span class="text-xs font-medium"
             :class="!guest.username ? ' text-red-500': 'text-guest-light'"
            >
                {{ guest.username || `解析失败` }}
            </span>
            <span class="bg-guest rounded-full flex items-center">
                <span class="ml-2 mr-2 p-1 py-0.5 text-xs text-guest-font font-medium">
                    <span class="bg-red-500 rounded-full w-2 h-2 inline-block mr-1"></span>访客用户</span>
            </span>
        </div>
        <kfyblog-dropdown>
            <template #image>
                <img src="http://117.72.67.30:30080/public/images/avatars/default.jpg" class="rounded-full">
            </template>
            <template #dropdown>
                <kfyblog-dropdown-item
                router
                to="/auth/login">
                    <span class=" text-red-500">登录</span>
                </kfyblog-dropdown-item>
                <kfyblog-dropdown-item 
                    router
                    to="/auth/register"    
                >
                    <span class=" text-blue-500">注册</span>
                </kfyblog-dropdown-item>
            </template>
        </kfyblog-dropdown>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import kfyblogDropdown from '../dropdown/KfyblogDropdown.vue';
import KfyblogDropdownItem from '../dropdown/KfyblogDropdownItem.vue';
import { initIdentityRoleState } from '../../store/identity';

const guest = ref({
    username:""
})

const identity = initIdentityRoleState()
guest.value.username =  identity.guest_username

</script>