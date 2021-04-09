<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">是否可聚焦</router-link> |
      <router-link to="/Example1">按键事件（left|up|right|down|enter）</router-link> |
      <router-link to="/Example2">自定义配置</router-link> |
      <router-link to="/Example3">滚动div</router-link> |
      <router-link to="/Example4">requestFocus/getElementByPath</router-link> |
      <router-link to="/Example5">混着使用</router-link> |
      <router-link to="/Example6">综合案例</router-link> |
      <router-link to="/Example8">tv画廊</router-link> |
      <router-link to="/Example9">弹出层滑动</router-link>
    </div>
    <div class="content-app">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
*{margin:0;padding:0;list-style: none;}
#nav{text-align: center;
  a{padding:10px;}
  .router-link-exact-active{color:red}
}
.content-app{padding:20px 50px;}
</style>
