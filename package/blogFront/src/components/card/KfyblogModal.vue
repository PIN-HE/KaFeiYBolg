<!-- 
    作者：kafeiy 
    创建时间：2025-07-23
    标签：vue3 组合式API 模态框 TailWindCSSV4.0
    描述：模态框组件，用于展示图文/视频信息。
    组件参数：
    1. articleId: 文章ID，用于获取文章详情。
-->
<template>
    <div class="fixed top-0 left-0 w-full h-full bg-gray-300/50 z-20">
        <!-- 主Modal框 -->
        <div class="w-full h-full flex items-center justify-center relative">
            <!-- 关闭按钮 -->
            <div class="absolute z-10 top-8 left-10 bg-stone-600/30 backdrop-blur-lg rounded-full cursor-pointer"
                @click.stop="[handleClose()]" @mouseenter="isTips = true" @mouseleave="isTips = false">
                <span class="text-2xl flex justify-center p-2 fill-white relative">
                    <tiny-icon-close />
                </span>
                <!-- 悬浮提示 -->
                <div v-show="isTips" class="absolute left-1/2 top-2/3 w-20 text-center p-1 -translate-x-1/2 translate-y-1/2
                 bg-white rounded-xl cursor-auto select-none" @click.stop>
                    <span class="text-xs text-stone-400">
                        关闭 Esc
                    </span>
                </div>
            </div>
            <!-- 子Modal框 -->
            <div class="kfyblog-modal-children flex rounded-2xl shadow-md overflow-hidden"
                ref="modalChildren" :style="modalChildrenStyle">
                <!-- 图文/视频信息框 -->
                <div class="w-3/5 h-full bg-stone-300/40 shrink-0">
                    <kfyblog-carousel :autoplay="false" :items="images" />
                </div>
                <!-- 信息框 -->
                <div class="w-2/5 grow flex flex-col border border-b-0 border-r-0 border-t-0 border-l-stone-300">
                    <!-- 作者头像框 -->
                    <div class="kfyblog-author-wrapper flex justify-between p-4 border border-t-0 border-l-0 border-r-0 transition-all duration-300
                    ease-in-out" :class="[isScroll ? 'border-b-stone-300' : 'border-b-0 border-b-stone-300']">
                        <div class="inline-flex items-center gap-3">
                            <router-link :to="selfItem.router">
                                <img :src="selfItem.authorAvatar"
                                    class="w-10 h-10 rounded-full">
                            </router-link>
                            <span class="">{{ selfItem.authorName }}</span>
                        </div>
                        <!-- 关注按钮 -->
                        <div class=" bg-pink-400 text-white px-7 py-2 cursor-pointer rounded-full">
                            <span class="select-none">关注</span>
                        </div>
                    </div>
                    <div class="kfyblog-article-node px-4 pb-4 flex-1 overflow-y-auto " @scroll="handleScroll">
                        <!-- 标题区 -->
                        <div class="kfyblog-title mb-2">
                            <span class="font-black">
                                {{ selfItem.title }}
                            </span>
                        </div>
                        <!-- 正文 -->
                        <div class="kfyblog-content">
                            <span class="whitespace-pre-wrap">
                                {{ selfItem.content }}
                            </span>
                        </div>
                        <!-- 标签区 -->
                        <div class=" text-sky-900 pb-2">
                            <span v-for="item in tags" :key="item.id" class="px-0.5">
                                <router-link :to="'/tag/' + item.id">{{ item.name }}</router-link>
                            </span>
                        </div>
                        <!-- 时间/位置 -->
                        <div class="text-sm  text-stone-400 py-3 flex justify-between">
                            <span>刚刚 江苏</span>
                            <div class="kfyblog-note-dropwdown">
                            </div>
                        </div>
                        <div class="kfyblog-placeholder border border-l-0 border-r-0 border-b-0 border-t-stone-300">
                        </div>
                        <!-- 评论区 -->
                        <div class="kfyblog-comment flex-1 pt-4 h-auto w-full">
                            <kfyblog-comment />
                            <!-- 无评论显示 -->
                            <div class="kfyblog-comment-empty text-xs" v-show="commentData.length === 0">
                                <div class="empty__container flex flex-col justify-center items-center">
                                    <img src="http://117.72.67.30:30080/public/images/official/202508062148.svg"/>
                                    <span class="mt-3">当前无评论呢,快来占据顶楼</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 交互区 -->
                    <div class="kfyblog-interaction flex flex-row items-center justify-center h-18 border 
                    border-b-0 border-l-0 border-r-0 border-t-stone-300 px-4">
                        <!-- 发布评论/点赞/收藏 -->
                        <div class="kfyblog-publish-comment flex flex-col w-full">
                            <div class="kftblog-pushlish-item flex flex-row items-center justify-around">
                                <!-- 评论框 -->
                                <div class="w-35 h-9  bg-gray-200 rounded-full flex fle-row items-center">
                                    <!-- 未登录显示的输入框 -->
                                    <div class="px-3">
                                        <span ref="placeholder" data-placeholder="登录后发表内容"
                                            class="text-sm select-none text-gray-400"></span>
                                    </div>
                                </div>
                                <!-- 点赞/收藏按钮 -->
                                <div class=" text-stone-500 flex-1 text-center">
                                    <div class="flex flex-row">
                                        <span class="flex items-center justify-center px-2">
                                            <i class="far fa-heart fa-fw text-xl" />
                                            {{ selfItem.interaction_metrics?.[0]?.likes }}
                                        </span>
                                        <span class="flex items-center justify-center px-2">
                                            <i class="far fa-star fa-fw text-xl"></i>
                                            {{ selfItem.interaction_metrics?.[0]?.collections }}
                                        </span>
                                        <span class="flex items-center justify-center px-2">
                                            <i class="far fa-comment fa-fw text-xl"></i>
                                            1
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="kfyblog-pushlish-item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, defineEmits, onMounted, onUnmounted, watch, watchEffect, computed, reactive, nextTick } from 'vue';
import { useArticleStore } from '../../store/article';
import KfyblogComment from '../basic/KfyblogComment.vue';
import { IconClose } from "@opentiny/vue-icon"
import { useRouter, useRoute } from 'vue-router';
import KfyblogCarousel from './KfyblogCarousel.vue';

const router = useRouter()
const route = useRoute()
const TinyIconClose = IconClose()
const articleStore = useArticleStore();
const initArticle = reactive({});
const commentData = computed(()=>{
    return articleStore?.commentList || []
})


const props = defineProps({
    articleId: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['closeModal']);
watchEffect(() => {
    if (articleStore.articleDetail) {
        initArticle.value = articleStore.articleDetail
    }
})

const images = computed(() => {
    return articleStore.articleDetail?.images
});
// 占位标签
const tags = ref([]);
// 初始化悬浮状态
const isTips = ref(false)
const modalChildren = ref(null)
const modalChildrenStyle = ref([])
// 保存动画位置
const initailPosition = ref()
// 绑定评论框
const placeholder = ref(null)
const isScroll = ref(false)
// 除去图片参数
const selfItem = computed(() => {
    if (!initArticle.value) return {}
    const { images, ...rest } = initArticle.value
    return rest
})

let scrollTimeOut = null;

const escKeyRouterBack = (e) => {
    if (e.key === "Escape") {
        handleClose();
        articleStore.clearArticleDetail();
    }
}
// 监听滚动
const handleScroll = (e) => {
    cancelAnimationFrame(scrollTimeOut)
    scrollTimeOut = requestAnimationFrame(() => {
        isScroll.value = e.target.scrollTop > 0
    })
}
const updateModalChildrenStyle = () => {
    // 接收位置状态
    const encodeURLPosition = route.query.position
    if (!encodeURLPosition) return
    try {
        // 解密位置
        const decodePosition = decodeURIComponent(atob(encodeURLPosition))
        const position = JSON.parse(decodePosition)
        // 结构数据
        const { y, x, width, height } = position
        initailPosition.value = position
        // 计算位置
        modalChildrenStyle.value = {
            position: 'fixed',
            top: `${y}px`,
            left: `${x}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: 'white',
            opacity: 0,
        };
        modalChildren.value?.offsetWidth
        // 下一帧执行展开动画，确保初始样式生效
        requestAnimationFrame(() => {
            modalChildrenStyle.value = {
                ...modalChildrenStyle.value,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '900px',
                maxWidth:"1000px",
                height: '900px',
                opacity: '1',
                transition: 'all 500ms ease-in-out',
                resize: 'none'
            };
        });
    } catch (error) {

    }
}

const handleClose = () => {
    articleStore.clearArticleDetail();

    if (!initailPosition) {
        emit('closeModal')
        router.back()
        return
    }

    const { x, y, width, height } = initailPosition.value
    modalChildrenStyle.value = {
        ...modalChildrenStyle.value,
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        transform: 'none',
        opacity: 0,
    }

    setTimeout(() => {
        emit('closeModal')
        router.back()
    }, 500)
}



onMounted(() => {
    // 监听ESC键关闭模态框
    console.log(selfItem.value)
    window.addEventListener("keydown", escKeyRouterBack);
    commentData.value = []
    console.log(modalChildren);
    nextTick(() => {
        updateModalChildrenStyle();
        const divEl = placeholder.value
        if (divEl) {
            const placeholderText = divEl.dataset.placeholder
            if (!divEl.textContent.trim()) {
                divEl.textContent = placeholderText;
            }
        }
    })
})

onUnmounted(() => {
    // 移除监听ESC
    window.removeEventListener("keydown", escKeyRouterBack);
})

watch(
    () => route.query.position,
    (newPosition) => {
        if (newPosition) {
            updateModalChildrenStyle()
        }
    }
)

</script>

<style scoped>
.kfyblog-article-node {
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>