import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/pages/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/todo',
            name: 'todo',
            component: () => import(/* webpackChunkName: "todo" */ './views/pages/Todo.vue'),
        },
    ],
});
