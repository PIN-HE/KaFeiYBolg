<!-- 
    作者：kafeiy 
    创建时间：2025-07-24
    标签：vue3 组合式API 侧边栏操作 TailWindCSSV4.0
    描述：侧边栏操作组件，用于展示操作项。
 -->
<template>
    <div class=" px-2 mt-4 flex flex-col h-[850px]">
        <div class="kfyblog-aside flex-1 overflow-y-auto border border-t-0 border-l-0 border-r-0" @scroll="handleScroll"
            :class="[isScorll ? 'border-b-1 border-b-stone-300' : 'border-b-0']">
            <div class="kfyblog-aside__actions h-[calc(100vh-68px-72px)]">
                <router-link :to="{name: 'explore', query:{channel_id:'announcement'}}" 
                 :class="{'active': $route.query.channel_id}"
                exact>
                    <div class=" mt-2 text-xl text-stone-700 w-full h-12 flex flex-row items-center
             hover:bg-stone-200/65 py-2 rounded-full transition-all
              duration-200 ease-in hover:text-black
            ">
                        <span class=" px-4">
                            <i class="fas fa-home fa-fw" />
                        </span>
                        <span>发现</span>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class=" mt-2 text-xl text-stone-700 w-full h-12 flex flex-row items-center
              bg-white hover:bg-stone-200/65 py-2 rounded-full transition-all
              duration-200 ease-in hover:text-black
               active:bg-stone-200 active:text-black
            ">
                        <span class="px-4">
                            <i class="far fa-plus-square fa-fw" />
                        </span>
                        <span>发布</span>
                    </div>
                </router-link>
                <router-link to="/">
                    <div class=" mt-2 text-xl text-stone-700 w-full h-12 flex flex-row items-center
              bg-white hover:bg-stone-200/65 py-2 rounded-full transition-all
              duration-200 ease-in hover:text-black
               active:bg-stone-200 active:text-black
            ">
                        <span class="px-4">
                            <i class="far fa-bell fa-fw" />
                        </span>
                        <span>通知</span>
                    </div>
                </router-link>
                <!-- 登录提示 -->
                <div class="my-2 w-full h-auto bg-pink-400 text-white text-center py-3 rounded-full 
                 cursor-pointer select-none" @click="$router.push({name:'login'})">

                    <span>登录</span>
                </div>
                <div class="actions__log-tip my-2 w-full text-sm  h-auto bg-white border border-gray-300 
                 rounded-xl text-gray-400 cursor-pointer select-none
                ">
                    <div class="tip__container p-4 flex flex-col gap-2">
                        <div class="text-black">马上登录即可</div>
                        <div class="tips-item flex gap-2 items-center">
                            <i class="far fa-thumbs-up fa-fw" />
                            <span>刷到更懂你的优质内容</span>
                        </div>
                        <div class="tips-item flex gap-2 items-center">
                            <i class="fas fa-seedling fa-fw" />
                            <span>搜索最新种草、拔草信息</span>
                        </div>
                        <div class="tips-item flex gap-2 items-center">
                            <i class="far fa-star fa-fw" />
                            <span>查看收藏、点赞的笔记</span>
                        </div>
                        <div class="tips-item flex gap-2 items-center">
                            <i class="far fa-comment fa-fw" />
                            <span>与他人更好地互动、交流</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kfyblog-aside__app">
                <kfyblog-aside-footer />
            </div>
        </div>
        <div class=" relative  w-full px-2 -left-2">
            <div class=" mt-2 text-xl text-stone-700  h-12 flex flex-row items-center
              bg-white hover:bg-stone-200/65 py-2 rounded-full transition-all
              duration-200 ease-in hover:text-black select-none relative
               active:bg-stone-200 active:text-black cursor-pointer
             " @click="listButtonClick()">
                <span class="px-4 ">
                    <i class="fas fa-bars fa-fw transition-transform duration-300 ease-initial"
                        :style="{ transform: listButton ? 'rotate(-90deg)' : '' }" />
                </span>
                <span>更多</span>
            </div>
            <Transition name="fade">
                <div class="absolute -top-20 w-full h-auto rounded-xl px-2 shadow-lg bg-white
                    border border-gray-100 overflow-hidden left-0" v-show="isShow">
                    <div class="flex flex-col w-full">
                        <div class="pb-1">
                            <span class="text-xs p-2 text-gray-400">设置</span>
                            <div class="pt-2 pb-1 hover:bg-gray-200 rounded-xl cursor-pointer" @click="loginOut()">
                                <span class="p-2">
                                    退出登录
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref } from 'vue';
import { initUserState } from '../../store/user';
import KfyblogAsideFooter from './KfyblogAsideFooter.vue';
import { TinyModal } from '@opentiny/vue';
import router from '../../router';

const listButton = ref(false);
const isScorll = ref(false);
let scrollTimer = null;
const isShow = ref(false)
const listButtonClick = () => {
    listButton.value = !listButton.value
    isShow.value = !isShow.value
};

const handleScroll = (e) => {
    cancelAnimationFrame(scrollTimer)
    scrollTimer = requestAnimationFrame(() => {
        isScorll.value = e.target.scrollTop
    })
}

const loginOut = () => {
    const user = initUserState()
    TinyModal.message({
        message: "即将退出登录,请稍后~",
        status: "info"
    })
    setTimeout(() => {
        user.loginOut()
    }, 1000)
}


</script>

<style scoped>
.active div {
    background-color: rgba(229, 231, 235, .5);
    color: black;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

.kfyblog-aside {
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>