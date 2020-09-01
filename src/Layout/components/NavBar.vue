<template>
    <div class="navbar">
        <div class="right-menu">
            <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
                <div class="avatar-wrapper flex">
                    <img src="../../assets/images/logo.jpg" class="user-avatar">
                    <span class="user_name">用户名</span>
                    <i class="el-icon-caret-bottom" />
                </div>
                <el-dropdown-menu slot="dropdown">
                    <router-link to="/profile/index">
                        <el-dropdown-item>个人中心</el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided @click.native="logout">
                        <span style="display:block;">退出登录</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    name:'NavBar',
    setup(){
        // async logout(){
        //     await this.$store.dispatch('user/logout')
        //     this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        // }
    }
}
</script>
<style lang="less" scoped>
.navbar{
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .right-menu{
        float: right;
        height: 100%;
        line-height: 50px;
        .avatar-wrapper{
            margin-right: 20px;
            cursor: pointer;
            .user-avatar{
                margin-right: 10px;
                width: 30px;
                height: 30px;
                border-radius: 100%;
            }
        }
    }
}
</style>