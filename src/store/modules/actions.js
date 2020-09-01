
import { asyncRoutes } from '@/router/asyncRoutes'

export default{
    parentName:({commit},parentName)=>commit('parentName',parentName),
    userInfo:({commit},userData)=>commit('userInfo',userData),
    permission:({commit},role)=>{
        // let routerArry = {}
        // switch(role){
        //     case 1:
        //         routerArry= deepCopy(AdminRouter);
        //         break;
        //     case 2:
        //         routerArry= deepCopy(AdminRouter);
        //         break;
        //     case 3:
        //         routerArry= deepCopy(AdminRouter);
        //         break;
        //     case 4:
        //         routerArry= deepCopy(AdminRouter);
        //         break;
        //     default:
        //         routerArry= {};
        // }
        // routerArry = Object.assign({},routerArry);
        // commit('navList',routerArry)
        let routerArry= deepCopy(asyncRoutes);
        const getRouters= filterAsyncRoutes(routerArry,role);
        console.log(getRouters)
        commit('setRouters',getRouters);
        return getRouters;
    },
    getParentName:({commit})=>{
        return commit('getParent')
    }
}

//根据权限筛选路由
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    let getRoles = roles.split(',')
    return getRoles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}
//深拷贝
function deepCopy(routerArr){
    return routerArr.map(arr=>{
        arr = Object.assign({},arr);
        return arr;
    })
}