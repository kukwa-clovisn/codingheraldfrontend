import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/contact'
import Profile from '@/views/profile'
import axios from 'axios'

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
        path: '/overview/Todo',
        name: 'Client',
        component: () => import('../components/client.vue'),
        beforeEnter(to, from, next) {
            axios('api/token').then(res => {
                if (res.statusText === 'OK') {
                    next()
                } else {
                    next('/login')
                }
            }).catch(err => {
                next('/login')
                return console.log(err);
            })
        },
        children: [{
                path: '/overview/profile',
                name: 'Profile',
                component: Profile
            }, {
                path: '/overview/locked',
                name: 'Locked',
                component: () => import( /* webpackChunkName: "locked" */ '../views/locked.vue')
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
        path: '/forgot_password',
        name: 'Forgot_password',
        component: () => import('../components/forgot_password.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router