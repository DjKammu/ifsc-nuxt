import Vue from 'vue'
import Router from 'vue-router'

function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

Vue.use(Router)


const routes = [
  {
      name: 'index',
      path: '/',
      component: page('index')
    },
    {
        name: 'ifsc',
        path: '/ifsc/:ifsc?',
        component: page('ifsc')
    },
    {
        name: 'bank',
        path: '/:bank',
        component: page('bank')
    },
    {
        name: 'state',
        path: '/:bank/:state',
        component: page('state')
    },
    {
        name: 'district',
        path: '/:bank/:state/:district',
        component: page('district')
    },
    {
        name: 'city',
        path: '/:bank/:state/:district/:city',
        component: page('city')
    },
    {
        name: 'branch',
        path: '/:bank/:state/:district/:city/:branch',
        component: page('branch')
    }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes:  routes
  })
}
