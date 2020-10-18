<template>
  <div class="has-logo">
    <logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="true"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/assets/style/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data(){
    return{
      permission_routers:[]
    }
  },
  computed:{
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
  },
  mounted(){

    this.permission_routers = this.$store.state.permission_routers
  }
}
</script>
<style lang="less" scoped>
.sidebar-container {
    -webkit-transition: width .28s;
    transition: width .28s;
    width: 210px !important;
    background-color: #fff;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    border-right: 1px solid @borderColor;
    overflow: hidden;
}
</style>
