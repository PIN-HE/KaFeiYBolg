<!-- 
    作者：kafiy
    创建时间：2025-07-24
    标签：vue3 组合式API 放大组件 TailWindCSSV4.0
    描述：放大组件，用于展示图片。
-->
<template>
    <div class="kfyblog-ligth-box fixed w-full h-full bg-gray-400/30 top-0 z-20 backdrop-blur-lg cursor-zoom-out"
    @click.stop="close()">
        <!-- 关闭按钮 -->
        <div class="kfyblog-light-box__container relative w-full h-full flex items-center justify-center">
            <div class="kfyblog-light-box__close absolute top-8 right-10 bg-stone-600/30 rounded-full cursor-pointer">
                <span class="text-2xl flex justify-center p-2 fill-white" @click.stop="close()">
                    <TinyIconClose />
                </span>
            </div>
            <!-- 操作组 -->
            <div class="kfyblog-light-box__actions">
                <div class="kfyblog-light-box__actions__item absolute top-1/2 left-2 bg-stone-600/30 rounded-full hover:backdrop-blur-lg"
                :class="[isDisablePrex ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100']">
                    <span class="text-2xl flex p-2 fill-white"
                    @click.stop="prexIndex">
                        <TinyIconChevronLeft />
                    </span>
                </div>
                <div class="kfyblog-light-box__actions__item absolute top-1/2 right-2 bg-stone-600/30 rounded-full hover:backdrop-blur-lg"
                :class="[isDisableNext ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100']">
                    <span class="text-2xl flex p-2 fill-white"
                    @click.stop="nextIndex">
                        <TinyIconChevronRight />
                    </span>
                </div>
            </div>
            <!-- 数显 -->
            <div class="kfyblog-light-box__count absolute top-8 left-4 bg-stone-600/30 rounded-full select-none">
                <span class="text-white p-2">{{ currentIndex + 1 }}/{{ props.images.length }}</span>
            </div>
            <!-- 图片显示框 -->
            <div class="kfyblog-light-box__image shrink-0 w-full h-full flex justify-center items-center" v-if="currentImage?.imgUrl">
                <img :src="currentImage.imgUrl" class=" object-contain select-none max-w-full max-h-full  " />
            </div>
            <!-- 加载失败 -->
            <div v-else>
                图片不见了哦
            </div>
        </div>
    </div>
</template>

<script setup lang="js">
import { defineEmits, onMounted, onUnmounted, defineProps, computed, ref, watch } from 'vue';
import { IconClose, IconChevronLeft, IconChevronRight } from '@opentiny/vue-icon';
const TinyIconClose = IconClose();
const TinyIconChevronLeft = IconChevronLeft();
const TinyIconChevronRight = IconChevronRight();

const props = defineProps({
    images: {
        type: Array,
        default: ()=>[]
    },
    initialIndex: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['close', 'change'])

const currentIndex = ref(props.initialIndex || 0)
const currentImage = computed(()=>{
    return props.images?.[currentIndex.value] || {imgUrl:''}
})
// 计算是否禁用
const isDisableNext = ref(currentIndex.value >= props.images.length - 1)
const isDisablePrex = ref(currentIndex.value === 0)

watch(()=> currentIndex.value, (newVal)=>{
    isDisablePrex.value = newVal === 0
    isDisableNext.value = newVal >= props.images.length - 1
})

const nextIndex = ()=>{
    if(!isDisableNext.value) currentIndex.value++
}
const prexIndex = ()=>{
    if(!isDisablePrex.value) currentIndex.value--
}

const close = ()=>{
    emit('close')
}

onMounted(()=>{
    console.log(props.images);
    
})

</script>

<style scoped>

</style>
