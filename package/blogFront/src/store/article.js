import axios from 'axios'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
    state: () => {
        return {
            // 文章详情
            articleDetail: null,
            // 评论列表
            commentList: [],
            // 单个用户文章
            userArticleList: null,
        }
    },
    actions: {
        // 获取文章详情
        async openArticleModal(id) {
            try {
                await this.axiosGetArticleDetail(id)
            } catch (e) {
                console.error('获取文章详情失败:', e);
            }
        },
        // 获取评论列表
        async getCommentList(id){
            try {
                await this.axiosGetCommentList(id)
            } catch (e) {
                console.error('获取评论列表失败:', e);
            }
        },
        // 获取单个用户文章
        async getUserArticleList(userid){
            try {
                await this.axiosGetUserArticleList(userid)
            } catch (e) {
                console.error('获取单个用户文章失败:', e);
            }
        },

        async axiosGetArticleDetail(id){
            try {
                const res = await axios({ 
                    url: `/api/article/${id}`,
                    method: 'get'
                })
                this.articleDetail = res.data.data;
                console.log('获取文章详情成功:', this.articleDetail);
            } catch (e) {
                console.error('获取文章详情失败:', e);
                this.articleDetail = null;
            }
        },
        // 获取评论列表
        async axiosGetCommentList(id){
            try{
                const res = await axios({
                    url: '/api/comment',
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    data:{ id: id}
                })
                this.commentList = res.data.data;
                console.log('获取评论列表成功:', this.commentList);
            } catch(e) {
                console.error('获取评论列表失败:', e);
                this.commentList = [];
            }
        },
        // 获取单个用户文章
        async axiosGetUserArticleList(userid){
            try{
                const res = await axios({
                    url: `/api/articles/user/${userid}`,
                    method: 'get',
                })
                this.userArticleList = res.data.data;
                console.log(userid);
                console.log('获取单个用户文章成功:', this.userArticleList);
            } catch(e) {
                console.error('获取单个用户文章失败:', e);
                this.userArticleList = [];
            }
        },
        // 清空文章详情
        clearArticleDetail(){
            this.articleDetail = null;
            this.commentList = [];
            this.userArticleList = null;
            console.info("文章详情数据已清空"+this.articleDetail);
            console.info("评论列表数据已清空"+this.commentList);
            console.info("单个用户文章数据已清空"+this.userArticleList);
        }
    }
})