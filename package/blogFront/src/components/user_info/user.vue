<template>
    <div class="flex flex-row items-center">
        <div class="w-24 flex flex-col justify-center items-center">
            <span class=" text-user-light font-medium text-xs">
                {{ userData.nickName }}
            </span>
            <span class="bg-user text-user-font rounded-full">
                <span class="ml-2 mr-2 p-1 py-0.5 text-xs">普通用户</span>
            </span>
        </div>
       <kfyblog-dropdown>
            <template #image>
                <img :src="userData.avatar" class=" rounded-full">
            </template>
            <template #dropdown>
                <kfyblog-dropdown-item
                 router
                 to="/"
                >
                <template #icon>
                    <i :class="['text-black dark:text-white','far fa-user']"></i>
                </template>
                个人中心
                </kfyblog-dropdown-item>
                <kfyblog-dropdown-item 
                 router
                 to="/">
                    <template #icon>
                        <i :class="['text-red-400','fas fa-sign-out-alt']"></i>
                    </template>
                    <span class=" text-red-400">退出登录</span>
                </kfyblog-dropdown-item>
            </template>
       </kfyblog-dropdown>
    </div>
</template>

<script lang="js" setup>
import KfyblogDropdown from '../dropdown/KfyblogDropdown.vue';
import KfyblogDropdownItem from '../dropdown/KfyblogDropdownItem.vue';
import { initUserState } from '../../store/user';
import { ref } from 'vue';

const user = initUserState()

const userData = ref({
    nickName: user.user_nickname,
    avatar: user.user_avatar
})

</script>