import VueRouter from 'vue-router';

import Index from './Index.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Login from "@/components/views/Login.vue";
import Register from '@/components/views/Register.vue';
import ErrorPage from '@/components/views/Error.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: Index },
    { path: '/hello', component: HelloWorld },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '*', component: ErrorPage }
  ],
  mode: 'history'
})

export default router;