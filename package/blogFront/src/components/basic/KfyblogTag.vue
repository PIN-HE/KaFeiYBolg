<template>
    <div class="kfyblog-tag">
        <div class="tag__item mx-0.5 px-2 py-0.5 rounded-full text-xs transition-all duration-200 ease-in-out"
            :class="getStyleClass"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            >
            <span>{{ props.label }}</span>
        </div>
    </div>
</template>
<script lang="js" setup>
import { ref, defineProps, computed, watch, onMounted } from 'vue'
const props = defineProps({
    label: {
        type: [String, Number],
        default: '',
        required: true
    },
    type: {
        type: String,
        default: 'default',
        validator: (va) => ['default', 'official', 'vertical', 'interact', 'format', 'status'].includes(va)



    },
    hover: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['mouseEnter', 'mouseLeave'])
// 映射类型
const styleMap = {
    default: 'tag-default',
    official: 'tag-official',
    vertical: 'tag-vertical',
    interact: 'tag-interact',
    format: 'tag-format',
    status: 'tag-status',
}
const getStyleClass = computed(() => {
    const baseStyle = styleMap[props.type]
    return props.hover ? `tag-hover ${baseStyle}` : baseStyle
})

const canTiggerHover = computed(()=>{
    return props.type === 'default' && props.hover
})

const handleMouseEnter = ()=>{
    if(canTiggerHover.value) {
        emit('mouseEnter', {type: props.type, label: props.label, time: new Date().getTime()})
    }
}
const handleMouseLeave = ()=>{
    if(canTiggerHover.value) {
        emit('mouseLeave', {type: props.type, label: props.label, time: new Date().getTime()})
    }
}


watch(() => props.hover, (newVal) => {
    if (newVal && props.type !== 'default') {
        console.warn(
            `[KfyblogTag@v1.x] hover 效果在 type=${props.type} 下无效\n` +
            `原因:当前版本(v1)仅支持 default 类型\n` +
            `解决方案:\n` +
            `1. 若需使用 hover 效果，请将 type 设置为 default\n` +
            `2. 若需使用其他类型，请等待组件更新后再使用\n`
        )
    }
})

onMounted(() => {
    setTimeout(() => {
        if (props.hover && props.type !== 'default') {
            console.warn(
                `[KfyblogTag@v1.x] 初始化时检测到无效类型`
            )
        }
    },500)
})

</script>

<style scoped>
.kfyblog-tag {
    display: inline-block;
}

.tag__item {
    display: inline-flex;
    box-sizing: border-box;
}

/* 默认样式 */
.tag-default {
    background: oklch(87.2% 0.01 258.338);
    color: var(--color-gray-500)
}

/* 只有default才hover */
.tag-hover.tag-default:hover {
    background: oklch(92.8% 0.006 264.531);
    color: var(--color-gray-600);
    cursor: pointer;
}

/* 内容垂直样式 */
.tag-vertical {
    background: linear-gradient(90deg, #90caf9, #42a5f5);
    color: #004777;
    box-shadow: 0 2px 4px rgba(66, 165, 245, .2);
}

/* 互动类 */
.tag-interact {
    background: linear-gradient(90deg, #f48fb1, #e91e63);
    color: #fff;
    box-shadow: 0 2px 4px rgba(233, 30, 99, .2);
}

/* 内容类 */
.tag-format {
    background: linear-gradient(90deg, #a5d6a7, #43a047);
    color: #1b5e20;
    box-shadow: 0 2px 4px rgba(67, 160, 71, .2);
}

/* 动态状态类 */
.tag-status {
    background: linear-gradient(90deg, #fff3e0, #ffccbc);
    color: #e64a19;
    box-shadow: 0 2px 4px rgba(230, 74, 25, .2);
}

/* 官方样式(带动画) */
.tag-official {
    background: linear-gradient(90deg, rgba(255, 183, 215, 0.8), rgba(255, 220, 235, 0.8));
    color: #d43f8d;
    box-shadow: 0 2px 4px rgba(255, 192, 203, 0.3);
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.tag-official::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 255, 255, 0) 100%);
    transform: skewX(-20deg);
    animation: whiteSlide 2s infinite;
    pointer-events: none;
    z-index: 2;
}


@keyframes whiteSlide {
    0% {
        left: -100%;
    }

    100% {
        left: 200%;
    }
}
</style>
