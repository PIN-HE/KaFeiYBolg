<template>
    <div class="kfyblog-aside-footer p-4 text-xs text-gray-400 block">
        <div class="kfyblog-aside-footer-item flex flex-col gap-1">
            <p class="kfyblog-aside__item-icp">
                <a href="https://beian.miit.gov.cn" target="_blank">{{ "备案号预留插槽" }}</a>
                |
                <a href="https://beian.mps.gov.cn" target="_blank">{{ "公安网备号预留插槽" }}</a>
            </p>
            <!-- 版权 -->
            <div class="kfyblog-aside__item-copyright flex flex-col">
                <p>{{ "©2025 KaFeiY的博客 保留所有权利" }} </p>
                <p>{{ "内容基于个人实践,不构成专业建议" }}</p>
            </div>
            <!-- 声明 -->
            <p class="kfy-asdie__item-declaration">
                {{ "UI参考小红书设计信息元素,仅供学习使用,不建议直接用于生产环境" }}
            </p>
            <!-- 开源 -->
            <p class="kfy-asdie__item-open-source">
                {{ "本项目基于Vue3  + TailWindCSSV4.0等技术栈" }} | 
                <a>{{ "(开源仓库协议)MIT License" }}</a>
            </p>
            <!-- 提示 -->
            <p class="kfy-asdie__item-tips">
                {{ "提示: 当前项目数据层全部使用Mock, 不包含后端接口" }} |
                {{ "项目图片部分采用" }} <a>{{ "百度图库" }}</a>
                {{ "提供技术服务" }}
            </p>
        </div>
    </div>
</template>
<script lang="js" setup>
const props = defineProps({
    item: {
        type: Array,
        default: () =>[],
    }
})
</script>