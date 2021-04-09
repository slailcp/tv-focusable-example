<template>
  <div>
    <div class="demo" style="margin-top: 50px; width: 600px">
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item gray">no-focusable</div>
      <div class="focus-item gray">no-focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.focus-item {
  width: 100px;
  height: 100px;
  margin: 10px;
  font-size: 12px;
  display: inline-block;
  background-color: pink;
  box-sizing: border-box;
  vertical-align: top;
  &.gray {
    background: gray;
  }
}
.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
