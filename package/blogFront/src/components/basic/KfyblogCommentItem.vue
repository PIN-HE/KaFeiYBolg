<template>
    <div class="kfyblog-comment-replay">
        <div class="replay-container p-2 pl-3 ml-11 text-xs flex flex-col h-auto"
            v-for="(item, index) in visibleReplay">
            <div class="replay__item flex flex-row">
                <!-- 头像 -->
                <div class="replay-avatar w-6 mr-2">
                    <img :src="item.avatar" class="rounded-full">

                </div>
                <!-- 昵称/评论 -->
                <div class="replay-content flex flex-col flex-1">
                    <div class="replay-name__btn text-stone-400 flex flex-row items-center justify-between">
                        <div class="replay-name__author flex flex-row">
                            <span>{{ item.username }}</span>
                            <!-- 作者 -->
                            <div class="tag ml-2 bg-stone-200 rounded-full text-black" v-if="item.isAuthor">
                                <span class="px-2">作者</span>
                            </div>
                        </div>
                        <!-- 举报 -->
                        <div class="btn__report text-[16px] fill-stone-400">
                            <tiny-icon-ellipsis />
                        </div>
                    </div>
                    <div class="replay-text mt-2 text-[14px]">
                        <span>{{ item.content }}</span>
                    </div>
                    <!-- 时间 -->
                    <div class="replay-date my-2">
                        <span>{{ item.time }}</span>
                    </div>
                    <!-- 交互 -->
                    <div class="replay-interaction flex flex-row ">
                        <div class="replay__interaction-item pr-1">
                            <span>
                                <i class="far fa-heart fa-fw" />
                                {{ item.interaction?.[0]?.likes || "赞" }}
                            </span>
                        </div>
                        <div class="replay__interaction-item px-1">
                            <span>
                                <i class="far fa-comment fa-fw" />
                                {{ item.interaction?.[0]?.replay || "回复" }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 加载更多 -->
        <div class="replay__load inline-flex  flex-col  ml-20 p-2 text-sm text-cyan-900 ">
            <div class="load__item" @click="handleLoadMore" v-if="hasMore">
                <span class="cursor-pointer" v-if="!isLoad">展开更多回复</span>
                <div class="flex justify-center w-full text-xl" :class="[isLoad ? 'animate-spin block' : 'hidden']">
                    <tiny-icon-refresh />
                </div>
            </div>
            <div class="load__item" @click="showReplay = 1" v-if="!hasMore && replay.length > 1">
                <span class="cursor-pointer">收起回复</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { IconPopup, IconConmentRefresh } from '@opentiny/vue-icon';
import { computed, defineProps, onMounted, ref } from 'vue'
const TinyIconEllipsis = IconPopup()
const TinyIconRefresh = IconConmentRefresh()

const props = defineProps({
    replay: {
        type: Array,
        default: () => []
    }
})
const showReplay = ref(1)
const isLoad = ref(false)

// 计算当前可见值
const visibleReplay = computed(() => {
    return props.replay.slice(0, showReplay.value)
})

const hasMore = computed(() => {
    console.log(props.replay.length)
    return props.replay.length > showReplay.value
})

const handleLoadMore = () => {
    if (showReplay.value < props.replay.length) {
        isLoad.value = true
        setTimeout(() => {
            showReplay.value++
            isLoad.value = false
        }, 2000)
    }
}


onMounted(() => {
    console.log(props.comment)
    console.log(hasMore.value)
})

</script>
<style scoped>
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
