<!-- 
 作者：kafiy
 创建时间：2025-07-24
 标签：vue3 组合式API 图片组件 TailWindCSSV4.0
 描述：图片组件，用于展示图片。
-->
<template>
    <div class="kfyblog-image cursor-zoom-in flex justify-center items-center" @click="$emit('click')">
        <img :src="props.imageUrl" :class="{'hover:scale-110':props.hover,'rounded-xl' : props.rounded, 'rounded-full': props.roundedFull}" 
        class="transition-transform object-contain duration-300 transform">
    </div>

</template>

<script lang="js" setup>
import {defineProps, defineEmits} from 'vue'
const props = defineProps({
    imageUrl :{
        type: String,
        default: "" 
    },
    hover:{
        type: Boolean,
        default: true
    },
    rounded:{
        type: Boolean,
        default: false
    },
    roundedFull:{
        type: Boolean,
        default: false
    }
})

defineEmits(['click'])

</script>