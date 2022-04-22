import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/Home'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Login',
        name: 'Login',
        component: () => import( /* webpackChunkName: "Login" */ '../components/login.vue')
    }, {
        path: '/overview',
        name: 'Client',
        component: () => import('../components/client.vue'),
        children: [{
                path: '/overview/Currency',
                name: 'Currency',
                component: () => import( /* webpackChunkName: "Currency" */ '../views/Currency.vue')
            }, {
                path: '/overview/Todo',
                name: 'Todo',
                component: () => import( /* webpackChunkName: "Todo" */ '../views/Todo.vue')
            }, {
                path: '/overview/User',
                name: 'User',
                component: () => import( /* webpackChunkName: "User" */ '../views/User.vue')
            },
            {
                path: '/overview/Watch',
                name: 'Stop Watch',
                component: () => import( /* webpackChunkName: "Watch" */ '../views/Watch.vue')
            },
            {
                path: '/overview/Weather',
                name: 'Weather',
                component: () => import( /* webpackChunkName: "Weather" */ '../views/Weather.vue')
            },
            {
                path: '/overview/Exchange',
                name: 'Exchange',
                component: () => import( /* webpackChunkName: "Exchange" */ '../views/Exchange.vue')
            },
            {
                path: '/overview/BMI',
                name: 'BMI',
                component: () => import( /* webpackChunkName: "BMI" */ '../views/BMI.vue')
            }
        ]
    },

    {
        path: '/Register',
        name: 'Register',
        component: () => import( /* webpackChunkName: "Register" */ '../components/Register.vue')
    }, {
        path: '/Page',
        name: 'Page',
        component: () => import( /* webpackChunkName: "Page" */ '../components/Page.vue')
    }, {
        path: '/Demo',
        name: 'Demo',
        component: () => import( /* webpackChunkName: "Demo" */ '../components/Demo.vue')
    }, {
        path: '/Dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "Dashboard" */ '../components/Dashboard.vue')
    },
    {
        path: '/Directory',
        name: 'Directory',
        component: () => import( /* webpackChunkName: "Directory" */ '../components/Directory.vue')
    },
    {
        path: '/ChatLogic',
        name: 'ChatLogic',
        component: () => import( /* webpackChunkName: "ChatLogic" */ '../components/ChatLogic.vue')
    }, {
        path: '/Projects',
        name: 'Projects',
        component: () => import('../components/Projects.vue')
    }, {
        path: '/chatBox',
        name: 'chatBox',
        component: () => import('../components/chatBox.vue')
    }, {
        path: '/online',
        name: 'online',
        component: () => import('../components/online.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router