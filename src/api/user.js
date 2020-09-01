import * as axiosApi from './request'
export default{
    userLogin:(params)=>{
        return axiosApi.postAixos(`user/login`,params)
    },
    getUserInfo:()=>{
        return axiosApi.getAxios('user/info')
    }
}