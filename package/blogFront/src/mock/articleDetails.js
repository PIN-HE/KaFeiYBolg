/**
 * @typedef {Object} MockMethod
 * @property {string} url
 * @property {string} method
 * @property {Function} response
 */

// 生成随机ID的函数
function generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const detailsList = [
    {
        id: "5c29cc418661443f8f922c48d37d970e",
        userid: "blogofficial1001",
        title: "博客使用声明及协议",
        authorName: "你也迷路了么-📷",
        authorAvatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1001",
        content: ">版本号:v1.0(20250806)\n>适用状态:纯前端静态博客(Mock数据模式)\n" +
            "一.数据声明\n1.1 当前模式\n- 所有数据均为本地生成的Mock数据,不涉及任何用户真实信息\n" +
            "- 文章/评论等内容均为功能演示,非真实观点\n" +
            "二.用户隐私\n" +
            "2.1 我们不会收集\n" +
            "- 您的姓名/邮箱/IP地址等任何身份信息\n" +
            "2.2 第三方依赖\n" +
            "- 本博客使用依赖如下\n" +
            "1. Vue 3\n" +
            "2. OpneTiny\n" +
            "3. Axios\n" +
            "4. TailWindCssV4\n" +
            "5. FontAwesome\n" +
            "6. VitePluginMock\n" +
            "7. VueRouter\n" +
            "8. Pinia\n" +
            "三. 免责条款\n" +
            "3.1 技术风险\n" +
            "- 当前静态版本无服务器崩溃风险,但浏览器兼容性问题可能导致样式异常\n" +
            "- 当前版本未适配移动端,请在PC端查看\n" +
            "- 未来版本接口已在文件中屏蔽:store\\*.js\n" +
            "3.2 内容责任\n" +
            "- 演示文章中的技术/观点不可直接用于生产环境\n" +
            "四. 开源协议\n" +
            "4.1 代码许可\n" +
            "- 项目代码遵循 [MIT Licenese](https://opensource.org/licenses/MIT)\n" +
            "- 您完全自助删除本文章",
        images: [
            {
                id: generateRandomId(),
                imgUrl: "http://117.72.67.30:30080/public/images/official/MIT.jpg"
            }
        ],
        interaction_metrics: [
            { "likes": 1240, "collections": 850, "watch": 2380 }
        ],
    },
    {
        id: "a7f3d2c8e9b014567890abcfed123456",
        userid: "blogofficial1001",
        title: "前端开发常用工具推荐与使用指南",
        authorName: "你也迷路了么 -📷",
        authorAvatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1001",
        content: "" +
            "一。代码编辑工具 \n1.1 主流编辑器 \n- VS Code：微软推出的轻量级编辑器，支持丰富的插件扩展，对前端开发友好度极高 \n" +
            "- WebStorm：JetBrains 旗下的专业 IDE，功能强大，集成了多种前端开发所需工具，但相对较占内存 \n" +
            "1.2 实用插件 \n- ESLint：用于代码检查，规范代码风格，减少错误 \n" +
            "- Prettier：自动格式化代码，保持团队代码风格一致 \n" +
            "- Live Server：实现热重载，实时预览网页效果 \n" +
            "二。调试工具 \n" +
            "2.1 浏览器内置工具 \n" +
            "- Chrome DevTools：功能全面，可用于调试 JavaScript、查看 DOM 结构、分析网络请求等 \n" +
            "- Firefox Developer Tools：对 CSS 调试支持较好，提供了一些独特的功能 \n" +
            "2.2 第三方调试工具 \n" +
            "- Vue Devtools：专门用于 Vue 项目的调试，可查看组件结构、状态等 \n" +
            "三。构建与打包工具 \n" +
            "3.1 常用工具 \n" +
            "- Vite：新一代前端构建工具，启动速度快，热更新性能好 \n" +
            "- Webpack：功能强大的模块打包器，可处理各种资源，配置灵活 \n" +
            "3.2 使用建议 \n" +
            "- 小型项目或快速原型开发推荐使用 Vite\n" +
            "- 大型复杂项目可考虑 Webpack，其丰富的插件能满足各种需求 \n" ,
        images: [
            {
                id: generateRandomId(),
                imgUrl: "https://img1.baidu.com/it/u=3214872965,2184842463&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800"
            }
        ],
        interaction_metrics: [
            { "likes": 980, "collections": 1200, "watch": 3560 }
        ]
    },
    {
        id: "66a696d32f52434d9ac7b4593d5be6eb",
        userid: "mockdata01",
        title: "春日午后",
        router: "/explore/person/mockdata01",
        content: "春日午后的阳光，是被筛过的金粉，懒洋洋地铺满窗台☀️。\n窗台上的多肉舒展着叶片，绒毛上沾着细碎的光，旁边的玻璃杯里，柠檬片在水中慢慢打转，漾出浅浅的黄。楼下的长椅上，有人捧着书打盹，书页被风掀得哗哗响，惊飞了停在椅背上的麻雀🐦。\n不远处的草坪上，小朋友追着泡泡跑，透明的泡泡裹着阳光，炸开时溅起一串银铃似的笑。街角的咖啡店飘出拿铁香☕，\n穿白衬衫的店员正往门口的花箱里插新到的洋甘菊，鹅黄的花瓣碰在一起，像在说悄悄话。骑着自行车的老人从路边经过，车筐里的香椿芽冒出嫩红的尖，车铃叮铃铃响，惊得墙根的蒲公英撑开了小伞🌂。\n书房的藤椅被晒得暖暖的，蜷在上面打个盹，梦里都是青草香。醒来时发现，猫咪正踩着阳光，把影子投在稿纸上，像幅歪歪扭扭的小画🐾。\n风从纱窗钻进来，带着楼下玉兰的甜，混着远处隐约的风筝线轴声，把整个午后泡得软软的，像块快要化掉的黄油曲奇🍪。",
        images: [
            {
                id: generateRandomId(),
                imgUrl: "https://img0.baidu.com/it/u=1485385418,1951180021&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1084"
            },
            {
                id: generateRandomId(),
                imgUrl: "https://img0.baidu.com/it/u=1132493,3179564437&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=890"
            }
        ],
        createTime: "1754368487297",
        ip: "上海",
        authorName: "野舟",
        authorAvatar: "https://img1.baidu.com/it/u=267452507,1149593434&fm=253&app=138&f=JPEG?w=800&h=800",
        interaction_metrics: [
            { "likes": 1240, "collections": 850, "watch": 2380 }
        ],
    },
    {
        id: "77b707e43g63545e0bd8c5604e6cf7fc",
        userid: "mockdata02",
        title: "夏夜鸣蝉",
        authorName: "星子",
        router: "/explore/person/mockdata02",
        content: "夕阳把最后一缕金辉揉进池塘里，荷叶上的水珠便成了碎钻💎\n 蝉鸣声是从老槐树梢头漫下来的，先是一只试探着开嗓，像拧亮了某个生锈的旋钮，吱呀一声划破暮色。接着，东头的梧桐，西墙的石榴，都被这声线点燃了🔥\n 奶奶摇着蒲扇坐在竹椅上，蒲扇边缘磨出了毛边。这是秋蝉了，叫不了几日啦。 她说着，往我手里塞了块冰镇西瓜。瓜瓤红得淌蜜，甜汁顺着手腕滴在青石板上，洇出小小的深色圆点🍉\n 我抬头看树，墨绿的叶隙间藏着星星点点的亮。蝉声忽而高亢，像要刺破夜空；忽而低回，似在与晚风私语。远处传来几声犬吠，更衬得这蝉鸣像一场盛大的独奏🎶\n 露水渐渐重了，打湿了晾在竹竿上的白衬衫。蝉声也慢慢稀了，像戏台散场后，零星的脚步渐远。奶奶收起蒲扇，睡吧，明早蝉儿还会叫的。\n 月光漫过窗棂，落在枕边。恍惚间，那蝉鸣还在耳边轻轻打着旋，像个温柔的梦🌙",
        authorAvatar: "https://img0.baidu.com/it/u=3600954679,641662266&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        images: [
            {
                id: generateRandomId(),
                imgUrl: "https://img2.baidu.com/it/u=2536090684,3864602637&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            },
            {
                id: generateRandomId(),
                imgUrl: "https://img2.baidu.com/it/u=3407892438,3594417869&fm=253&fmt=auto&app=120&f=JPEG?w=911&h=500",
            }, {
                id: generateRandomId(),
                imgUrl: "https://img1.baidu.com/it/u=1966514351,683076959&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889",
            }
        ],
        createTime: "1754368487297",
        ip: "江苏",
        interaction_metrics: [
            { "likes": 980, "collections": 650, "watch": 1850 }
        ],
    },
    {
        id: "88c818f54h74656f1ce9d6715f7dg8gd",
        userid: "mockdata03",
        title: "秋日私语",
        authorName: "风吟",
        authorAvatar: "https://img0.baidu.com/it/u=3196617431,1263013381&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        content: "占位文章",
        router: "/explore/person/mockdata03",
        images: [
            {
                id: generateRandomId(),
                imgUrl: "https://img0.baidu.com/it/u=920781612,4073209747&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=973",
            },
            {
                id: generateRandomId(),
                imgUrl: "https://img0.baidu.com/it/u=415075381,860660971&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=891https://img0.baidu.com/it/u=412930801,3086374506&fm=253&fmt=auto&app=138&f=JPEG?w=783&h=500",
            },
            {
                id: generateRandomId(),
                imgUrl: "https://img1.baidu.com/it/u=3775514197,2754993483&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=999"
            }
        ],
        interaction_metrics: [
            { "likes": 1560, "collections": 1020, "watch": 3200 }
        ],
    },
    {
        id: "99d929g65i85767g2df0e7826g8eh9eh",
        userid: "mockdata04",
        title: "冬雪漫行",
        authorName: "雪落",
        authorAvatar: "https://img0.baidu.com/it/u=794816915,1474278636&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500",
        router: "/explore/person/mockdata04",

        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=10436468,3232141712&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=625" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=642049855,688020667&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=625" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=549774651,413606753&fm=253&fmt=auto&app=138&f=JPEG?w=748&h=500" }
        ],
        interaction_metrics: [
            { "likes": 2100, "collections": 1350, "watch": 4500 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "00e030h76j96878h3eg1f8937h9fi0fi",
        userid: "mockdata05",
        title: "街角咖啡店",
        authorName: "街角咖啡",
        authorAvatar: "https://img1.baidu.com/it/u=955819401,4035091395&fm=253&fmt=auto&app=120&f=JPEG?w=504&h=500",
        router: "/explore/person/mockdata05",

        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=883613192,2586717582&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=3636157823,3433588669&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=996" },
        ],
        interaction_metrics: [
            { "likes": 850, "collections": 520, "watch": 1600 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "11f141i87k07989i4fh2g9048i0gj1gj",
        userid: "mockdata06",
        title: "老书店的下午",
        authorName: "书虫",
        authorAvatar: "https://img0.baidu.com/it/u=501124667,542221725&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata06",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=999036737,1011328126&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1044" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=943368082,3246239792&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=519279568,3930172580&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=4202407340,2353342534&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667" }
        ],
        interaction_metrics: [
            { "likes": 1320, "collections": 980, "watch": 2800 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "22g252j98l18090j5gi3h0159j1hk2hk",
        userid: "mockdata07",
        title: "海边日落",
        authorName: "浪声",
        authorAvatar: "https://img2.baidu.com/it/u=1669558568,1907520179&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata07",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2697205601,1325823271&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=2028486710,2424621131&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" },
        ],
        interaction_metrics: [
            { "likes": 2500, "collections": 1780, "watch": 5200 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "33h363k09m29101k6hj4i1260k2il3il",
        userid: "mockdata08",
        title: "雨中漫步",
        authorName: "雨巷",
        authorAvatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata08",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=3785244936,2149941185&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
        ],
        interaction_metrics: [
            { "likes": 1120, "collections": 750, "watch": 2300 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "44i474l10n30212l7ik5j2371l3jm4jm",
        userid: "mockdata09",
        title: "山间晨雾",
        authorName: "云深",
        authorAvatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500https://img0.baidu.com/it/u=2705597246,2913057507&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
        router: "/explore/person/mockdata09",
        content: "",
        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=351232427,625125731&fm=253&fmt=auto?w=1140&h=760" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=412340831,3899181803&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=694" },
        ],
        interaction_metrics: [
            { "likes": 1850, "collections": 1200, "watch": 3800 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "55j585m21o41323m8jl6k3482m4kn5kn",
        userid: "mockdata10",
        title: "深夜食堂",
        authorName: "烟火",
        authorAvatar: "https://img0.baidu.com/it/u=2042429186,2063311112&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata10",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=2564541710,3703185756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=270058477,2586667655&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=910" },
        ],
        interaction_metrics: [
            { "likes": 1680, "collections": 1050, "watch": 3200 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "66k696n32p52434n9km7l4593n5lo6lo",
        userid: "mockdata11",

        title: "老街记忆",
        authorName: "时光",
        authorAvatar: "https://img2.baidu.com/it/u=3966298223,1098975419&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata11",

        content: "占位文章",

        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=2134734085,315249712&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=3640269093,1303383863&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=888" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=4221189737,1755209683&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1035" },
        ],
        interaction_metrics: [
            { "likes": 1420, "collections": 890, "watch": 2900 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "77l707o43q63545o0ln8m5604o6mp7mp",
        userid: "mockdata12",
        title: "猫咪午后",
        authorName: "喵星人",
        authorAvatar: "https://img1.baidu.com/it/u=4166756647,3873081175&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata12",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=4123549861,3000765141&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1215" },
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=3105028921,3163191037&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1067" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2649545535,3124970591&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=850" },
        ],
        interaction_metrics: [
            { "likes": 2800, "collections": 2100, "watch": 6500 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "88m818p54r74656p1mo9n6715p7nq8nq",
        userid: "mockdata13",

        title: "花开时节",
        authorName: "花匠",
        authorAvatar: "https://img1.baidu.com/it/u=1010952571,1166529770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata13",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=2469293848,113875545&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=1208390344,539428288&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1082" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=699672500,128607712&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750" },
        ],
        interaction_metrics: [
            { "likes": 1950, "collections": 1320, "watch": 4100 }
        ],

    },
    {
        id: "99n929q65s85767q2np0o7826q8or9or",
        userid: "mockdata14",
        title: "图书馆角落",
        authorName: "墨香",
        authorAvatar: "https://img1.baidu.com/it/u=2674488891,4039967979&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata14",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=333676598,648194248&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500" },
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=3355959370,2173113449&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
        ],
        interaction_metrics: [
            { "likes": 1280, "collections": 950, "watch": 2600 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "00o030r76t96878r3oq1p8937r9ps0ps",
        userid: "mockdata15",
        title: "晨跑日记",
        authorName: "追风",
        authorAvatar: "https://img0.baidu.com/it/u=1492885614,3495424672&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata15",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=1447305708,1820388977&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=886" },
        ],
        interaction_metrics: [
            { "likes": 850, "collections": 520, "watch": 1700 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "11p141s87u07989s4pr2q9048s0qt1qt",
        userid: "mockdata16",
        title: "手工时光",
        authorName: "巧手",
        authorAvatar: "https://img2.baidu.com/it/u=3122089012,838302386&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=374",
        router: "/explore/person/mockdata16",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2502849006,4292685227&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=888" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=29784668,4049597371&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=889" },
        ],
        interaction_metrics: [
            { "likes": 1560, "collections": 1180, "watch": 3200 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "22q252t98v18090t5qs3r0159t1ru2ru",
        userid: "mockdata17",
        title: "星空之下",
        authorName: "摘星",
        authorAvatar: "https://img1.baidu.com/it/u=192043213,4242292213&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499",
        router: "/explore/person/mockdata17",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=3623044114,200433506&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2713638410,1278523309&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=750" },
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=3161892702,4287980699&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1333" },
        ],
        interaction_metrics: [
            { "likes": 2300, "collections": 1650, "watch": 4800 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "33r363u09w29101u6rt4s1260u2sv3sv",
        userid: "mockdata18",
        title: "烘焙乐趣",
        authorName: "甜星",
        authorAvatar: "https://img0.baidu.com/it/u=3422754130,3433799279&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata18",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=4064675946,4250854391&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=665" },
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=453252322,3363068806&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500" },
        ],
        interaction_metrics: [
            { "likes": 1780, "collections": 1250, "watch": 3600 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "44s474v10x30212v7ru5t2371v3sw4sw",
        userid: "mockdata19",
        title: "古镇旅行",
        authorName: "行者",
        authorAvatar: "https://img2.baidu.com/it/u=3020394624,3688665554&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata19",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img0.baidu.com/it/u=2121600486,435895073&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=667" },
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2869236346,3610600897&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=738" },
        ],
        interaction_metrics: [
            { "likes": 2100, "collections": 1480, "watch": 4300 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "55t585w21y41323w8sv6u3482w4tx5tx",
        userid: "mockdata20",
        title: "午后茶香",
        authorName: "茶客",
        authorAvatar: "https://img0.baidu.com/it/u=910967447,1455761573&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata20",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img1.baidu.com/it/u=2861016645,755993307&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667" },
        ],
        interaction_metrics: [
            { "likes": 1350, "collections": 920, "watch": 2700 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    },
    {
        id: "66u696x32z52434x9tw7v4593x5uy6uy",
        userid: "mockdata21",
        title: "吉他弹唱",
        authorName: "乐手",
        authorAvatar: "https://img1.baidu.com/it/u=845293298,745564448&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        router: "/explore/person/mockdata21",
        content: "占位文章",
        images: [
            { id: generateRandomId(), imgUrl: "https://img2.baidu.com/it/u=620662210,2352311122&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=753" },
        ],
        interaction_metrics: [
            { "likes": 3200, "collections": 2500, "watch": 7800 }
        ],
        createTime: "2023-08-01",
        ip: "北京"
    }
]

// 模拟获取文章详情接口
const getArticleDetail = {
    url: '/api/article/:id',
    method: 'get',
    response: (params) => {
        const url = params.url
        const id = url.split('/').pop()
        const article = detailsList.find(article => article.id === id)
        console.log("请求的ID:" + id);
        console.log(params.url)
        if (article) {
            return {
                code: 200,
                message: 'success',
                data: article
            }
        } else {
            return {
                code: 404,
                message: '文章不存在',
            }
        }
    }
}

// 导出mock方法
export default [getArticleDetail];
