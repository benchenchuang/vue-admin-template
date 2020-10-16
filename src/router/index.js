import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import {constantRoutes} from './constantRoutes'
import {msg} from '@/utils/msg'

Vue.use(Router);

let router = new Router({
  routes: constantRoutes,
})

router.beforeEach((to, from, next) => {
  msg.startLoading();
  let parentName = to.meta.parentName || to.name;
//   store.dispatch('parentName', parentName)
  
  if(to.meta.title){
      document.title = to.meta.title;
  }
  let info = store.state.userInfo;//获取用户信息
  let infoLength = Object.keys(info).length===0;

  if(infoLength && to.path!=='/login'){
    let userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
    if(userInfo.type){
      store.dispatch('userInfo', userInfo)//用户信息存入vuex
      store.dispatch('permission', userInfo.type).then((res)=>{
        router.addRoutes(res, { replace: true });
        next({ ...to, replace: true })
      })
    }else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  }else{
    let userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}");
    if(to.path=='/login'){
      if(userInfo && userInfo.type){
        next({
          path: '/home'
        });
      }else{
        next()
      }
    }else{
      next()
    }
  }
  msg.finishLoading();
})
export default router