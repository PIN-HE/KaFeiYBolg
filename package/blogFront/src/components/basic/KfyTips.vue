<template>
    <div class="fixed right-4 top-auto w-68 flex flex-row justify-center text-xs transition-all duration-500 ease-in-out z-[2025]
       bg-white/30 backdrop-blur-md
    "
        :class="{
        'translate-x-full opacity-0': !componentStatus.isVisible,
        'translate-x-0 opacity-100': componentStatus.isVisible,
        'transform origin-right': componentStatus.isMounting
        }"
        v-if="!componentStatus.isClosed"
        style="pointer-events: auto;"
    >
        <span class="absolute w-1 h-full inline bg-green-500 left-0 top-0 transition-all duration-300"
        :style="{ height: componentStatus.isVisible ? '100%' : '0' }"
        ></span>
        
        <div class="pl-2 flex flex-row justify-between w-full h-10 items-center">
            <span class="transition-opacity duration-300" 
            :style="{ opacity: componentStatus.isVisible ? 1 : 0 }">
                <slot name="tips" ></slot>
            </span>
            <span class="mr-3 top-1/4 text-xl cursor-pointer transition-all duration-300" 
                @mouseover="componentStatus.rotation = 180" 
                @mouseleave="componentStatus.rotation = 0"
                @click.stop="close()"
                :style="{ 
                    transform: `rotate(${componentStatus.rotation}deg)`, 
                    opacity: componentStatus.buttonOpacity,
                    pointerEvents: componentStatus.buttonOpacity > 0 ? 'auto' : 'none' 
                }">
                <i class="fa fa-times"></i>
            </span>
        </div>
    </div>
</template>

<script lang="js" setup>
import { ref, reactive, onMounted } from 'vue';

const componentStatus = reactive({
    rotation: 0,
    buttonOpacity: 1,
    isVisible: false,
    isClosed: false,
    isMounting: true
});

onMounted(() => {
    setTimeout(() => {
        componentStatus.isVisible = true;
        setTimeout(() => {
            componentStatus.isMounting = false;
        }, 500);
    }, 100);
});

const close = () => {
    componentStatus.buttonOpacity = 0;

    setTimeout(() => {

        componentStatus.isVisible = false;

        setTimeout(() => {
            componentStatus.isClosed = true;
        }, 500);
    }, 300);
};
</script>

<style scoped>

:deep(html) {
    overflow-anchor: none;
}
</style>
