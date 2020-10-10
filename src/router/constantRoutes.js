import Layout from '@/Layout/index'

export const constantRoutes = [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: 'login' */'@/views/Login/index'),
      hidden: true
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: '404' */'@/views/Error/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import(/* webpackChunkName: 'home' */ '@/views/Home/index'),
          name: 'Dashboard',
          meta: { title: '首页', icon: 'el-icon-s-platform', affix: true }
        }
      ]
    }
  ]