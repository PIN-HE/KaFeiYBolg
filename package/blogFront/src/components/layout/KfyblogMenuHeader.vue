<template>
    <div class="header-menu">
        <div class="menu-box flex flex-row justify-around items-center fixed w-full
        ">
            <div class="menu-logo flex flex-row justify-center items-center">
                <div class="typeface-img">
                    <img src="../../assets/typeface.png">
                </div>
            </div>
            <div class="kfyblog-menu-header-search pt-1 pb-1 w-xs md:w-lg flex justify-center relative" ref="originRef">
                <div class="flex flex-row items-center w-full bg-stone-200/30 rounded-full">
                    <form class="w-full">
                        <input type="text" name="searchInput" id="searchInput" autocomplete="off" placeholder="搜索博客"
                            class="w-full p-2 pr-0 pl-6 placeholder:text-stone-300 outline-0 caret-blue-500
                          text-stone-400 font-light
                         " @focus="handFocus()" @blur="handBlur">
                    </form>
                    <div class=" pr-1 pl-1">
                        <span
                            class="text-xl w-5 h-full cursor-pointer mr-2 text-stone-400/50  flex items-center justify-center">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>
                <!-- 猜你想搜 -->
                <Teleport to="body" v-if="showGuess">
                    <div class="search__guess h-auto" :style="teleportRef">
                        <div class="guess__container rounded-xl h-auto w-full bg-white border shadow-md
                        border-gray-300/30 p-1 tranistion-all ease-in-out duration-300
                        ">
                            <div class="guess__tips text-xs px-5 py-2 text-gray-400/50">
                                <span>猜你想搜</span>
                            </div>
                            <!-- loading -->
                            <div class="guess__loading w-full h-40 flex flex-col justify-center items-center gap-2" v-if="loading">
                                <div class="loading__container relative w-2/5 h-2 bg-stone-200/30 rounded-full border border-gray-200">
                                    <span class="container-wave absolute w-1/6 h-full bg-white rounded-full "></span>
                                </div>
                                <div class="text-xs text-gray-300">正在加载……</div>
                            </div>
                            <!-- content -->
                            <div class="guess__content cursor-no-drop px-5 py-1 w-full h-auto hover:bg-gray-300/30 hover:rounded-md
                             font-harmonyos"
                            v-else
                            v-for="(item, index) in guessData" :key="index">
                                <span class="py-2">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </Teleport>
            </div>
            <div class="kfyblog-menu-header__actions flex flex-row gap-3">
                <button class=" cursor-no-drop py-2 px-4 hover:rounded-full hover:bg-gray-300/40 ">创作中心</button>
                <button class=" cursor-no-drop py-2 px-4 hover:rounded-full hover:bg-gray-300/40 ">业务合作</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue'
import { debounce } from '../../../../shard/utils/debounce'
import axios from 'axios'
const originRef = ref(null)
const teleportRef = ref({})
const showGuess = ref(false)
const loading = ref(true)
const guessData = ref([])


const computedRef = () => {
    if (!originRef.value) return {}
    const rect = originRef.value.getBoundingClientRect();
    return {
        position: 'absolute',
        width: `${rect.width}px`,
        top: `${rect.top + rect.height}px`,
        left: `${rect.left}px`,
        zIndex: '30'
    }
}

const resizeRef = debounce(()=>{
    teleportRef.value = computedRef()
},{delay: 10})

const handFocus = ()=>{
    showGuess.value = true;
    const getData = async() =>{
        loading.value = true;
        try {
            const response = await axios({
                url: '/api/search/guess',
                method: 'get'
            })
            const {data} = response.data
            guessData.value = data;
            setTimeout(()=>{
                loading.value = false;
            },2000)
        } catch(e) {
            console.error('获取搜索建议失败:', e);
            loading.value = false;
        }
    }
    getData()
}

const handBlur = ()=>{
    setTimeout(()=>{
        showGuess.value = false
    },300)
}

onMounted(async () => {
    await nextTick()
    setTimeout(() => {
        teleportRef.value = computedRef()
    }, 10)

    window.addEventListener('resize', resizeRef)
})

onUnmounted(()=>{
    window.removeEventListener('resize', resizeRef)
})

</script>

<style scoped>
.container-wave{
    animation: wave-loading 1.5s infinite;
}

@keyframes wave-loading{
    from{
        transform: translateX(-100%);
    }
    to{
       transform: translateX(600%);
    }
}
</style>