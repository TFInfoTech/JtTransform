import Vue from "vue";
import Router from "vue-router";
// import store from "../store/index";

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            component: () => import("@/views/index/Index"),
            meta: {
                title: "Json Template Transform Demo",
                // 缓存首页
               // keepAlive: true
            }
        },
        // {
        //     path: "/login",
        //     component: () => import("@/views/login/index"),
        //     meta: {
        //         title: "登陆"
        //     }
        // },
        // {
        //     path: "*",
        //     component: () => import("@/components/NotFound")
        // }
    ]
});

router.beforeEach((to,from,next) => {
    let { title } = to.meta;
    // let { title, needLogin } = to.meta;
    // let { isLogin } = store.state;
    document.title = title;
    next();
    // if (needLogin && !isLogin) {
    //     next({
    //         path: "/login"
    //     });
    // } else {
    //     next();
    // }
});

export default router;
