import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Masuk from '../views/masuk/Masuk.vue'
import Createmasuk from '../views/masuk/Createmasuk.vue'
import Editmasuk from '../views/masuk/Editmasuk.vue'
import Keluar from '../views/keluar/Keluar.vue'
import Createkeluar from '../views/keluar/Createkeluar.vue'
import Editkeluar from '../views/keluar/Editkeluar.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/masuk',
        name: 'Masuk',
        component: Masuk
    },
    {
        path: '/createmasuk',
        name: 'Createmasuk',
        component: Createmasuk
    },
    {
        path: '/editmasuk',
        name: 'Editmasuk',
        component: Editmasuk
    },
    {
        path: '/keluar',
        name: 'Keluar',
        component: Keluar
    },
    {
        path: '/createkeluar',
        name: 'Createkeluar',
        component: Createkeluar
    },
    {
        path: '/editkeluar',
        name: 'Editkeluar',
        component: Editkeluar
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router