<template>
  <div id="app">
    <div class="nav-box">
      <div class="nav-item" v-focusable @click="go('/')">是否可聚焦</div>
      <div class="nav-item" v-focusable @click="go('/Example1')">
        按键事件
        left|up|right
        |down|enter
      </div>
      <div class="nav-item" v-focusable @click="go('/Example2')">自定义配置</div>
      <div class="nav-item" v-focusable @click="go('/Example3')">滚动div</div>
      <div class="nav-item" v-focusable @click="go('/Example4')">
        requestFocus
        getElementByPath
      </div>
      <div class="nav-item" v-focusable @click="go('/Example5')">混着使用</div>
      <div class="nav-item" v-focusable @click="go('/Example6')">综合案例</div>
      <div class="nav-item" v-focusable @click="go('/Example8')">tv画廊</div>
      <div class="nav-item" v-focusable @click="go('/Example9')">弹出层滑动</div>
      <div class="nav-item" v-focusable @click="go('/Example10')">表单</div>
      <div class="nav-item" v-focusable @click="go('/Example11')">elementui表单</div>
      <div class="nav-item" v-focusable @click="go('/Example12')">antd表单</div>
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
      setTimeout(() => {
        location.reload();
      }, 100);
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
  display: flex;
}
.content-app {
  flex: 1;
  padding-top: 150px;
}
.nav-box {
  width: 200px;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 50px;
}
.nav-box .nav-item {
  display: block;
  width: 130px;
  margin-bottom: 20px;
  padding: 5px 10px;
  line-height: 28px;
  color: #333;
  background-color: #272b30;
  color: #fff;
  vertical-align: text-bottom;
  border-radius: 0 50px 50px 0;
  text-decoration: none;
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
