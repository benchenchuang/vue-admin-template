<template>
  <div class="sidebar-logo-container">
    <router-link key="collapse" class="sidebar-logo-link flex" to="/">
      <img :src="logo" class="sidebar-logo">
      <h1 class="sidebar-title">{{ title }} </h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  data() {
    return {
      title: 'vue-element管理',
      logo: require('@/assets/images/logo_white.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container{
  padding: 5px 10px;
  width: 100%;
  background: #5654f3;
  text-align: center;
  overflow: hidden;
  .sidebar-logo-link{
    height: 40px;
    .sidebar-logo{
      max-height: 40px;
    }
    .sidebar-title{
      margin-left: 10px;
      font-size: 16px;
      color: #fff;
      font-weight: 500;
    }
  }
}
</style>
