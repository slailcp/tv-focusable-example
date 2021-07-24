<template>
  <div>
    <div class="demo" style="margin-top: 200px">
      <div class="focus-item item1" v-focusable @onFocus="focus">1 focus</div>
      <div class="focus-item" v-focusable>2</div>
      <div class="focus-item" v-focusable @left="left(3)">3-left</div>
      <div class="focus-item" v-focusable @right="right(4)">4-right</div>
      <div class="focus-item" v-focusable @click="showDialog">
        5<br />(点击enter有弹出层)
      </div>
      <div class="focus-item" v-focusable @onBlur="blur">6  blur</div>
      <div class="focus-item" v-focusable>7</div>
      <div class="focus-item" v-focusable @up="up(8)">8-up</div>
      <div class="focus-item" v-focusable>9</div>
      <div class="focus-item" v-focusable @down="down(10)">10-down</div>
      <div class="focus-item" v-focusable @longPress="longPress(12)">
        11-longPress
      </div>
      <div class="focus-item" v-focusable @click="enter(12)">12-click</div>
      <div class="focus-item" style="background: gray">13 no-focusable</div>
      <div class="focus-item" style="background: gray">14 no-focusable</div>
      <div class="focus-item" v-focusable>15</div>
      <div class="focus-item" v-focusable>16</div>
    </div>
    <!--弹出层-->
    <div class="dialog-bg" v-show="dShow"></div>
    <div class="dialog" v-show="dShow">
      <div class="content">content</div>
      <div class="btns">
        <button class="btn-item" v-focusable ref="enter">确定</button>
        <button class="btn-item" v-focusable ref="cancel" @click="closeDialog">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example1",
  data() {
    return {
      dShow: false,
    };
  },
  methods: {
    focus() {
      console.log("focus");
    },
    blur(){
      console.log("blur");
    },
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
      alert("下");
    },
    enter(index) {
      // 按enter键，触发click
      alert("enter-click");
    },
    longPress() {
      console.log("长按");
    },
    // 弹出层焦点部分
    showDialog() {
      this.dShow = true;
      this.$tv.limitingEl = document.querySelector(".dialog");
      this.$tv.requestFocus(this.$refs.enter);
    },
    closeDialog() {
      this.dShow = false;
      this.$tv.limitingEl = null;
      this.$tv.requestFocus(
        this.$tv.getElementByPath('//div[@class="demo"]/div[5]')
      );
    },
  },
};
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
.btn-item.focus {
  background: blue;
  color: #fff;
  border: none;
  box-shadow: none;
  transform: none;
}

.btn-item {
  margin-right: 20px;
  border: none;
  background: gray;
  padding: 10px;
}
.dialog-bg {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.dialog {
  position: fixed;
  background: #fff;
  width: 200px;
  height: 100px;
  top: 50%;
  left: 45%;
  z-index: 1;
  padding: 10px;
}
</style>
