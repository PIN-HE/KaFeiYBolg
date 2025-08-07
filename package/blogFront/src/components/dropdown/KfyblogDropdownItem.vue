<!-- 
    作者：kafeiy 
    创建时间：2025-07-18
    标签：vue3 组合式API 下拉列表项 TailWindCSSV4.0
    描述：下拉列表项组件，用于展示列表项。
    组件参数：
    1. label: 列表项标签，用于展示在列表项上。
    2. iconColor: 图标颜色，默认为"text-black"。
    3. iconType: 图标类型，默认为""。
    4. link: 链接地址，默认为""。
    5. router: 是否使用路由跳转，默认为false。
    6. to: 路由跳转地址，默认为""。
 -->
<template>
    <div class=" text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-100/30 rounded-2xl p-1 font-harmonyos">
        <span class="text-xs pr-1">
            <slot name="icon">
                <i :class="{
                    [props.iconColor] : true,
                    [props.iconType] : true
                }"
                ></i>
            </slot>
        </span>    
        <a v-if="!props.router" :href="props.link" target="_blank"
                v-bind="$attrs" rel="noopener noreferrer">
                <span>
                    <slot>{{ props.label }}</slot>
                </span>
            </a>
            <router-link v-else
                :to="props.to"
                v-bind="$attrs">
                <span>
                    <slot>{{ props.label }}</slot>
                </span>
            </router-link>
    </div>
</template>

<script setup lang="js">
import { RouterLink } from 'vue-router';

const props = defineProps({
    label :{
        type: [String, Number],
        default: ""
    },
    iconColor :{
        type: String,
        default: "text-black"
    },
    iconType : {
        type: String,
        default : ""
    },
    link: {
        type: String,
        default: ''
    },
    router :{
        type: Boolean,
        default: false,
    },
    to :{
        type:[String, Object],
        required: (props) => props.router,
        default: ''
    },
    ...RouterLink.props,
})

</script>

<style scoped>

</style>