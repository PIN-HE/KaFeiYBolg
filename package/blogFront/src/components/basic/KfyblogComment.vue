<template>
    <div class="kfyblog-comment">
        <!-- 置顶评论 -->
        <div v-if="pinnedComment" class="kfyblog-comment-list-pinned w-full h-auto flex flex-col py-1">
            <div class="kfyblog-comment__container flex flex-row">
                <!-- 头像 -->
                <div class="kfyblog-comment__list-item mt-2">
                    <div class="item__avatar w-10 mr-2">
                        <router-link :to="pinnedComment.router">
                            <img :src="pinnedComment.avatar" class="rounded-full">
                        </router-link>
                    </div>
                </div>
                <!-- 评论/名字/时间 -->
                <div class="kfyblog-comment__list-item text-xs flex-1 flex flex-col p-2">
                    <div class="item-name__btn flex flex-row items-center justify-between">
                        <div class="flex flex-row items-center">
                            <span class=" text-stone-400">{{ pinnedComment.username }}</span>
                            <div class="tag ml-2 bg-stone-200 rounded-full" v-if="pinnedComment.isAuthor">
                                <span class="px-2">作者</span>
                            </div>
                        </div>
                        <!-- 举报 -->
                        <div class="text-[16px] fill-stone-400">
                            <span>
                                <tiny-icon-ellipsis />
                            </span>
                        </div>
                    </div>
                    <!-- 评论 -->
                    <div class="item-content py-2 text-[14px]">
                        <span>{{ pinnedComment.content }}</span>
                        <div class="item-content__image justify-end w-30 my-2" v-if="pinnedComment.image">
                            <kfyblog-image :image-url="pinnedComment.image" :hover="false" rounded
                                @click="openLigthBox">
                            </kfyblog-image>
                            <teleport to="#kfyblog-modal-lightbox">
                                <kfyblog-light-box :images="warpImageToArry(pinnedComment.image)" :initial-index="0"
                                    v-if="isShhowLigthBox" @close="isShhowLigthBox = false"></kfyblog-light-box>
                            </teleport>
                        </div>
                    </div>
                    <!-- 置顶 -->
                    <div class="item-pinned bg-pink-400/20 w-fit my-1 rounded-full">
                        <span class="text-red-500 px-2">置顶评论</span>
                    </div>
                    <!-- 时间 -->
                    <div class="item-date my-2">
                        <span>{{ pinnedComment.time }}</span>
                    </div>
                    <!-- 互动 -->
                    <div class="item-intercation flex">
                        <div class="item-intercation__item px-1">
                            <span><i class="far fa-heart fa-fw"></i>{{ pinnedComment.interaction[0]?.likes || "赞"
                                }}</span>
                        </div>
                        <div class="item-intercation__item px-1">
                            <span><i class="far fa-comment fa-fw"></i>{{ pinnedComment.interaction[0]?.replay || "回复"
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 回复 -->
            <div class="item-replay" v-if="pinnedComment?.replies && pinnedComment?.replies?.length > 0">
                <kfyblog-comment-item v-for="(replite, index) in pinnedComment.replies" :key="index"
                    :comment="replite" />
            </div>
        </div>
        <div v-if="ordinaryComment" class="kfyblog-comment-list-ordinary w-full h-auto flex flex-col py-1"
            v-for="(item, index) in ordinaryComment" :key="index">
            <div class="kfyblog-comment__container flex flex-row">
                <!-- 头像 -->
                <div class="kfyblog-comment__list-item mt-2">
                    <div class="item__avatar w-10 mr-2">
                        <router-link :to="item.router">
                            <img :src="item.avatar" class="rounded-full">
                        </router-link>
                    </div>
                </div>
                <!-- 评论/名字/时间 -->
                <div class="kfyblog-comment__list-item text-xs flex-1 flex flex-col p-2">
                    <div class="item-name__btn flex flex-row items-center justify-between">
                        <div class="flex flex-row items-center">
                            <span class=" text-stone-400">{{ item.username }}</span>
                            <div class="tag ml-2 bg-stone-200 rounded-full" v-if="item.isAuthor">
                                <span class="px-2">作者</span>
                            </div>
                        </div>
                        <!-- 举报 -->
                        <div class="text-[16px] fill-stone-400">
                            <span>
                                <tiny-icon-ellipsis />
                            </span>
                        </div>
                    </div>
                    <!-- 评论 -->
                    <div class="item-content py-2 text-[14px]">
                        <span>{{ item.content }}</span>
                        <div class="item-content__image justify-end w-30 my-2" v-if="item.image">
                            <kfyblog-image :image-url="item.image" :hover="false" rounded
                                @click="openLigthBox">
                            </kfyblog-image>
                            <teleport to="#kfyblog-modal-lightbox">
                                <kfyblog-light-box :images="warpImageToArry(item.image)" :initial-index="0"
                                    v-if="isShhowLigthBox" @close="isShhowLigthBox = false"></kfyblog-light-box>
                            </teleport>
                        </div>
                    </div>
                    <!-- 时间 -->
                    <div class="item-date my-2">
                        <span>{{ item.time }}</span>
                    </div>
                    <!-- 互动 -->
                    <div class="item-intercation flex">
                        <div class="item-intercation__item px-1">
                            <span><i class="far fa-heart fa-fw"></i>{{ item.interaction[0]?.likes || "赞" }}</span>
                        </div>
                        <div class="item-intercation__item px-1">
                            <span><i class="far fa-comment fa-fw"></i>{{ item.interaction[0]?.replay || "回复" }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 回复 -->
            <template v-if="Array.isArray(item.replies) && item?.replies?.length > 0" >
                <kfyblog-comment-item :replay="item.replies"></kfyblog-comment-item>
            </template> 
        </div>
    </div>
</template>

<script setup lang="js">
import { computed, watch, Teleport, ref, onMounted, nextTick, defineProps, onUnmounted } from 'vue'
import { IconPopup } from '@opentiny/vue-icon';
import KfyblogCommentItem from './KfyblogCommentItem.vue';
import KfyblogImage from '../control/KfyblogImage.vue';
import KfyblogLightBox from '../control/KfyblogLightBox.vue';
import { useArticleStore } from '../../store/article';
import { useRoute } from 'vue-router';
const route = useRoute();

const articleStore = useArticleStore();
const props = defineProps({
    articleId: {
        type: String,
        default: ''
    }
})

const TinyIconEllipsis = IconPopup()
const isShhowLigthBox = ref(false)
const items = computed(()=> articleStore.commentList)

const warpImageToArry = (imgUrl) => {
    return [
        {
            id: "1",
            imgUrl: imgUrl,
        }
    ]
}

const openLigthBox = () => {
    isShhowLigthBox.value = true
}

// 计算是否为置顶评论
const pinnedComment = computed(() => {
    return items.value.find(item => item.isTopComment)
})
const ordinaryComment = computed(() => {
    return items.value.filter(item => !item.isTopComment)
})

onUnmounted(()=>{
    items.value = [];
    console.log("组件卸载前,数据已清空" + items.value);

})
</script>

<style scoped></style>
