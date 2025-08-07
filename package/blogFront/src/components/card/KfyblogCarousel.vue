<!--
    作者：kafeiy 
    创建时间：2025-07-24
    标签：vue3 组合式API 轮播图 TailWindCSSV4.0
    描述：轮播图组件，用于展示图片的轮播效果。
    组件参数：
    1. items: 轮播图项数组，每个项包含图片或视频的URL。
    2. autoplay: 是否自动播放，默认为true。
    3. interval: 自动播放间隔时间，默认为3000毫秒。
    4. controler: 是否显示操作框， 默认false
    5. indicator: 是否显示数显， 默认false
-->
<template>
    <div class="kfyblog-carousel h-full flex justify-center items-center group relative overflow-hidden" ref="carouselContainer">
        <div class="kfyblog-carousel__container">
            <!-- 操作框 -->
            <div class="kfyblog-carousel__control">
                <div class="kfyblog-carousel__control-count">
                    <div class="absolute top-4 right-5 z-10 text-white bg-gray-300/80 px-2 rounded-full transition-opacity duration-300"
                     :class="[props.indicator? 'opacity-100' : 'opacity-0 group-hover:opacity-100']">
                        {{ activeImageIndex + 1 }}/{{ items.length }}
                    </div>
                </div>
                <div class="kfyblog-carousel__control--left">
                    <span
                        class="w-8 h-8 fill-white bg-gray-300/80 absolute top-1/2 rounded-full z-10 flex items-center justify-center text-2xl
                        transition-all duration-300 ease-in-out"
                        @click.stop="prexIndex"
                        :class="[{ 'cursor-not-allowed opacity-50': isDisablePrex }, { 'cursor-pointer': !isDisablePrex },
                            props.controler ? 'left-2' : '-left-10 group-hover:left-2'
                        ]">
                        <tiny-icon-chevron-left />
                    </span>
                </div>
                <div class="kfyblog-carousel__control--right ">
                    <span
                        class="w-8 h-8 fill-white bg-gray-300/80 absolute top-1/2  rounded-full z-10 flex items-center justify-center text-2xl
                        transition-all duration-300 ease-in-out"
                        :class="[{ 'cursor-not-allowed opacity-50': isDisableNext }, { 'cursor-pointer': !isDisableNext },
                            props.controler ? 'right-2' : '-right-10 group-hover:right-2 '
                        ]"
                        @click.stop="nextIndex">
                        <tiny-icon-chevron-right />
                    </span>
                </div>
                <div class="kfyblog-carousel__control--indicator">
                    <div class="absolute z-10 -bottom-2 text-white left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out "
                     :class="[props.controler ? 'bottom-2' : 'group-hover:bottom-2']">
                        <!-- 指标点 -->
                        <div class="flex justify-center items-center">
                            <div class="w-1 h-1 mx-1 rounded-full bg-gray-300/80 transition-all duration-300 ease-in-out"
                                :class="{ 'bg-white w-4 h-1': activeImageIndex === index }" v-for="(item, index) in items"
                                :key="index"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 图片框 -->
            <div class="kfyblog-carousel__image overflow-hidden">
                <div class="flex fle-row justify-center items-center" :style="{ width: `${items.length * 100}%` }">
                    <div class="kfyblog-carousel__image--item w-full transition-transform duration-500 ease-in-out"
                        v-for="(item, index) in props.items" :key="index"
                        :style="{ transform: `translateX(-${activeImageIndex * 100}%)`, width: `${items.length * 100}%` }">
                        <kfyblog-image class="select-none" :image-url="item.imgUrl" @click="openLigthBox(index)"
                            :hover="false">
                        </kfyblog-image>
                    </div>
                </div>
            </div>
            <!-- 挂载全屏显示组件 -->
            <Teleport to="#kfyblog-modal-lightbox">
                <kfyblog-light-box 
                :initialIndex="activeImageIndex"
                :images="items" v-if="isShowLightBox" 
                @close="isShowLightBox = false" />
            </Teleport>
        </div>
    </div>
</template>

<script lang="js" setup>
import { computed, onMounted, onUnmounted, ref, Teleport, watch,defineProps,nextTick } from 'vue';
import KfyblogImage from '../control/KfyblogImage.vue';
import KfyblogLightBox from '../control/KfyblogLightBox.vue';
import { IconChevronLeft, IconChevronRight, IconTeams } from '@opentiny/vue-icon';
import { TinyModal } from '@opentiny/vue';
const TinyIconChevronLeft = IconChevronLeft();
const TinyIconChevronRight = IconChevronRight();

const props = defineProps({
    items:{
        type: Array,
        default: ()=> []
    },
    autoplay:{
        type: Boolean,
        default: true
    },
    interval:{
        type: Number,
        default: 3000
    },
    controler:{
        type: Boolean,
        default: false
    },
    indicator:{
        type: Boolean,
        default: false
    },
})

// 防抖函数
const debounce = (fn, options ={}) =>{
    const defaultOption = {
        delay : 300,
    }
    const {delay} = {...defaultOption, ...options}
    let timer = null
    return (...args)=>{
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(null,args)
            timer = null
        }, delay)
    }
}
const carouselContainer = ref(null)

const isShowLightBox = ref(false);
const activeImageIndex = ref(0)
const isDisablePrex = computed(()=> activeImageIndex.value === 0)
const isDisableNext = computed(()=> activeImageIndex.value >= props.items.length - 1)
let autoPlayTimter = null

const openLigthBox = (index) => {
    activeImageIndex.value = index
    isShowLightBox.value = true;
};

const nextIndex = () => {
    if (!isDisableNext.value) activeImageIndex.value++
    else TinyModal.message({message:"已经是最后一张啦~", status: "info"})

}
const prexIndex = () => {
    if (!isDisablePrex.value) activeImageIndex.value--
    else TinyModal.message({message:"前面空空的什么也没有呢~",status: "info"})

}

// 取模运算 == 无限滚动
const getModuloIndex = (index)=>{
    return (index + items.value.length) % items.value.length
}

// 自动播放
const starAutoplay = ()=>{
    if(!props.autoplay) return
    if(autoPlayTimter) clearTimeout(autoPlayTimter)
    autoPlayTimter = setTimeout(()=>{
        activeImageIndex.value = getModuloIndex(activeImageIndex.value + 1)
        starAutoplay()
    },props.interval)
}

watch(()=> props.items.length, ()=>{
    if(autoPlayTimter) clearTimeout(autoPlayTimter);
    starAutoplay()
})

// 鼠标滚轮切换
const handleWhell = debounce((e)=> {
    if (e.deltaY > 0) {
        console.log("滚动监听");
        nextIndex()
    } else {
        prexIndex()
    }
},{ delay: 200})

onMounted(() => {
    nextTick(() => {
        if (carouselContainer.value) {
            carouselContainer.value.addEventListener("wheel", handleWhell)
        };
        starAutoplay()
    })
})

onUnmounted(() => {
    if (carouselContainer.value) {
        carouselContainer.value.removeEventListener("wheel", handleWhell)
    };
    if (autoPlayTimter) {
        clearTimeout(autoPlayTimter)
    };
    // 清空图片索引
    activeImageIndex.value = 0;
})

</script>

<style scoped></style>