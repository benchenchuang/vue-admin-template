<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isRouterAlive: true
    }
  },
  mounted() {
    window.addEventListener('resize', this.reload)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reload)
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="less">
@import url('@/assets/style/reset.less');
</style>
