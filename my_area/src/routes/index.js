import Accueil from "../components/Accueil.vue";
import Login from "../components/Login.vue";
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    { path: '/Accueil', component: Accueil },
    { path: '/login', component: Login },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
