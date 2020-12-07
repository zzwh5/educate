<template>
  <a-layout id="components-layout-demo-fixed" class="layout">
    <a-layout-header
      class="header"
      :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
    >
      header
    </a-layout-header>
    <a-layout-content class="content" :style="{ 'padding-top': '9.2rem' }">
      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer class="footer" :style="{ textAlign: 'center' }">
      footer
    </a-layout-footer>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  .header {
    height: 9.2rem;
    background: #7fb827;
  }
  .footer {
    height: 23.4rem;
    font-size: 1rem;
    background: #333333;
    padding: 0;
  }
}
</style>
