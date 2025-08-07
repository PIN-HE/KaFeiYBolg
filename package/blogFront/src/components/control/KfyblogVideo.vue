<!-- 
    作者：kafeiy 
    创建时间：2025-07-20
    标签：vue3 组合式API 视频播放 TailWindCSSV4.0
    描述：视频播放组件，用于展示视频播放效果。
    组件参数：
    1. videoUrl: 视频URL，用于获取视频资源。
-->
<template>
    <div class="kfyblog-video-control relative cursor-pointer" >
            <video ref="video">
                <source :src="props.videoUrl" />
            </video>
            <div class="kfyblog-video-control__menu">
                <!-- 暂停/续播 -->
                <div  class=" absolute top-5 right-5 bg-stone-500/30 w-8 h-8 flex items-center 
                    justify-center rounded-full backdrop-blur-xl">
                    <span class=" text-white text-xs">
                        <i class="fas fa-play fa-fw"></i>
                    </span>
                </div>
            </div>
            <!-- 倍速播放 -->
    </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue';
const props = defineProps({
    videoUrl:{
        type: String,
        default: ''
    }
})
</script>

<style scoped></style>