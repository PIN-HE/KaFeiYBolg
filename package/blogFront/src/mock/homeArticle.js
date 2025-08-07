// src/mock/homeArticle.js
/**
 * @typedef {Object} MockMethod
 * @property {string} url - 请求URL
 * @property {string} method - 请求方法
 * @property {Function} response - 响应函数
 */

// 模拟文章数据
const articles = [
  {
    id: "5c29cc418661443f8f922c48d37d970e",
    userid: "blogofficial1001",
    title: "博客使用声明及协议",
    authorName: "你也迷路了么-📷",
    authorAvatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
    router: "/explore/person/blogofficial1001",
    tagUrl: "http://117.72.67.30:30080/public/images/official/officer-text.png",
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=3165792660,1645002032&fm=253&fmt=auto&app=138&f=PNG?w=711&h=400",
    interaction_metrics: [
      { "likes": 1240, "collections": 850, "watch": 2380 }
    ],
    channel_id: "announcement"
  },
  {
    id: "a7f3d2c8e9b014567890abcfed123456",
    userid: "blogofficial1001",
    title: "前端常用开发工具与使用指南",
    authorName: "你也迷路了么-📷",
    authorAvatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
    router: "/explore/person/blogofficial1001",
    tagUrl:  "http://117.72.67.30:30080/public/images/official/officer-text.png",
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img1.baidu.com/it/u=3214872965,2184842463&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
    interaction_metrics: [
      { "likes": 980, "collections": 1200, "watch": 3560 }
    ],
    channel_id: "recommend"

  },
  {
    id: "66a696d32f52434d9ac7b4593d5be6eb",
    userid: "mockdata01",
    title: "春日午后",
    authorName: "野舟",
    authorAvatar: "https://img1.baidu.com/it/u=267452507,1149593434&fm=253&app=138&f=JPEG?w=800&h=800",
    router: "/explore/person/mockdata01",

    tagUrl: "http://117.72.67.30:30080/public/images/official/recommend-text.png",
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=1663900307,783039371&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=694",
    interaction_metrics: [
      { "likes": 1240, "collections": 850, "watch": 2380 }
    ],
    channel_id: "recommend"
  },
  {
    id: "77b707e43g63545e0bd8c5604e6cf7fc",
    userid: "mockdata02",

    title: "夏夜蝉鸣",
    authorName: "星子",
    authorAvatar: "https://img0.baidu.com/it/u=3600954679,641662266&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata02",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=481940154,3978919427&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=805",
    interaction_metrics: [
      { "likes": 980, "collections": 650, "watch": 1850 }
    ],
    channel_id: "recommend"
  },
  {
    id: "88c818f54h74656f1ce9d6715f7dg8gd",
    userid: "mockdata03",
    title: "秋日私语",
    authorName: "风吟",
    authorAvatar: "https://img0.baidu.com/it/u=3196617431,1263013381&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata03",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://qcloud.dpfile.com/pc/7KNMeuIntULjBoCKK_iVAj2D2yqbcuLFhug1Ozi6imN9nywXzr4xhqjJaNVPpk4Y.jpg",
    interaction_metrics: [
      { "likes": 1560, "collections": 1020, "watch": 3200 }
    ],
    channel_id: "recommend"
  },
  {
    id: "99d929g65i85767g2df0e7826g8eh9eh",
    userid: "mockdata04",
    title: "冬雪漫行",
    authorName: "雪落",
    authorAvatar: "https://img0.baidu.com/it/u=794816915,1474278636&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500",
    router: "/explore/person/mockdata04",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=96189793,4227896963&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667",
    interaction_metrics: [
      { "likes": 2100, "collections": 1350, "watch": 4500 }
    ],
    channel_id: "travel"
  },
  {
    id: "00e030h76j96878h3eg1f8937h9fi0fi",
    userid: "mockdata05",
    title: "街角咖啡店",
    authorName: "街角咖啡",
    authorAvatar: "https://img1.baidu.com/it/u=955819401,4035091395&fm=253&fmt=auto&app=120&f=JPEG?w=504&h=500",
    router: "/explore/person/mockdata05",
    tagUrl: "http://117.72.67.30:30080/public/images/official/officer-text.png",
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://qcloud.dpfile.com/pc/zimBjPBOhG9SRLCgDraPm6vOlkYjjIwzVsHR-QuhI-jwZza6SGtwE_7UzVYmztn9.jpg",
    interaction_metrics: [
      { "likes": 850, "collections": 520, "watch": 1600 }
    ],
    channel_id: "food"
  },
  {
    id: "11f141i87k07989i4fh2g9048i0gj1gj",
    userid: "mockdata06",
    title: "老书店的下午",
    authorName: "书虫",
    authorAvatar: "https://img0.baidu.com/it/u=501124667,542221725&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata06",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=3485567902,1879111903&fm=253&fmt=auto&app=120&f=JPEG?w=625&h=500",
    interaction_metrics: [
      { "likes": 1320, "collections": 980, "watch": 2800 }
    ],
    channel_id: "emotion"
  },
  {
    id: "22g252j98l18090j5gi3h0159j1hk2hk",
    userid: "mockdata07",
    title: "海边日落",
    authorName: "浪声",
    authorAvatar: "https://img2.baidu.com/it/u=1669558568,1907520179&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata07",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=2117592658,1859926159&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
    interaction_metrics: [
      { "likes": 2500, "collections": 1780, "watch": 5200 }
    ],
    channel_id: "recommend"
  },
  {
    id: "33h363k09m29101k6hj4i1260k2il3il",
    userid: "mockdata08",

    title: "雨中漫步",
    authorName: "雨巷",
    authorAvatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata08",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=3935742108,1610881978&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750",
    interaction_metrics: [
      { "likes": 1120, "collections": 750, "watch": 2300 }
    ],
    channel_id: "recommend"
  },
  {
    id: "44i474l10n30212l7ik5j2371l3jm4jm",
    userid: "mockdata09",

    title: "山间晨雾",
    authorName: "云深",
    authorAvatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500https://img0.baidu.com/it/u=2705597246,2913057507&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
    router: "/explore/person/mockdata09",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=2162088265,3873134177&fm=253&fmt=auto&app=120&f=JPEG?w=1199&h=800",
    interaction_metrics: [
      { "likes": 1850, "collections": 1200, "watch": 3800 }
    ],
    channel_id: "recommend"
  },
  {
    id: "55j585m21o41323m8jl6k3482m4kn5kn",
    userid: "mockdata10",

    title: "深夜食堂",
    authorName: "烟火",
    authorAvatar: "https://img0.baidu.com/it/u=2042429186,2063311112&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata10",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=1632822011,3088591904&fm=253&fmt=auto&app=120&f=JPEG?w=600&h=412",
    interaction_metrics: [
      { "likes": 1680, "collections": 1050, "watch": 3200 }
    ],
    channel_id: "food"
  },
  {
    id: "66k696n32p52434n9km7l4593n5lo6lo",
    userid: "mockdata11",
    title: "老街记忆",
    authorName: "时光",
    authorAvatar: "https://img2.baidu.com/it/u=3966298223,1098975419&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata11",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=2106748860,1225526725&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500",
    interaction_metrics: [
      { "likes": 1420, "collections": 890, "watch": 2900 }
    ],
    channel_id: "travel"

  },
  {
    id: "77l707o43q63545o0ln8m5604o6mp7mp",
    userid: "mockdata12",
    title: "猫咪午后",
    authorName: "喵星人",
    authorAvatar: "https://img1.baidu.com/it/u=4166756647,3873081175&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata12",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=1137560442,1114119482&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=522",
    interaction_metrics: [
      { "likes": 2800, "collections": 2100, "watch": 6500 }
    ],
    channel_id: "fashion"
  },
  {
    id: "88m818p54r74656p1mo9n6715p7nq8nq",
    userid: "mockdata13",
    title: "花开时节",
    authorName: "花匠",
    authorAvatar: "https://img1.baidu.com/it/u=1010952571,1166529770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata13",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img1.baidu.com/it/u=2828675019,133562364&fm=253&fmt=auto&app=120&f=JPEG?w=850&h=500",
    interaction_metrics: [
      { "likes": 1950, "collections": 1320, "watch": 4100 }
    ],
    channel_id: "recommend"
  },
  {
    id: "99n929q65s85767q2np0o7826q8or9or",
    userid: "mockdata14",
    title: "图书馆角落",
    authorName: "墨香",
    authorAvatar: "https://img1.baidu.com/it/u=2674488891,4039967979&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata14",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img1.baidu.com/it/u=3375968925,1930778214&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
    interaction_metrics: [
      { "likes": 1280, "collections": 950, "watch": 2600 }
    ],
    channel_id: "emotion"
  },
  {
    id: "00o030r76t96878r3oq1p8937r9ps0ps",
    userid: "mockdata15",
    title: "晨跑日记",
    authorName: "追风",
    authorAvatar: "https://img0.baidu.com/it/u=1492885614,3495424672&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata15",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=3438585231,1243302010&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500",
    interaction_metrics: [
      { "likes": 850, "collections": 520, "watch": 1700 }
    ],
    channel_id: "fitness"
  },
  {
    id: "11p141s87u07989s4pr2q9048s0qt1qt",
    userid: "mockdata16",
    title: "手工时光",
    authorName: "巧手",
    authorAvatar: "https://img2.baidu.com/it/u=3122089012,838302386&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=374",
    router: "/explore/person/mockdata16",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=3295936520,3774706129&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
    interaction_metrics: [
      { "likes": 1560, "collections": 1180, "watch": 3200 }
    ],
    channel_id: "recommend"
  },
  {
    id: "22q252t98v18090t5qs3r0159t1ru2ru",
    userid: "mockdata17",
    title: "星空之下",
    authorName: "摘星",
    authorAvatar: "https://img1.baidu.com/it/u=192043213,4242292213&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499",
    router: "/explore/person/mockdata17",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=2650471751,1935740133&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    interaction_metrics: [
      { "likes": 2300, "collections": 1650, "watch": 4800 }
    ],
    channel_id: "recommend"
  },
  {
    id: "33r363u09w29101u6rt4s1260u2sv3sv",
    userid: "mockdata18",
    title: "烘焙乐趣",
    authorName: "甜星",
    authorAvatar: "https://img0.baidu.com/it/u=3422754130,3433799279&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata18",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=453252322,3363068806&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500",
    interaction_metrics: [
      { "likes": 1780, "collections": 1250, "watch": 3600 }
    ],
    channel_id: 'food'
  },
  {
    id: "44s474v10x30212v7ru5t2371v3sw4sw",
    userid: "mockdata19",
    title: "古镇旅行",
    authorName: "行者",
    authorAvatar: "https://img2.baidu.com/it/u=3020394624,3688665554&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata19",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=1785698224,1001499283&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
    interaction_metrics: [
      { "likes": 2100, "collections": 1480, "watch": 4300 }
    ],
    channel_id: "travel"
  },
  {
    id: "55t585w21y41323w8sv6u3482w4tx5tx",
    userid: "mockdata20",
    title: "午后茶香",
    authorName: "茶客",
    authorAvatar: "https://img0.baidu.com/it/u=910967447,1455761573&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/mockdata20",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img0.baidu.com/it/u=751911927,2198240473&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=650",
    interaction_metrics: [
      { "likes": 1350, "collections": 920, "watch": 2700 }
    ],
    channel_id: "recommend"
  },
  {
    id: "66u696x32z52434x9tw7v4593x5uy6uy",
    userid: "mockdata21",
    title: "吉他弹唱",
    authorName: "乐手",
    authorAvatar: "https://img1.baidu.com/it/u=845293298,745564448&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    router: "/explore/person/66u696x32z52434x9tw7v4593x5uy6uy",
    tagUrl: null,
    videoMode: false,
    videoUrl: null,
    imageMode: true,
    imageUrl: "https://img2.baidu.com/it/u=2600234169,214189237&fm=253&fmt=auto&app=120&f=JPEG?w=878&h=500",
    interaction_metrics: [
      { "likes": 3200, "collections": 2500, "watch": 7800 }
    ],
    channel_id: "emotion"
  }
];

// 模拟获取文章列表接口
const getArticles = {
  url: '/api/articles',
  method: 'get',
  response: (config) => {
    const { channel_id } = config.query
    if (!channel_id) {
      return {
        code: 200,
        message: "success",
        data: articles
      }
    };

    const filteredArticles = articles.filter(article =>
      article.channel_id === channel_id);
    return {
      code: 200,
      message: "success",
      data: filteredArticles
    }
  }
};
// 模拟获取单个用户的文章列表
const getUserArticles = {
  url: '/api/articles/user/:userid',
  method: 'get',
  response: ((params) => {
    const url = params.url;
    const userid = url.split('/').pop()
    const userArticles = articles.filter(article => article.userid === userid)
    return {
      code: 200,
      message: 'success',
      data: userArticles
    }

  })
}

// 模拟搜索建议接口
const getSearchGuess = {
  url: '/api/search/guess',
  method: 'get',
  response: () => {
    const guessData = [
      '周末聚餐食谱大全,简单易做',
      '秋季穿搭,小个子显高技巧',
      '租房小改造,低成本布置',
      '周末短途旅行,周边游推荐',
      '职场沟通技巧,新人必备',
      '猫咪 新手入门,30分钟学会基础操作',
      '猫咪常见疾病,家庭护理指南',
      '阳台种菜,适合新手的5种蔬菜'
    ];

    return {
      code: 200,
      message: 'success',
      data: guessData
    };
  }
};

// 导出mock方法
/** @type {MockMethod[]} */
export default [getArticles, getSearchGuess, getUserArticles];