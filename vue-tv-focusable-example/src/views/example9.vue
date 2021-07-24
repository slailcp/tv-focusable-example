<template>
  <div>
    <span class="open" v-focusable @click="open()">click open dialog</span>

    <div class="demo">
      <!--    <div class="item" ref="myDiv">s</div>-->
      <div
        class="item"
        v-focusable
        v-for="index in 20"
        :key="index"
        @longPress="longPress(index)"
      >
        {{ index }}
      </div>
    </div>
    <div
      v-show="show"
      style="
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      "
    >
      <div class="demo demo5">
        <span class="close" v-focusable @click="close()"
          >click close dialog</span
        >
        <span v-for="index in 15" :key="index" class="item" v-focusable>
          {{ index }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Example9",
  data() {
    return {
      show: false,
      focusEl: null,
    };
  },
  created() {
    this.$nextTick(() => {
      this.$tv.focusClassName = "focus123";
      this.$tv.requestFocus(
        this.$tv.getElementByPath('//div[@class="demo"]/div[2]')
      );
    });
    // 初始化配置。
    // this.$nextTick(() => {
    //   // this.$tv.requestFocus(this.$refs.myDiv)
    //   this.$tv.requestFocus(this.$tv.getElementByPath('//div[@class="demo"]/div[2]'));

    //   // this.$tv.initDis = 0
    //   // this.$tv.findFocusType = 0;

    //   // this.$tv.KEYS = {
    //   //   KEY_LEFT: [37, 65],
    //   //   KEY_UP: [38, 87],
    //   //   KEY_RIGHT: [39, 68],
    //   //   KEY_DOWN: [40, 83],
    //   //   KEY_ENTER:[13, 23]
    //   // }
    //   this.$tv.distanceToCenter = false;
    //   this.$tv.offsetDistance = 0;
    //   this.$tv.longPressTime = 1000;
    //   this.$tv.scrollEl = this.$tv.getElementByPath('//div[@class="demo"]');

    // })
  },
  destroyed() {
    // 为了不影响别的界面交互，销毁的时候，如果有全局的配置属性就重置成全局配置，没有全局配置的属性就重置成系统默认的配置
    this.$tv.reset();
  },

  methods: {
    longPress(index) {},
    open() {
      this.show = !this.show;
      this.focusEl = document.querySelector(".focus123");
      this.$tv.limitingEl = document.querySelector(".demo5"); // 只有.demo5里面的focusable可以获取焦点
      this.$tv.scrollEl = this.$tv.getElementByPath(
        '//div[@class="demo demo5"]'
      );
      this.$tv.requestFocus(
        this.$tv.getElementByPath('//div[@class="demo demo5"]/span[3]')
      );
    },
    close() {
      this.show = !this.show;
      this.$tv.scrollEl = this.$tv.getElementByPath('//div[@class="demo"]');
      this.$tv.limitingEl = null;
      if(this.focusEl){this.$tv.requestFocus(this.focusEl)}
    },
  },
};
</script>


<style lang="less" scoped>
.demo {
  margin: 0 auto;
  width: 600px;
  .item {
    width: 100px;
    height: 100px;
    margin: 10px;
    line-height: 100px;
    display: inline-block;
    background-color: pink;
    box-sizing: border-box;
    vertical-align: top;
    &:nth-of-type(2) {
      position: relative;
      top: 25px;
    }
  }
}
.demo5 {
  width: 400px;
  height: 300px;
  overflow: hidden;
  background: #fff;
  margin-top: 100px;
  .item {
    &:nth-of-type(2) {
      position: relative;
      top: 0;
    }
  }
}

.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
.focus123 {
  transform: scale(1.1);
  border: 2px solid green;
  box-shadow: 0 0 20px green;
}
.open,
.close {
  cursor: pointer;
  display: block;
  width: 150px;
  line-height: 40px;
  padding: 0 20px;
  margin: 20px auto;
  border: 0;
  background: gray;
  &.focus123 {
    border: 0;
    box-shadow: none;
    background: #ff6600;
    color: #fff;
  }
}
</style>
