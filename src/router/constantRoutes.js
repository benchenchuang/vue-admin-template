import Layout from '@/Layout/index'

export const constantRoutes = [
    {
      path: '/login',
      component: () => import('@/views/Login/index'),
      hidden: true
    },
    {
      path: '/404',
      component: () => import('@/views/Error/404'),
      hidden: true
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/Home/index'),
          name: 'Dashboard',
          meta: { title: '首页', icon: 'el-icon-s-platform', affix: true }
        }
      ]
    }
  ]