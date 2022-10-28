<template>
  <div id="app">
    <div class="nav-box">
      <router-link class="nav-item" v-focusable to='/'>是否可聚焦</router-link>
      <router-link class="nav-item" v-focusable to='/Example1'>
        按键事件
        left|up|right
        |down|enter
      </router-link>
      <router-link class="nav-item" v-focusable to='/Example2'>自定义配置</router-link>
      <router-link class="nav-item" v-focusable to='/Example3'>滚动router-link</router-link>
      <router-link class="nav-item" v-focusable to='/Example4'>
        requestFocus
        getElementByPath
      </router-link>
      <router-link class="nav-item" v-focusable to='/Example5'>定位布局</router-link>
      <router-link class="nav-item" v-focusable to='/Example6'>综合案例</router-link>
      <router-link class="nav-item" v-focusable to='/Example8'>tv画廊</router-link>
      <router-link class="nav-item" v-focusable to='/Example9'>弹出层滑动</router-link>
      <router-link class="nav-item" v-focusable to='/Example10'>表单</router-link>
      <router-link class="nav-item" v-focusable to='/Example11'>elementui表单</router-link>
      <router-link class="nav-item" v-focusable to='/Example12'>antd表单</router-link>
      <router-link class="nav-item" v-focusable to='/Example13'>局部滚动/整页滚动</router-link>
      <router-link class="nav-item" v-focusable to='/Example14'>滚动scrollTo</router-link>
    </div>
    <div class="content-app">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  created() {},
  methods: {
    go(path) {

      this.$router.push({ path: path });

      
      // setTimeout(() => {
      //   location.reload();
      // }, 100);
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app {
  display: flex;min-height: 100%;
}
.content-app {
  flex: 1;
  padding-top:20px;padding-left:20px;
}
.nav-box {
  width: 260px;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 20px;background-color: #fafafa;
}
.nav-box .nav-item {
 padding:5px 10px;cursor: pointer;display: block;color:#333;
 &.router-link-exact-active{color:#07c160}
}
.nav-box .nav-item.div-exact-active {
  background-color: #07c160;
  color: #fff;
}
.nav-box .nav-item.focus,
.nav-box .nav-item.focus,
.nav-box .nav-item.on-focus ,
.nav-box .nav-item.focused{
  background-color: #58be8a;
  color: #fff;
}
</style>
