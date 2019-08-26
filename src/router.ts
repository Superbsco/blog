import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('./views/Blog.vue'),
      children: [
        {
          path: '/blog/:name',
          name: 'catalogue',
          component: () => import('./views/Blog/catalogue.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue'),
    },
  ],
});
