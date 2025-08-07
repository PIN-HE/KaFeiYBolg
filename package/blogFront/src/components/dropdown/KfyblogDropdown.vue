<!-- 
    作者：kafeiy 
    创建时间：2025-07-18
    标签：vue3 组合式API 下拉列表 TailWindCSSV4.0
    描述：下拉列表组件，用于展示列表项。
    组件参数：
    1. dropdownTitle: 下拉列表标题，用于展示在触发元素上。
    2. direction: 下拉列表方向，可选值为'down'或'up'，默认为'down'。
    3. arrows: 是否显示下拉箭头，默认为false。
    4. disabled: 是否禁用下拉列表，默认为false。
-->
<template>
    <div class="  flex flex-col relative">
        <!-- icon点击 -->
        <div v-if="activeSlot == 'icon'" @click.stop="toggleDropdown" ref="triggerElement">
            <slot name="icon"></slot>
        </div>
        <!-- 图片悬浮 -->
        <div v-if="activeSlot == 'image'" @click.stop="toggleDropdown" class=" w-12 m-1 rounded-full cursor-pointer"
            ref="triggerElement">
            <slot name="image">
            </slot>
        </div>
        <!-- 默认插槽 -->
        <div v-else ref="triggerElement">
            <slot name="text">
                <div class="flex justify-center cursor-pointer">
                    <span class="text-blue-500" :class="{ sizeClass, ' opacity-70 cursor-not-allowed': props.disabled }"
                        @click.stop="toggleDropdown">
                        {{ props.dropdownTitle }}
                        <i class="fas fa-angle-up " :style="{ transform: arrowsClick ? 'rotate(180deg)' : '' }" />
                    </span>
                </div>
            </slot>
        </div>
        <!-- 下拉列表 -->
        <Transition name="dropdown" mode="out-in" appear>
            <div v-if="isDropdownOpen" ref="dropDownWarp" class=" relative">
                <div :class="['absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-transparent  ',
                    direction === 'down' ? '-bottom-3 border-b-6 border-b-stone-100  dark:border-b-black' :
                        '-top-3 border-t-3 border-t-stone-100 dark:border-t-black'
                ]"></div>
                <div :class="['absolute w-50 h-auto m-3 bg-white shadow-xl rounded-2xl p-3 text-center',
                    'left-1/2 transition-transform -translate-x-1/2 overflow-hidden dark:bg-black',
                    'dark:text-white origin-top duration-200 z-50', direction === 'down' ? 'top-full origin-top' : 'bottom-full origin-bottom']"
                    ref="dropDownContent">
                    <slot name="dropdown"></slot>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script lang="js" setup>
import { nextTick } from 'process';
import { ref, computed, defineEmits, useSlots, onBeforeUnmount, onMounted } from 'vue'

const props = defineProps({
    arrows: {
        type: Boolean,
        default: false
    },
    dropdownTitle: {
        type: [String, Number],
        default: "下拉菜单"
    },
    titleSize: {
        type: String,
        default: '',
        validator: value => ['large', 'medium', 'mini', ''].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    imageUrl: {
        type: String,
        default: "",
    },
    direction: {
        type: String,
        default: "down"
    }
})

const arrowsClick = ref(false);
const isDropdownOpen = ref(false)
const emits = defineEmits(['open', 'close'])
const slots = useSlots();

const sizeClass = computed(() => {
    switch (props.titleSize) {
        case 'large':
            return "text-xl"
        case 'medium':
            return "text-lg"
        case 'mini':
            return 'text-xs'
        default:
            return "text-base"
    }
})

// 获取DOM元素
const dropDownWarp = ref(null)
const dropDownContent = ref(null)
const triggerElement = ref(null)

const toggleDropdown = () => {
    if (props.disabled) return
    isDropdownOpen.value = !isDropdownOpen.value;
    arrowsClick.value = !arrowsClick.value
    if (isDropdownOpen.value) {
        emits("open")
        // 等待DOM元素渲染后再移动到body
        nextTick(() => {
            moveToBody()
        })
    } else {
        emits("close")
        // 关闭后移除
        removeFromBody()
    }
}

const activeSlot = computed(() => {
    if (slots.icon) return 'icon';
    if (slots.image) return 'image';
    return 'text'
})

// 渲染元素
const moveToBody = () => {
    if (dropDownWarp.value && dropDownContent.value) {
        const originalParent = dropDownWarp.value.parentNode;
        originalParent?.removeChild(dropDownWarp.value)
        document.body.appendChild(dropDownWarp.value);
        const triggerRect = triggerElement.value.getBoundingClientRect()

        const finalLeft = triggerRect.left + triggerElement.value?.clientWidth / 2

        dropDownWarp.value.style.top = `${triggerRect.top + triggerRect.height}px`
        dropDownWarp.value.style.left = `${finalLeft}px`
        dropDownWarp.value.style.position = 'absolute'
    }
}

// 销毁元素
const removeFromBody = () => {
    if (!triggerElement) return
    const triggerRect = triggerElement.value
    triggerRect?.appendChild(dropDownWarp.value)
    dropDownWarp.value.style.top = '',
        dropDownWarp.value.style.left = '',
        dropDownWarp.value.style.position = 'relative'

}

onMounted(() => {
    let timer = null
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (dropDownWarp.value) {
                moveToBody()
            }
        }, 100)
    });
})

onBeforeUnmount(() => {
    if (dropDownWarp.value && document.body.contains(dropDownWarp.value)) {
        document.body.removeChild(dropDownWarp.value)
    }
    window.removeEventListener('resize', () => {
        clearTimeout(timer)
    })
})

</script>

<style scoped>
i {
    transition: transform 0.5s ease;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: transform var(--animation-duration, 200ms) ease,
        opacity var(--animation-duration, 200ms) ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
    transform: scaleY(0);
    opacity: 0;
}
</style>