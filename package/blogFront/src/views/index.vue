<template>
    <tiny-container pattern="default" :aside-width="asideWidth">
        <template #header>
            <kfyblog-menu-header />
        </template>
        <template #aside>
            <div class="kfyblog-aside font-harmonyos">
                <kfyblog-aside-actions />
            </div>
        </template>
        <div class="kfyblog-main font-harmonyos overflow-y-auto relative" @scroll="handleScroll">

            <kfy-tips>
                <template #tips>
                    [❗️提示:演示系统]UGC功能已全部关闭,仅展示系统功能。
                </template>
            </kfy-tips>
            <router-view v-slot="{ Component }">
                <component :is="Component" />
            </router-view>
            <!-- 返回顶部 -->
            <transition name="back-top" v-show="showBackTop">
                <div class="kfyblog-back-top fixed right-20 bottom-20 "
                    @mouseenter.stop="showBackTopTooltip = true"
                    @mouseleave.stop="showBackTopTooltip = false" @click.stop="toScrollTop">
                    <div class="back-top__container w-10 h-10 bg-white border border-gray-300 flex items-center justify-center rounded-full relative
                cursor-pointer">
                        <!-- 图标  -->
                        <div class="container__icon text-xl flex justify-center">
                            <tiny-back-top />
                        </div>
                        <!-- tooltip -->
                        <div class="container__tooltip absolute -left-1/2 -translate-x-4/5 w-16 text-xs bg-white py-2 px-1 rounded-md
                    border border-gray-300/70  shadow-xs" v-show="showBackTopTooltip">
                            <span>回到顶部</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </tiny-container>
</template>

<script setup>
import KfyTips from '../components/basic/KfyTips.vue'
import KfyblogMenuHeader from '../components/layout/KfyblogMenuHeader.vue';
import KfyblogAsideActions from '../components/layout/KfyblogAsideActions.vue';
import { IconArrowUp } from '@opentiny/vue-icon';
import { onMounted, onUnmounted, ref } from 'vue';

const TinyBackTop = IconArrowUp()
const asideWidth = ref(280);
const showBackTop = ref(false);
const showBackTopTooltip = ref(false);
const scrollContainer = ref(null);


onMounted(() => {
    scrollContainer.value = document.querySelector('.tiny-container__main')
    if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', handleScroll)
    }
})
const handleScroll = () => {
    const scrollTop = scrollContainer.value.scrollTop;
    showBackTop.value = scrollTop > 200
}
const toScrollTop = () => {
    scrollContainer.value.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
onUnmounted(() => {
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('scroll', handleScroll)
    }
})


</script>

<style scoped>
.tiny-container :deep(.tiny-container__header) {
    background-color: rgba(255, 255, 255, .7);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);

}

.tiny-container :deep(.tiny-container__header::before) {
    display: none;
}

.back-top-enter-from,
.back-top-leave-to {
    opacity: 0;
}
.back-top-enter-active,
.back-top-leave-active {
    transition: all .3s ease-in-out;
}
</style>