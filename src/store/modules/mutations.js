export default{
    userInfo(state,userData){
        state.userInfo = Object.assign({},state.userInfo,userData)
    },
    setRouters(state,routers){
        state.permission_routers = routers;
    },
    parentName(state,parentName){
        state.parentName = parentName
    },
    getParent(state){
        return state.parentName
    },
    CLEAR_MENU(state) {
        state.navList = []
    },
}