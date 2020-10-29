<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// svg图标的自动导入
import 'assets/icons/index'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
