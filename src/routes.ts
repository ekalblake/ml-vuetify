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
        meta: { title: "Home", conditionalRoute:true },
        path: '/',
        name: WebPages.HOME,
        components:{
            component: () => import("@/view/homeView.vue"),
            toolbar: () => import("@/components/appBar.vue")
        }

    },
    {
        meta: { title: "ProductView", conditionalRoute:true },
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