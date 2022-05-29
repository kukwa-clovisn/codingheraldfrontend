import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/contact'
import Profile from '@/views/profile'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/Login',
        name: 'Login',
        component: () => import( /* webpackChunkName: "Login" */ '../components/login.vue')
    }, {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }, {
        path: '/overview/profile',
        name: 'Client',
        component: () => import('../components/client.vue'),
        children: [{
                path: '/overview/profile',
                name: 'Profile',
                component: Profile
            }, {
                path: '/overview/Currency',
                name: 'Currency',
                component: () => import( /* webpackChunkName: "Currency" */ '../views/Currency.vue')
            }, {
                path: '/overview/Todo',
                name: 'Todo',
                component: () => import( /* webpackChunkName: "Todo" */ '../views/Todo.vue')
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
            }
        ]
    },

    {
        path: '/Register',
        name: 'Register',
        component: () => import( /* webpackChunkName: "Register" */ '../components/Register.vue')
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
        path: '/ChatLogic',
        name: 'ChatLogic',
        component: () => import( /* webpackChunkName: "ChatLogic" */ '../components/ChatLogic.vue')
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