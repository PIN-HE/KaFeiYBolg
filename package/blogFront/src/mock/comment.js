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

const commentList = [
    // 普通评论
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是普通评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1001",
        isAuthor: false,
        replies: null,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 0
        }]
    },
    // 图片评论
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是一条带图片的评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1001",
        image:"https://img0.baidu.com/it/u=441908421,2734587169&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        isAuthor: false,
        replies: null,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 0
        }]
    },
    // 置顶
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是一条置顶评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1002",
        isAuthor: false,
        isTopComment: true,
        replies: null,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 0
        }]
    },
    // 一条回复
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是带一条回复的评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1003",
        isAuthor: false,
        isTopComment: false,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 1
        }],
        replies: [
            {
                articleId: "5c29cc418661443f8f922c48d37d970e",
                id: generateRandomId(),
                username: '尼别小乔我',
                content: "我是第一条回复",
                avatar: "https://img1.baidu.com/it/u=3652024792,1312709718&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
                router: `/explore/person/${generateRandomId()}`,
                isAuthor: false,
                time: "1分钟前 江苏",
                interaction: [{
                    likes: 20,
                    replay: 0
                }],

            }
        ],
    },
    // 作者本人
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是作者本人的评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1004",
        isAuthor: true,
        isTopComment: false,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 0
        }],
        replies: null,
    },
    // 多条回复
    {
        articleId: "5c29cc418661443f8f922c48d37d970e",
        id: "blogofficial1001",
        username: '你也迷路了么-📷',
        content: "这是带多条回复的评论",
        avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
        router: "/explore/person/blogofficial1004",
        isAuthor: false,
        isTopComment: false,
        time: "1分钟前 江苏",
        interaction: [{
            likes: 20,
            replay: 3
        }],
        replies: [
            {
                articleId: "5c29cc418661443f8f922c48d37d970e",
                id: generateRandomId(),
                username: '心灰意冷',
                content: "我是第一条回复",
                avatar: "https://img2.baidu.com/it/u=600307539,3579281717&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
                router: `/explore/person/${generateRandomId()}`,
                isAuthor: false,
                time: "1分钟前 江苏",
                interaction: [{
                    likes: 20,
                    replay: 0
                }],
            },
            {
                articleId: "5c29cc418661443f8f922c48d37d970e",
                id: generateRandomId(),
                username: '你也迷路了么-📷',
                content: "我是作者回复",
                avatar: "https://img1.baidu.com/it/u=3648432335,640677248&fm=253&fmt=auto&app=138&f=JPEG?w=300&h=300",
                router: `/explore/person/${generateRandomId()}`,
                isAuthor: true,
                time: "1分钟前 江苏",
                interaction: [{
                    likes: 20,
                    replay: 0
                }],
            },
            {
                articleId: "5c29cc418661443f8f922c48d37d970e",
                id: generateRandomId(),
                username: '懒大王',
                content: "啊哈~开摆开摆",
                avatar: "https://img0.baidu.com/it/u=499466393,1410046674&fm=253&fmt=auto&app=120&f=JPEG?w=501&h=500",
                router: `/explore/person/${generateRandomId()}`,
                isAuthor: false,
                time: "1分钟前 江苏",
                interaction: [{
                    likes: 20,
                    replay: 0
                }],
            }
        ],
    },
]

// 模拟获取评论接口
const getCommentList = {
    url: '/api/comment',
    method: 'post',
    response: ({body}) => {
        const {id} = body;
        const commentData = commentList.filter(i => i.articleId === id)
        return {
            code: 200,
            message: 'success',
            data: commentData
        }
    }
}

export default [getCommentList]