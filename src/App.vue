<template>
  <div id="app">

    <main-tab-bar />
    <router-view/>
    <tab-bar-bottom />
  </div>
</template>

<script>
  import mainTabBar from './components/tabbar'
  import TabBarBottom from './components/tabbarBottom'
export default {
  name: 'App',
  components: {
    mainTabBar,TabBarBottom
  }
}
</script>

<style>
  @charset “utf-8”;
  body,h1,h2,h3,h4,h5,h6,ol,ul,dl,dd,p,input,select,textarea,td{
    margin:0;
    padding:0;
  }
  body{
    font-family:“微软雅黑”;
  }
  a{
    text-decoration:none;
    cursor: pointer;
  }
  ul,ol{
    list-style:none;
  }
</style>
