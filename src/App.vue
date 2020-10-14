<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">按键事件（left|up|right|down|enter）</router-link> |
      <router-link to="/Example2">自定义配置</router-link> |
      <router-link to="/Example3">滚动div</router-link> |
      <router-link to="/Example4">requestFocus/getElementByPath</router-link> |
      <router-link to="/Example5">综合案例</router-link>
    </div>
    <div class="content">
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
.content{padding:20px 50px;}
</style>
