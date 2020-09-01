import Layout from '@/Layout/index'
export const asyncRoutes = [
    {
        path: '/',
        component: Layout,
        name:'homePage',
        meta: {
          title:'首页',
          icon: 'el-icon-s-ticket',
          noCache: true,
          roles: ['admin', 'editor']
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/Home/index'),
                name: 'home',
                meta: {
                title: '首页',
                icon: 'el-icon-s-ticket',
                noCache: true,
                roles: ['admin']
                }
            },
            {
                path: '/set',
                component: () => import('@/views/Home/index'),
                name: 'set',
                meta: {
                  title: 'shezhi',
                  icon: 'el-icon-s-ticket',
                  noCache: true,
                  roles: ['admin']
                }
            }
        ]
    },
    {
      path: '/user',
      component: Layout,
      name:'userPage',
      meta: {
        title:'个人中心',
        icon: 'el-icon-s-ticket',
        noCache: true,
        roles: ['admin', 'editor']
      },
      children: [
        {
          path: 'index',
          component: () => import('@/views/User/index'),
          name: 'user',
          meta: {
            title: '个人中心',
            icon: 'el-icon-s-ticket',
            noCache: true,
            roles: ['admin', 'editor']
          }
        }
      ]
    },
    {
      path: '/permission',
      component: Layout,
      name:"permissionPage",
      meta: {
        title:'权限中心',
        icon: 'el-icon-s-ticket',
        noCache: true,
        roles: ['admin']
      },
      children: [
        {
          path: 'index',
          component: () => import('@/views/Permission/index'),
          name: 'permission',
          meta: {
            title: '权限中心',
            icon: 'el-icon-s-ticket',
            noCache: true,
            roles: ['admin']
          }
        }
      ]
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
]