import { createWebHistory, createRouter } from "vue-router";
import { start, close } from '../../../shard/utils/nprogress'
import { KeepAlive } from "vue";

const staticRoutes = [
    {
        path: "/",
        name: "home",
        redirect: () => {
            return {
                path: '/explore',
                query: { channel_id: "announcement" }

            }
        },
        meta: { title: "首页", requireAuth: false },
    },
    {
        path: "/explore",
        component: () => import("../views/index.vue"),
        children: [
            {
                path: ":articleId?",
                name: "explore",
                component: () => import("../components/basic/KfyblogExplore.vue"),
                meta: { KeepAlive: true },
            },
            {
                path: "article/:id",
                name: "article",
                component: () => import("../components/card/KfyblogModal.vue"),
                props: true,
                meta: { KeepAlive: false }
            },
            {
                path: "person/:id",
                children: [
                    {
                        path: ':articleId?',
                        name: 'person',
                        component: () => import("../views/KfyblogPerson.vue"),
                        beforeEnter: (to, from, next) => {
                            if (!to.query.resource) {
                                next({ ...to, query: { ...to.query, resource: "note" } })
                            } else {
                                next()
                            }
                        },
                    }
                ]
            }
        ]
    },
    {
        path: "/auth",
        name: "auth",
        meta: { requireAuth: false },
        component: () => import("../views/user/auth.vue"),
        children: [
            {
                path: "login",
                name: "login",
                component: () => import("../views/user/login.vue")
            },
            {
                path: "register",
                name: "register",
                component: () => import("../views/user/register.vue")
            }
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
})


router.beforeEach((to, from) => {
    start();
})

router.afterEach(() => {
    close();
})

export default router