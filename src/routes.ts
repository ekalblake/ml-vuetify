import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "./constants";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '*',
        redirect: '/'

    },
    {
        meta: { title: "Login", conditionalRoute:true },
        path: '/',
        name: WebPages.HOME,
        component: () => import("@/view/homeView.vue")

    },
    {
        meta: { title: "HomeView", conditionalRoute:true },
        path: '/search',
        name: WebPages.SEARCHVIEW,
        components: {
            default: () => import("@/view/homeView.vue"),
            toolbar: () => import("@/components/appBar.vue"),
        }
    },

];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history'
} as any);


export default router;