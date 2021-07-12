import Vue from 'vue'
import VueRouter from "vue-router";

const Land = () => import('../view/land/land');
const Login = () => import('../view/login/login');
const Menu = () => import('../view/menu/menu');
const Alla = () => import('../view/allarticle/allarticle');
const History = () => import('../view/history/history');
const Science = () => import('../view/science/science');
const Life = () => import('../view/life/life');
const Personal = () => import('../view/personal/personal');
const Content = () => import('../view/content/content');
const Persnalkeep = () => import('../view/personalkeep/personalkeep');
const Changecode = () => import('../view/changecode/changecode');
const Changehead = () => import('../view/changehead/changehead');
const Personalpage = () => import('../view/personalpage/personalpage');
const Myarticle = () => import('../view/myarticle/myarticle');
const Mycomment = () => import('../view/mycomment/mycomment');
const Voice = () => import('../view/voice/voice');
const Writearticle = () => import('../view/writearticle/writearticle');
const Edit = () => import('../view/edit/edit');
const Editcomment = () => import('../view/editcomment/editcomment');
const Check = () =>import('../view/check/check');
const Detailarticle = () =>import('../view/detailarticle/detailarticle');

Vue.use(VueRouter);

const routes = [
    {
        path: '',
        redirect: '/land'
    },
    {
        path: '/land',
        component: Land
    },

    {
        path: '/login',
        component: Login
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/alla',
        component: Alla
    },
    {
        path: '/history',
        component: History
    },

    {
        path: '/science',
        component: Science
    },
    {
        path: '/life',
        component: Life
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/content',
        component: Content
    },
    {
        path: '/personalkeep',
        component: Persnalkeep
    },
    {
        path: '/changecode',
        component: Changecode
    },
    {
        path: '/changehead',
        component: Changehead
    },
    {
        path: '/personalpage',
        component: Personalpage
    },
    {
        path: '/myarticle',
        component: Myarticle
    },
    {
        path: '/mycomment',
        component: Mycomment
    },
    {
        path: '/voice',
        component: Voice
    },
    {
        path: '/writearticle',
        component: Writearticle
    },
    {
        path: '/edit',
        component: Edit
    },
    {
        path: '/editcomment',
        component: Editcomment
    },
    {
        path: '/check',
        component: Check
    },
    {
        path: '/detailarticle',
        component: Detailarticle
    },
];

const router = new VueRouter({
        routes,
        mode: 'history'         // history模式，一般都用这个模式
    }
);

export default router