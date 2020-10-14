<template>
  <div>
    <div class="demo" style="margin-top:200px;">
      <div class="focus-item" v-focusable>1</div>
      <div class="focus-item" v-focusable>2</div>
      <div class="focus-item" v-focusable @left="left(3)">3-left</div>
      <div class="focus-item" v-focusable @right="right(4)">4-right</div>
      <div class="focus-item" v-focusable>5</div>
      <div class="focus-item" v-focusable>6</div>
      <div class="focus-item" v-focusable >7</div>
      <div class="focus-item" v-focusable @up="up(8)">8-up</div>
      <div class="focus-item" v-focusable >9</div>
      <div class="focus-item" v-focusable @down="down(10)">10-down</div>
      <div class="focus-item" v-focusable>11</div>
      <div class="focus-item" v-focusable @click="enter(12)">12-click</div>
      <div class="focus-item" style="background:gray">13 no-focusable</div>
      <div class="focus-item" style="background:gray">14 no-focusable</div>
      <div class="focus-item" v-focusable>15</div>
      <div class="focus-item" v-focusable>16</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'example1',
  methods:{
    left(index) {
      console.log("左");
    },
    right(index) {
      console.log("右");
    },
    up(index) {
      console.log("上");
    },
    down(index) {
      console.log("下");
    },
    enter(index) { // 按enter键，触发click
      console.log("enter-click");
    }
  }
}
</script>
<style lang="less" scoped>
.demo {
  margin: 0 auto;
  width: 600px;
  position: relative;
  .focus-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    display: inline-block;
    background-color: pink;
    box-sizing: border-box;
    vertical-align: top;
  }

  div:nth-child(2) {
    position: relative;
    top: -80px;
  }

  div:nth-child(6) {
    position: relative;
    top: 100px;
  }

  div:nth-child(11) {
    position: relative;
    top: 100px;
  }
}
.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
