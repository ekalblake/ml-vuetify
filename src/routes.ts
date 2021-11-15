import Vue 					        from 'vue';
import VueRouter, {RouteConfig}     from 'vue-router';
import { WebPages }                 from "./constants";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        meta: {
            title: "Login",
            conditionalRoute:true
        },
        path: '/',
        name: WebPages.HOME,
        component: () => import('./App.vue')

    }
];

/**
 *
 */
const router = new VueRouter({
    routes
} as any);


export default router;