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
        path: '/',
        name: WebPages.HOME,
        components:{
            default: () => import("@/view/homeView.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }

    },
    {
        path: '/product',
        name: WebPages.PRODUCTVIEW,
        components: {
            default: () => import("@/view/product/ProductView.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }
    }

];

/**
 *
 */
const router = new VueRouter({
    routes,
    mode: 'history'
} as any);


export default router;