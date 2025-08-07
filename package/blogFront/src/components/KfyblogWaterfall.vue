<!-- 
    作者：kafeiy 
    创建时间：2025-07-24
    标签：vue3 组合式API 瀑布流 TailWindCSSV4.0
    描述：瀑布流组件，用于展示列表项。
 -->
<template>
    <!-- 创建瀑布流容器 -->
    <div class="kfyblog-waterfall-container relative w-full p-4 pt-2 pb-0 md:p-6 md:pt-4 md:pb-0">
        <div class="kfyblog-waterfall-wrapper relative" ref="mediaContainer">
            <div v-for="(col, colIndex) in columns" :key="colIndex" class="kfyblog-waterfall-columns inline-block"
                :style="{
                    width: `calc(100% / ${computedColumns} - ${gap * (computedColumns - 1) / computedColumns}px)`,
                    marginRight: colIndex < computedColumns - 1 ? `${gap}px` : '0',
                }">
                <div class="kfyblog-waterfall-item cursor-pointer  group h-full flex flex-col overflow-hidden shadow-md
                     bg-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-transform
                      ease-in-out duration-300" v-for="(item, itemIndex) in col.items" :key="item.id || itemIndex"
                       @click="[pushModalArticle(item.id, $event.currentTarget),handleOpenModal($event.currentTarget, item)]">
                    <!-- 图文/视频模式 -->
                    <div class=" relative overflow-hidden" :class="[mediaSkeleton[item.id] ? 'min-h-48' : '']"
                        v-if="item.imageMode">
                        <div v-if="mediaSkeleton[item.id]" class="kfyblog-waterfall-skeleton absolute w-full h-full overflow-hidden top-0 z-10
                            inset-0 transition-all">
                            <div class="skeleton skeleton-wave h-full overflow-hidden bg-gray-200"></div>
                        </div>
                        <!-- cover图片 -->
                        <img :src="item.imageUrl" alt="图片介绍" class="kfyblog-waterfall-cover w-full object-cover transition-transform hover:scale-105 duration-500
                            group-hover:scale-105" @load="handMediaLoad(item.id)">
                        <!-- tag标签 -->
                        <!-- <div class=" absolute top-3 left-3 text-xs  flex flex-col">
                            <div class=" bg-blue-500 text-white py-1 px-2 rounded">
                                <span>置顶</span>
                            </div>
                            <div class=" bg-red-500 text-white py-1 px-2 rounded">
                                <span>公告</span>
                            </div>
                        </div> -->
                    </div>
                    <div v-else-if="item.videoMode" class=" relative overflow-hidden">
                        <kfyblog-video :video-url="item.videoUrl" />
                    </div>
                    <!-- 卡片内容区 -->
                    <div class=" flex flex-grow flex-col p-4">
                        <div class="font-semibold flex items-star gap-1 mb-2 line-clamp-3">
                            <!-- 官方标签 -->
                            <div class="flex-shrink-0 pt-1" v-if="item.tagUrl">
                                <img :src="item.tagUrl" class="w-5 h-auto object-contain" alt="官方标签">
                            </div>
                            <div>
                                <!-- 路由跳转逻辑 -->
                                <span class="text-xl self-start hover:underline hover:decoration-dotted"
                                   >
                                    {{ item.title }}
                                </span>
                            </div>
                        </div>
                        <p class="text-[0.85rem] text-stone-500 select-none">
                            {{ item.description || "该文章暂时没有介绍哦~" }}
                        </p>
                    </div>
                    <!-- 文章归属 -->
                    <div class="pt-2 mb-2 flex flex-row justify-around items-center">
                        <!-- 文章作者头像|昵称 -->
                        <div class="kfyblog-waterfall-avatar pl-1 flex flex-row justify-center items-center">
                            <img :src="item.authorAvatar" class="w-6 rounded-full">
                            <span class="text-xs pl-1 text-stone-500 hover:text-stone-800
                                 transition-all duration-300 cursor-pointer
                            " :title="item.authorName">
                                <router-link :to="item.router" @click.stop>
                                    <span :ref="el => textContainer[item.globalIndex] = el">
                                        {{ displayText[item.globalIndex] }}
                                    </span>
                                </router-link>
                            </span>
                        </div>
                        <!-- 文章喜爱 -->
                        <div class="kfyblog-waterfall-likes flex flex-row text-xs text-stone-500">
                            <div>
                                <!-- 喜欢人数 -->
                                <span class="mr-1 cursor-pointer select-none" title="点击喜欢"
                                    @click.stop="addLikes(item.id, item)">
                                    <span class="relative kfyblog-watarfall-liked-animation w-0 h-0"
                                        :ref="el => animationContainerLike[item.id] = el"></span>
                                    <i class="fas fa-heart " :ref="el => likesRef[item.id] = el"></i>
                                    {{ formatNumber(item.interaction_metrics[0].likes) }}
                                </span>
                                <!-- 收藏人数 -->
                                <span class="mr-1 cursor-pointer select-none " title="点击收藏"
                                    @click.stop="addCollection(item.id, item)">
                                    <span class=" relative kfyblog-waterfall-collection-anmation w-0 h-0"
                                        :ref="el => animationContainerCollection[item.id] = el"></span>
                                    <i class="fas fa-star cursor-pointer" :ref="el => collectionsRef[item.id] = el"></i>
                                    {{ formatNumber(item.interaction_metrics[0].collections) }}
                                </span>
                                <!-- 浏览人数 -->
                                <span class="mr-1 cursor-pointer">
                                    <i class="fas fa-eye pr-1 cursor-pointer"></i>
                                    {{ formatNumber(item.interaction_metrics[0].watch) }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 没有更多数据 -->
        <div v-if="!hasMore" class="text-center text-xs text-gray-400 py-2 flex 
        flex-row items-center justify-center transition-all duration-200 ease-in">
            <div class="w-1/3 h-[1px] bg-gray-400 hidden  md:inline-block"></div>
            <span class="w-full md:w-1/4 underline decoration-pink-400">不要再往下翻啦!已经到底喽QAQ</span>
            <div class="w-1/3 h-[1px] bg-gray-400 hidden md:inline-block"></div>
        </div>
    </div>
</template>

<script lang="js" setup>
import { computed, defineProps, nextTick, onMounted, onUnmounted, ref, watchEffect, defineEmits } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useArticleStore} from '../store/article'
// 导入视频控件
import KfyblogVideo from './control/KfyblogVideo.vue';
const route = useRoute();
const router = useRouter();
const articleStore = useArticleStore();
const emit = defineEmits(['openModal'])
const handleOpenModal = (el, item) =>{
    return emit('openModal', el, item)
}
const props = defineProps({
    gap: {
        type: Number,
        default: 16,
    },
    columns: {
        type: Object,
        default: () => ({
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
        })
    },
    // 数据源
    items: {
        type: Array,
        default: () => [],
        validator: (value) => {
            return value.every(items => items.title)
        }
    },
    //  是否有更多数据
    hasMore: {
        type: Boolean,
        default: false
    },
    // 是否加载
    isLoading: {
        type: Boolean,
        default: false
    },
})

const selfItem = computed(() => {
    return props.items.map(item => ({
        ...item,
        interaction_metrics: item.interaction_metrics || [],
    }))
})

// 处理数字数据显示
const formatNumber = (num) => {
    if (typeof num !== "number") {
        console.error(`Data type error: The transmitted data is not of type int,Type:${typeof num}.
        `);
        return "--"
    }
    if (typeof num === "undefined") {
        console.error('Data type error: Data not found')
        return "--"
    }
    // 计算数据
    if (num >= 10000) {
        const formatter = (num / 10000).toFixed(1)
        return formatter.replace(/\.0$/, '') + 'w'
    }
    if (num >= 1000) {
        const formatter = (num / 1000).toFixed(1)
        return formatter.replace(/\.0$/, '') + 'k'
    }
    return num.toString()
}

// 数据源作者名称(未处理)
const fullText = computed(() => {
  // 打印selfItem的结构，确认是否有authorName
  console.log("selfItem中的item结构:", selfItem.value || "无数据");
  
  return selfItem.value.map(item => {
    const name = item.authorName || "匿名作者";
    return name;
  });
});
console.log("fullText:", fullText.value); // 打印检查是否正确
// 处理后的作者名称
const displayText = ref([...fullText.value]);
// 获取DOM元素
const textContainer = ref({});
// 获取DOM元素宽
const textContainerWidth = ref({});
const resizeObservers = ref([]);
// 创建窗口响应式数据
const windowWidth = ref(typeof window !== "undefined" ? window.innerWidth : 0)
// 计算列数（响应式）,初始化序列数据
const columns = ref([]);

const mediaSkeleton = ref(
    props.items.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
    }, {})
)
// 获取元素DOM
const likesRef = ref({})
const collectionsRef = ref({})
// 动画容器
const animationContainerLike = ref({})
const animationContainerCollection = ref({})
// 状态管理
const isLike = ref(
    props.items.reduce((acc, item) => {
        acc[item.id] = false;
        return acc
    }, {})
)
const isCollection = ref(
    props.items.reduce((acc, item) => {
        acc[item.id] = false;
        return acc
    }, {})
)

const pushModalArticle = (itemId, cardDOM) => {
    const rect = cardDOM.getBoundingClientRect();

    // 卡片信息
    const positionINFO = {
        y: rect.top,
        x: rect.left,
        width: rect.width,
        height: rect.height,
    }
    // 加密路径参数
    const position = JSON.stringify(positionINFO);
    const base64Position = btoa(encodeURIComponent(position));
    // 当前路由名称
    const currenrRouteName = route.name
    // 获取文章详情
    articleStore.openArticleModal(itemId);
    articleStore.getCommentList(itemId);
    let targetRouteName;
    let targetRouteParams = {};
    let targetRouteQuery = {};
    // 检测在什么路由状态下
    if (currenrRouteName === 'explore'){
        targetRouteName = 'explore';
        targetRouteParams = {
            articleId: itemId
        };
        targetRouteQuery = {
            position: base64Position,
            channel_id: route.query.channel_id,
        }
    } else if (currenrRouteName === 'person'){
        targetRouteName = 'person';
        targetRouteParams = {
            articleId: itemId
        };
        targetRouteQuery = {
            position: base64Position,
            resource: route.query.resource,
        }
    }
    // 动态路由
    router.push({
        name: targetRouteName,
        params: targetRouteParams,
        query: targetRouteQuery,
    })
}

// 添加喜欢
const addLikes = (itemId, item) => {
    const el = likesRef.value[itemId]
    if (!el) return
    if (isLike.value[itemId]) {
        isLike.value[itemId] = false;
        el.classList.remove('text-red-500')
        removeLikedAnimation(itemId)

    } else {
        isLike.value[itemId] = true;
        el.classList.add('text-red-500')
        createLikedAnimation(itemId)
    }
}

// 添加收藏
const addCollection = (itemId, item) => {
    const el = collectionsRef.value[itemId]
    if (!el) return
    if (isCollection.value[itemId]) {
        isCollection.value[itemId] = false;
        el.classList.remove('text-amber-500')
        removeCollectionAnimation(itemId)
    } else {
        isCollection.value[itemId] = true;
        el.classList.add('text-amber-500')
        createCollectionAnimation(itemId)
    }
}

// 创建喜欢动画
const createLikedAnimation = (itemId) => {
    if (!likesRef.value[itemId]) return
    const ract = likesRef.value[itemId].getBoundingClientRect();
    const animationContainer = animationContainerLike.value[itemId];
    const heartCount = Math.floor(Math.random() * 3) + 3;
    // 创建+1
    nextTick(() => {
        createPlusOneElement(ract, animationContainer);
        setTimeout(() => {
            for (let i = 0; i < heartCount; i++) {
                randomElement(i, ract, animationContainer, {
                    color: "#ef4444",
                    duration: 2000
                })
            }
        }, 100)
    })
}

// 创建收藏动画
const createCollectionAnimation = (itemId) => {
    if (!collectionsRef.value[itemId]) return
    const rect = collectionsRef.value[itemId].getBoundingClientRect();
    const animationContainer = animationContainerCollection.value[itemId];
    const collectionCount = Math.floor(Math.random() * 3) + 3;
    nextTick(() => {
        addPlusOneCollectionElment(rect, animationContainer);
        setTimeout(() => {
            for (let i = 0; i < collectionCount; i++) {
                randomElement(i, rect, animationContainer, {
                    element: "<i class='fas fa-star fa-fw'/>",
                    color: "#f59e0b",
                    duration: 2000
                })
            }
        }, 100)
    })
}
const removeCollectionAnimation = (itemId) => {
    if (!collectionsRef.value[itemId]) return
    const rect = collectionsRef.value[itemId].getBoundingClientRect();
    const animationContainer = animationContainerCollection.value[itemId]
    removePluseOneCollectionElement(rect, animationContainer)
}

const addPlusOneCollectionElment = (rect, container) => {
    createAnimationElement('+1', rect, container, {
        color: "#f59e0b"
    })
}
const removePluseOneCollectionElement = (rect, container) => {
    createAnimationElement("-1", rect, container, {
        color: ""
    })
}

// 创建-1元素
const removeLikedAnimation = (itemId) => {
    if (!likesRef.value[itemId]) return
    const rect = likesRef.value[itemId].getBoundingClientRect();
    const animationContainer = animationContainerLike.value[itemId]
    removePlusOneElement(rect, animationContainer)
}

// 创建动画配置
const createAnimationElement = (content, rect, container, options = {}) => {
    const defaultOption = {
        color: '#ef4444',
        duration: 500,
        animationClass: 'kfyblog-waterfall-plus_one'
    }
    // 合并配置
    const { color, duration, animationClass } = { ...defaultOption, ...options };
    // 创建DOM元素
    const virtualElement = document.createElement('span');
    virtualElement.className = animationClass;
    virtualElement.textContent = content;
    virtualElement.style.color = color;
    // 定位图标中心
    virtualElement.style.left = `${rect.width / 2}px`;
    virtualElement.style.top = `-${rect.height / 2}px`;
    container.appendChild(virtualElement)
    setTimeout(() => virtualElement.remove(), duration)
}

// 加1元素
const createPlusOneElement = (rect, container) => {
    createAnimationElement('+1', rect, container, {
        color: "#ef4444"
    })
}
// 创建-1元素
const removePlusOneElement = (rect, container) => {
    createAnimationElement("-1", rect, container, {
        color: ""
    })
}

// 创建随机飘散元素
const randomElement = (index, rect, container, options = {}) => {
    const defaultOption = {
        element: "<i class='fas fa-heart fa-fw'>",
        color: "#ef4444",
        duration: 500,
        animationClassName: 'kfyblog-waterfall-element_fly'
    }
    const { element, color, duration, animationClassName } = { ...defaultOption, ...options }
    // 创建DOM元素
    const virtualElement = document.createElement("span");
    virtualElement.innerHTML = element;
    virtualElement.className = animationClassName;
    virtualElement.style.color = color
    // 随机位置
    const offsetX = (Math.random() - 0.5) * rect.width * 2;
    const offsetY = (Math.random() - 0.5) * rect.height + 8
    const delay = index * 0.1
    // 应用效果
    virtualElement.style.left = `${rect.width / 2 + offsetX}px`;
    virtualElement.style.top = `-${rect.height / 2 + offsetY}px`;
    virtualElement.style.animationDelay = `${delay}s`
    container.appendChild(virtualElement)
    setTimeout(() => virtualElement.remove(), duration)
}

// 图片加载完毕
const handMediaLoad = (itemId) => {
    setTimeout(() => {
        mediaSkeleton.value[itemId] = false;
    }, 50)
}

const initColumns = () => {
    const columnCount = computedColumns.value;
    columns.value = Array(computedColumns.value).fill().map(() => ({ items: [] }))
    selfItem.value.forEach((item, globalIndex) => {
        const colIndex = globalIndex % columnCount;
        columns.value[colIndex].items.push({
            ...item,
            globalIndex: globalIndex
        });
    })
}

// 计算元素是否需要截断
const calculateText = (globalIndex) => {
    const el = textContainer.value[globalIndex];
    if (!el) return
    const width = el.offsetWidth; // 获取实际的容器宽度
    // 创建临时元素用于计算文本宽度（不渲染到页面）
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.fontSize = '0.75rem';
    tempSpan.style.padding = '0';
    tempSpan.textContent = fullText.value[globalIndex];
    document.body.appendChild(tempSpan)

    // 文本实际宽度
    const textWidth = tempSpan.offsetWidth;
    document.body.removeChild(tempSpan);

    if (textWidth > width) {
        displayText.value[globalIndex] = fullText.value[globalIndex].slice(0, 2) + '…';
    } else {
        displayText.value[globalIndex] = fullText.value[globalIndex]
    }
}

// 监听容器变化
const watchWidthChange = (globalIndex) => {
    const el = textContainer.value[globalIndex]
    if (!el) return;
    textContainerWidth.value[globalIndex] = el.offsetWidth;
    const resizeObserver = new ResizeObserver(entries => {
        const newWitdh = entries[0].contentRect.width
        if (Math.abs(newWitdh - textContainerWidth.value[globalIndex]) > 1) {
            textContainerWidth.value[globalIndex] = newWitdh;
            calculateText(globalIndex)
        }
    })
    resizeObserver.observe(el)
    resizeObservers.value.push(resizeObserver)
}

const computedColumns = computed(() => {
    if (typeof window === 'undefined') return props.columns.xs
    const width = windowWidth.value;

    if (width >= 1280) return props.columns.xl;
    if (width >= 1024) return props.columns.lg;
    if (width >= 768) return props.columns.md;
    if (width >= 640) return props.columns.sm;

    return props.columns.xs
})

watchEffect(()=>{
    displayText.value = [...fullText.value]
    initColumns();
    const newSkeleton = selfItem.value.reduce((acc, item) =>{
        acc[item.id] = mediaSkeleton.value[item.id] ?? true
        return acc;
    }, {})
    mediaSkeleton.value = newSkeleton
    nextTick(()=>{
        selfItem.value.forEach((_,globalIndex)=>{
            calculateText(globalIndex);
            watchWidthChange(globalIndex);
        })
    })
})


onMounted(() => {
    initColumns();
    nextTick(() => {
        selfItem.value.forEach((_, globalIndex) => {
            calculateText(globalIndex);
            watchWidthChange(globalIndex);
        });
    });

    let timer = null
    const handleResize = () => {
        clearTimeout(timer);
        // 核心响应式更新数据
        windowWidth.value = window.innerWidth
        timer = setTimeout(async () => {
            await nextTick();
            initColumns();
            selfItem.value.forEach((_, globalIndex) => {
                calculateText(globalIndex);
                watchWidthChange(globalIndex);
            });
        }, 100)
    };
    window.addEventListener('resize', handleResize);

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        resizeObservers.value.forEach(observe => observe.disconnect());
        resizeObservers.value = [];
    });
});
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.kfyblog-waterfall-wrapper {
    font-size: 0;
    width: 100%;
}

.kfyblog-waterfall-columns {
    box-sizing: border-box;
    font-size: var(--text-lg);
    vertical-align: top;
    transition: width 0.3s ease, margin-right 0.3s ease;
}

.kfyblog-waterfall-item {
    margin-bottom: v-bind(gap+ 'px');
}

.kfyblog-waterfall-cover {
    width: 100%;
    display: block;
}

:deep(.kfyblog-waterfall-plus_one) {
    position: absolute;
    font-size: var(--text-xs);
    font-weight: bold;
    opacity: 0;
    transform: translateY(0);
    animation: plusOneFly 1s ease-out forwards;
    pointer-events: none;
}

:deep(.kfyblog-waterfall-element_fly) {
    position: absolute;
    opacity: 0;
    transform: translate(0, 0) scale(0.5);
    animation: elementFly 1.5s ease-out forwards;
    pointer-events: none;
}

.skeleton-wave {
    background-color: var(--color-gray-200);
    background-image: linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, .4),
            transparent);
    background-position: -100% 0;
    background-size: 50% 100%;
    background-repeat: no-repeat;
    animation: wave-scan 1.5s infinite;
}

@keyframes wave-scan {
    from {
        background-position: -100% 0;
    }

    to {
        background-position: 200% 0;
    }
}

@keyframes plusOneFly {
    from {
        transform: translateY(0);
        opacity: 1;
    }

    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}

@keyframes elementFly {
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(0.5) rotate(0deg);
    }

    50% {
        opacity: 0.8;
        transform: translate(calc(15px * var(--x-offset, 1)),
                -25px) scale(0.8) rotate(var(--rotation, 0deg));
    }

    100% {
        opacity: 0;
        transform: translate(calc(30px * var(--x-offset, 1)),
                -50px) scale(1) rotate(calc(var(--rotation, 0deg) * 1.5));
    }
}
</style>