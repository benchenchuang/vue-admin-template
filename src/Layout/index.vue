<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <div class="fixed-header">
                <nav-bar />
            </div>
            <section class="app-main">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive>
                        <router-view :key="key" />
                    </keep-alive>
                </transition>
                <p class="site_footer">常州人生无限有限公司</p>
            </section>
            <show-modal ref="modal"></show-modal>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar/index'
import ShowModal from '@/components/ShowModal'

export default {
    name:'Layout',
    components:{
        Sidebar,
        NavBar,
        ShowModal
    },
    mounted(){
        Vue.prototype.$showModal = this.$refs.modal;
    },
    computed: {
        key() {
            return this.$route.path
        }
    }
}
</script>
<style lang="less" scoped>
.main-container{
    min-height: 100%;
    -webkit-transition: margin-left .28s;
    transition: margin-left .28s;
    margin-left: 210px;
    position: relative;
    .fixed-header{
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - 210px);
        -webkit-transition: width .28s;
        transition: width .28s;
    }
    .app-main{
        position: fixed;
        left: 220px;
        top: 60px;
        right: 10px;
        bottom: 0;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        // padding: 60px 10px 10px;
        // min-height: calc(100vh - 70px);
        box-sizing: border-box;
        .site_wrap{
            flex: 1;
            -webkit-flex:1;
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            height: 90%;
        }
        .site_footer{
            margin: 10px 0;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
    }
}
</style>