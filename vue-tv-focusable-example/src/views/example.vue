<template>
  <div>
    <div class="demo" style="margin-top: 50px; width: 600px">
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>focusable</div>
      <div class="focus-item" v-focusable>
        <svg viewBox="64 64 896 896" data-icon="up" width="100px" height="100px" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>
      </div>
      <span class="focus-item" v-focusable> 可获取焦点的元素  </span>
      <svg v-focusable  viewBox="64 64 896 896" data-icon="up" width="100px" height="100px" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>
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
