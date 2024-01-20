import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Page/Home.vue';
import Destination from './components/Page/Destination.vue';
import Crew from './components/Page/Crew.vue';
import Technology from './components/Page/Technology.vue';

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'Destination',
        component: Destination,
        path: '/destination',
    },
    {
        name: 'Crew',
        component: Crew,
        path: '/crew',
    },
    {
        name: 'Technology',
        component: Technology,
        path: '/technology',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router