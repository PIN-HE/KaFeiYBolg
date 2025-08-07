/**
 * @typedef {Object} MockMethod
 * @property {string} url - 请求URL
 * @property {string} method - 请求方法
 * @property {Function} response - 响应函数
 */

const person = [
    {
        userId: "blogofficial1001",
        username: "你也迷路了么-📷",
        brief: "\"博客官方账号,专注分享优质内容与创作技巧\"\n" +
            "致力于打造友好的交流社区.记录生活点滴与思想火化\n" +
            "期待与,每一位创作者共同成长",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        tag: [
            { name: "官方团队账号", type: 'official' },
            { name: "科技区博主", type: 'format' },
            { name: "优质内容创作者", type: 'interact' },
            { name: "努力编码ing", type: 'status' },
            { name: "哇!粉丝破万", type: 'vertical' },
            { name: "博客平台客服官方", type: 'official' }
        ],
        interaction: [
            { follow: 5, fans: 182804, praise: 2090 }
        ],
        isLock: true,
        isOfficial: true,
        ip: "南京"
    }, 
    {
        userId: "mockdata01",
        username: "野舟",
        avatar: "https://img1.baidu.com/it/u=267452507,1149593434&fm=253&app=138&f=JPEG?w=800&h=800",
        tagUrl: "http://117.72.67.30:30080/public/images/official/recommend-text.png",
        tag:[
            { name:"优质内容创作者", type:"interact" },
            { name:"种草区博主", type:"format" }
        ],
        interaction: [
            { follow: 1240, fans: 850, praise: 2380 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京"

    },
    {
        userId: "mockdata02",
        username: "星子",
        avatar: "https://img0.baidu.com/it/u=3600954679,641662266&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name:"佛系", type:"status" },
        ],
        interaction: [
            { follow: 60, fans: 20, praise: 200 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "甘肃"

    },
    {
        userId: "mockdata03",
        username: "风吟",
        avatar: "https://img0.baidu.com/it/u=3196617431,1263013381&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name:"山东卷饼天下第一" },
        ],
        interaction: [
            { follow: 1460, fans: 400, praise: 90 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "山东",
    },
    {
        userId: "mockdata04",
        username: "雪落",
        avatar: "https://img0.baidu.com/it/u=794816915,1474278636&fm=253&fmt=auto&app=138&f=JPEG?w=508&h=500",
        tag: [
            { name:"景点推荐达人", type:"interact" },
        ],
        interaction_metrics: [
            { follow: 801, fans: 1234, praise: 1243 }

        ],
        isLock: true,
        isOfficial: false,
        ip: "上海",

    },
    {
        userId: "mockdata05",
        username: "街角咖啡店",
        avatar: "https://img1.baidu.com/it/u=955819401,4035091395&fm=253&fmt=auto&app=120&f=JPEG?w=504&h=500",
        brief: "要来一杯冰美式么💗",
        tag: [
            { name:"街角咖啡官方店铺", type:"official" },
        ],
        interaction: [
            { follow: 13, fans: 1234, praise: 1243 }
        ],
        isLock: true,
        isOfficial: true,
        ip: "上海",
    },
    {
        userId: "mockdata06",
        username: "书虫",
        avatar: "https://img0.baidu.com/it/u=501124667,542221725&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name:"千粉里程碑", type:"vertical" },
        ],
        interaction: [
            { follow: 1320, fans: 1980, praise: 2800 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",
    },
    {
        userId: "mockdata07",
        username: "浪声",
        avatar: "https://img2.baidu.com/it/u=1669558568,1907520179&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name:"天蝎座" },
        ],
        interaction: [
            { follow: 254, fans: 45, praise: 123 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",

    },
    {
        userId: "mockdata08",
        username: "雨巷",
        avatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name: "2024你好!世界", type:"format" },

        ],
        interaction: [
            { follow: 254, fans: 45, praise: 123 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",
    },
    {
        userId: "mockdata09",
        username: "云深",
        avatar: "https://img1.baidu.com/it/u=710348308,2362073732&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name: "处女座" },
        ],
        interaction: [
            { follow: 77, fans: 23, praise: 123 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",

    },
    {
        userId: "mockdata10",
        username: "烟火",
        avatar: "https://img0.baidu.com/it/u=2042429186,2063311112&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name: "射手座" },
        ],
        interaction: [
            { follow: 3, fans: 2, praise: 10 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",

    },
    {
       
        userId: "mockdata11",
        username: "老街记忆",
        avatar: "https://img2.baidu.com/it/u=3966298223,1098975419&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        brief: "来北京走走",
        tag: [
            { name:"2024你好!北京", type:"format" },
            { name:"地域物质非遗传承人", type:"interact" },
        ],
        interaction: [
            { follow: 14, fans: 27, praise: 123 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",


    },
    {
        userId: "mockdata12",
        username: "猫咪午后",
        avatar: "https://img1.baidu.com/it/u=4166756647,3873081175&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name:"穿搭区博主", type:"format" },
        ],
        interaction: [
            { follow: 14, fans: 180, praise: 9012 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "江苏",

    },
    {
        userId: "mockdata13",
        username: "花匠",
        avatar: "https://img1.baidu.com/it/u=1010952571,1166529770&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name:"种草区博主", type:"format" },
            { name:"离线", type:"status" },
        ],
        interaction: [
            { follow: 14, fans: 2131, praise: 341 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "江苏",
    },
    {
        userId: "mockdata14",
        username: "墨香",
        avatar: "https://img1.baidu.com/it/u=2674488891,4039967979&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name:"狮子座" },
        ],
        interaction: [
            { follow: 190,fans: 1478, praise: 890 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",

    },
    {
        userId: "mockdata15",
        username: "追风",
        avatar: "https://img0.baidu.com/it/u=1492885614,3495424672&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        tag: [
            { name:"天蝎座" },
        ],
        interaction: [
            { follow: 70,fans: 2, praise: 90 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",
    },
    {
        userId: "mockdata16",
        username: "巧手",
        avatar: "https://img2.baidu.com/it/u=3122089012,838302386&fm=253&fmt=auto&app=138&f=JPEG?w=380&h=374",
        tag: [
            { name:"水瓶座" },
            { name: "手工区博主", type:"format" },
            { name: "善于分享", type:"status"}
        ],
        interaction: [
            { follow: 14, fans: 27, praise: 2740 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "新疆",

    },
    {
        userId: "mockdata17",
        username : "摘星",
        avatar: "https://img1.baidu.com/it/u=192043213,4242292213&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=499",
        tag:[
            {name: "摄影区博主",type:"format"},
            {name: "经常在线",type:"status"}
        ],
        interaction: [
            { follow: 24, fans: 180, praise: 3950 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "美国",
    },
    {
        userId: "mockdata18",
        username: "甜星",
        avatar: "https://img0.baidu.com/it/u=3422754130,3433799279&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name:"美食区博主", type:"format" },
            { name:"优质内容创作者", type:"interact" }
        ],
        interaction: [
            { follow: 90, fans: 801, praise: 3030 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "上海",
    },
    {
        userId: "mockdata19",
        username: "行者",
        avatar: "https://img2.baidu.com/it/u=3020394624,3688665554&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            { name:"旅行区博主", type:"format" },
        ],
        interaction: [
            { follow: 90, fans: 157, praise: 3580 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "安徽",
    },
    {
        userId: "mockdata20",
        username: "茶客",
        avatar: "https://img0.baidu.com/it/u=910967447,1455761573&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        interaction: [
            { follow: 54, fans: 80, praise: 2270 }
        ],
        isLock: true,
        isOfficial: false,
        ip: "北京",

    },
    {
        userId: "mockdata21",
        username : "乐手",
        avatar: "https://img1.baidu.com/it/u=845293298,745564448&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        tag: [
            {name:"音乐人", type:"official"}
        ],
        interaction: [
            { follow: 15, fans: 3891290, praise: 5700 }
        ],
        isLock: true,
        isOfficial: true,
        ip: "上海",
    }
]

// 获取用户信息
const getPersonInfo = {
    url: '/api/person',
    method: 'post',
    response: ({ body }) => {
        const { userId } = body;
        console.log("获取用户信息请求参数:", userId)
        const personInfo = person.filter((item) => item.userId === userId);
        return {
            code: 200,
            message: 'success',
            data: personInfo,
        }
    }
}

// 导出
export default [
    getPersonInfo
]
