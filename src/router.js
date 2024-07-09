import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../src/components/LoginPage.vue';
import SignUpPage from '../src/components/SignUpPage';
import ContactsPage from '../src/components/ContactsPage';
import ContactFormPage from '../src/components/ContactFormPage';



const routes = [
    {
        path: "/",
        redirect: '/login'
    },
    {
        path: "/login",        
        component : LoginPage
    },
    {
        path: '/signup',        
        component: SignUpPage
    },
    {
        path: '/contacts',
        component: ContactsPage
    },
    {
        path: '/contactForm',
        component: ContactFormPage
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;