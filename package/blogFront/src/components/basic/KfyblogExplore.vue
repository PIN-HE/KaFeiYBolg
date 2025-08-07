<template>
  <div class="kfyblog-explore">
    <div class="explore__channel__container px-6 pt-4">
      <!-- 频道切换 -->
      <div class="explore__channel__list flex gap-2">
        <div v-for="item in channelList" :key="item.id" class="explore__channel__item text-gray-500 hover:bg-gray-200/50 px-4 py-2 rounded-full"
        :class="{'bg-gray-200/50': route.query.channel_id == item.tag}">
          <router-link :to="{name:'explore',query:{channel_id:item.tag}}" 
           :class="{'item--active':route.query.channel_id == item.tag}" >
            {{item.name}}
          </router-link>
        </div>
      </div>
    </div>
    <!-- 没有内容 -->
    <div v-if="hasMore" class="text-gray-400 flex flex-col gap-2 items-center justify-center p-4">
      <img src="http://117.72.67.30:30080/public/images/official/20250805.svg" class="w-1/5"/>
      <span>当前栏目下暂无更多笔记,快来发布第一条吧!</span>
    </div>
    <!-- 瀑布流组件 -->
    <kfyblog-waterfall v-else :items="articleList" :gap="20" :has-more="hasMore" @open-modal="showModal = true"></kfyblog-waterfall>
  </div>
  <!-- 弹窗组件 -->
  <div class="kfyblog-explore-modal relative">
      <component :is="KfyblogModal" v-if="showModal" @close-modal="showModal = false"></component>
  </div>
</template>
<script lang="js" setup>
import KfyblogWaterfall from '../KfyblogWaterfall.vue';
import KfyblogModal from '../card/KfyblogModal.vue';
import axios from 'axios';
import { onMounted, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const showModal = ref(false)
const articleList = ref([]);
const hasMore = computed(()=>{
  return articleList.value.length <= 0
})
const channelList = ref(
[ 
  {id:1,name:"公告",tag:'announcement'},
  {id:1,name:"推荐",tag:'recommend'},
  {id:2,name:"穿搭",tag:'fashion'},
  {id:3,name:"美食",tag:'food'},
  {id:4,name:"彩妆",tag:'cosmetic'},
  {id:5,name:"影视",tag:'video'},
  {id:6,name:"职场",tag:'work'},
  {id:7,name:"情感",tag:'emotion'},
  {id:8,name:"家居",tag:'home'},
  {id:9,name:"游戏",tag:'game'},
  {id:10,name:"旅行",tag:'travel'},
  {id:11,name:"健身",tag:'fitness'},]
);

const initialArticle = () => {
  const getArticleList = async () => {
    try {
      const response = await axios({
        url: "/api/articles",
        method: "get",
        params:{
          channel_id: route.query.channel_id
        }
      })
     console.log(response.data.data);
     setTimeout(()=>{
      articleList.value =  response.data.data;
     },100)
    } catch (e) {

    }
  }
  getArticleList()
}

watch(
  ()=> route.query.channel_id,
  (newVal,oldVal)=>{
    if(newVal != oldVal){
      initialArticle()
    }
  }
)

onMounted(() => {
  console.log(hasMore.value)
  initialArticle()
})

</script>

<style scoped>
.item--active{
  color: var(--color-black);
}
</style>