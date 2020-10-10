import {postAixos} from './request'

export const userLogin=()=>{ return postAixos(`user/login`,params)};

export const getUserInfo=()=>{ return postAixos(`user/info`,params)};
