<script setup lang="js">
import { onMounted, ref, watch, nextTick, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import kfyblogwaterfall from '@/components/kfyblogwaterfall.vue';
import KfyblogTag from '@/components/basic/KfyblogTag.vue';
import { IconLock } from '@opentiny/vue-icon'
import KfyblogModal from '@/components/card/KfyblogModal.vue';
import { useArticleStore } from '@/store/article';
import { usePersonStore } from '@/store/person';

const route = useRoute();
const articleStore = useArticleStore();
const personStore = usePersonStore()
const TinyIconLock = IconLock()
const isLock = computed(() => personInfo.value?.[0]?.isLock)
const collectRef = ref(null)
const noteWidth = ref(null)
const activeTab = ref('')
const tag = ref(route.query.resource || "note");
const showHiddenTag = ref(false)
const articleList = ref([]);
// 是否展示模态框
const showModal = ref(false)
const personInfo = ref({})
// 标签
const tags = ref([])
// 交互
const interaction = ref([])
// 最大显示2个标签
const displayTags = computed(() => {
    const maxTag = 2
    if (tags.value?.length <= maxTag) {
        return {
            show: tags.value,
            hidden: []
        }
    }
    return {
        show: tags.value?.slice(0, maxTag),
        hidden: tags.value?.slice(maxTag)
    }

})

const updateNoteWidth = async () => {
    await nextTick()
    noteWidth.value = collectRef.value.getBoundingClientRect().width
}
watch(
    () => route.query.resource,
    (newVal) => {
        tag.value = newVal
    }
)
// 监听isLock变化
watch(isLock, updateNoteWidth)
// 监听路由变化改变滑入滑出样式
watch(
    () => route.query.resource,
    (newVal, oldVal) => {
        if (newVal !== oldVal) {
            if (newVal === 'collect') {
                activeTab.value = 'side-left'
            } else {
                activeTab.value = 'side-right'
            }
            setTimeout(() => {
                activeTab.value = ''
            }, 300)

        }
    }
)


// 处理数字显示
const formatNumber = (num) => {
    if (num >= 10000) {
        return (num / 10000).toFixed(2) + 'W'
    } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + 'K'
    } else {
        return num
    }
}

onMounted(() => {
    console.log("方法调用")
    console.log(route.params.id)
    console.log(articleStore.userArticleList);
    nextTick(async () => {
        await articleStore.getUserArticleList(route.params.id)
        articleList.value = articleStore.userArticleList;
        updateNoteWidth();
        await personStore.getPersonInfo(route.params.id)
        personInfo.value = personStore.personInfo
        tags.value = personInfo.value?.[0]?.tag
        interaction.value = personInfo.value?.[0]?.interaction
        console.log(personInfo.value)
    })
    console.log(tags.value);


})
onUnmounted(() => {
    personStore.clearPersonInfo()
    articleStore.clearArticleDetail()
})
</script>

<template>
    <div class="kfyblog-person w-full h-full">
        <div class="kfyblog-person__contrainer">
            <div class="container__header flex justify-center items-star py-10">
                <!-- avatar -->
                <div class="header-avtar__wrapper w-40 h-40">
                    <img :src="personInfo[0]?.avatar" class="rounded-full border border-gray-300/40" />

                </div>
                <!-- userinfo -->
                <div class="header-userinfo__wrapper ml-20 flex flex-col gap-1">
                    <div class="userinfo__name text-2xl font-bold flex items-center gap-1">
                        <span>{{ personInfo?.[0]?.username }}</span>
                        <!-- v -->
                        <img src="http://117.72.67.30:30080/public/images/official/20250718-V.png" class="w-5 h-5"
                            v-if="personInfo?.[0]?.isOfficial" />
                    </div>
                    <!-- uuid -->
                    <div class="userinfo__uuid text-xs text-gray-400">
                        <span class="pr-2">UUID:{{ personInfo?.[0]?.userId }}</span>
                        <span class="before:content-['|'] before:pr-2">IP属地: {{ personInfo?.[0]?.ip }}</span>
                    </div>
                    <!-- userbrief -->
                    <div class="header-userbrief__wrapper mt-2">
                        <div class="userbrief__title text-sm font-bold">
                            <span class=" whitespace-pre">
                                {{ personInfo?.[0]?.brief || "该用户暂无简介喔~" }}
                            </span>
                        </div>
                    </div>
                    <!-- authtag -->
                    <div class="header-authtag__wrapper mt-2">
                        <div class="authtag__title text-xs flex">
                            <template v-for="(item, idx) in displayTags.show" :key="idx">
                                <kfyblog-tag :label="item.name" :type="item.type" />
                            </template>
                            <!-- 超出显示 -->
                            <template v-if="displayTags.hidden.length > 0">
                                <div class="hidden_tag relative">
                                    <kfyblog-tag :label="displayTags.hidden.length" hover
                                        @mouseEnter="showHiddenTag = true" @mouseLeave="showHiddenTag = false" />
                                    <!-- 隐藏标签 -->
                                    <div class="hidden_tag__list absolute top-1/2 -translate-y-1/2 w-[180px] h-auto
                                        -left-1/2 translate-x-1/3 p-2 shadow-md border border-gray-300/40 rounded-xl bg-white"
                                        v-show="showHiddenTag">
                                        <div class="hidden_tag__item flex flex-col w-full gap-2">
                                            <template v-for="(item, idx) in displayTags.hidden" :key="idx">
                                                <kfyblog-tag :label="item.name" :type="item.type" />
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <!-- 关注/粉丝/收藏 -->
                    <div class="header-follow__wrapper mt-4">
                        <div class="follow__title flex">
                            <div class="interact__item mr-6">
                                <span class="mr-1">{{ formatNumber(interaction?.[0]?.follow) }}</span>
                                <span>关注</span>
                            </div>
                            <div class="interact__item mr-6">
                                <span class="mr-1">{{ formatNumber(interaction?.[0]?.fans) }}</span>
                                <span>粉丝</span>
                            </div>
                            <div class="interact__item">
                                <span class="mr-1">{{ formatNumber(interaction?.[0]?.praise) }}</span>
                                <span>收藏与获赞</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 关注按钮 -->
                <div class="header-followbtn__wrapper ml-1">
                    <div class="followbtn__item bg-pink-300 px-7 py-1 rounded-full text-white cursor-pointer">
                        <span>关注</span>
                    </div>
                </div>
            </div>
            <!-- 资源选择 -->
            <div class="container__resource flex justify-center items-center py-2 relative">
                <div class="toggle flex relative gap-1">
                    <!-- 滑块 -->
                    <div class="resouse__silder h-full w-1/2 absolute bg-pink-300/40
                    top-0 rounded-full transition-all ease-in-out duration-300 
                    " :class="[tag === 'note' ? 'translate-x-0' : 'translate-x-full']"></div>
                    <!-- note -->
                    <div class="resouse__item px-1 relative">
                        <div class="note px-4 py-1 rounded-full transition-all duration-300 flex justify-center"
                            :style="{ width: noteWidth + 'px' }" :class="[tag === 'note' ? 'text-white' : 'text-pink-300 hover:text-gray-400',
                                '']">

                            <router-link :to="{
                                name: 'person',
                                params: { id: route.params.id },
                                query: { resource: 'note' }
                            }">
                                <span>笔记</span>
                            </router-link>
                        </div>
                    </div>
                    <!-- collect -->
                    <div class="resouse__item px-1 relative" ref="collectRef">
                        <div class="note px-4 py-1 rounded-full transition-all duration-300"
                            :class="[tag === 'collect' ? 'text-white fill-white' : 'text-pink-300 fill-pink-300 hover:text-gray-400']">
                            <router-link :to="{
                                name: 'person',
                                params: { id: route.params.id },
                                query: { resource: 'collect' }
                            }">
                                <div class="flex items-center gap-1">
                                    <span class="w-4 flex items-center" v-if="isLock">
                                        <tiny-icon-lock />
                                    </span>
                                    <div>收藏</div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 资源内容 -->
            <div class="container__content overflow-hidden h-full">
                <div class="content__warpper w-full tranistion-all duration-300 ease-in-out " :class="activeTab">
                    <template v-if="tag === 'note'">
                        <kfyblogwaterfall :items="articleList" @open-modal="showModal = true" />
                    </template>
                    <template v-if="tag === 'collect'">
                        <!-- 带锁 -->
                        <div class="lock__wrapper w-full h-full flex flex-col items-center justify-center py-3 "
                            v-if="isLock">
                            <div class="warpper__driver w-7/8 h-[1px] bg-gray-300"></div>
                            <div class="warpper__container py-6 flex gap-2 flex-col">
                                <img src="http://117.72.67.30:30080/public/images/official/202508052320.svg"></img>
                                <span>该用户已设置收藏内容不可见</span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <!-- 模态框渲染 -->
    <div class="kfyblog_person__modal relative">
        <component :is="KfyblogModal" v-if="showModal" @close-modal="showModal = false" />
    </div>
</template>

<style scoped>
/* 滑入动画 */
.side-left {
    transform: translateX(-100%);
}

/* 滑出动画 */
.side-right {
    transform: translateX(100%);
}

.tag-official {
    background: linear-gradient(90deg, rgba(255, 183, 215, 0.8), rgba(255, 220, 235, 0.8));
    color: #d43f8d;
    box-shadow: 0 2px 4px rgba(255, 192, 203, 0.3);
}
</style>