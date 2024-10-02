import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import SignIn from '../views/SignInView.vue';
import SignUp from '../views/SignUpView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'default' }, // layout padrão
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'default' }, // layout padrão
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { layout: 'auth' }, // layout sem a NavBarCustom
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { layout: 'auth' }, // layout sem a NavBarCustom
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
