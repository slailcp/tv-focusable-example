<template>
  <div>
    <div class="btns">
      <div>
        <div>修改findFocusType</div>
        <span
          v-focusable
          class="btn"
          :class="active === 1 ? 'active' : ''"
          @click="type1(1)"
          >优先直线</span
        >
        <span
          v-focusable
          class="btn"
          :class="active === 2 ? 'active' : ''"
          @click="type2(2)"
          >优先最近</span
        >
      </div>
      <br />
      <div>
        <div>修改initDis</div>
        <span
          v-focusable
          class="btn"
          :class="disActive === 1 ? 'active' : ''"
          @click="dis1(1)"
          >initDis 20px</span
        >
        <span
          v-focusable
          class="btn"
          :class="disActive === 2 ? 'active' : ''"
          @click="dis2(2)"
          >initDis 100px</span
        >
      </div>
      <br />
      <div>
        <div>修改KEYS</div>
        <span
          v-focusable
          class="btn"
          :class="keysActive === 1 ? 'active' : ''"
          @click="keys1(1)"
          >A/W/D/S/P</span
        >
        <span
          v-focusable
          class="btn"
          :class="keysActive === 2 ? 'active' : ''"
          @click="keys2(2)"
          >Z/X/C/V/B</span
        >
      </div>
      <br />
      <div>
        <div>修改offsetDistance，设置边缘的距离</div>
        <span
          v-focusable
          class="btn"
          :class="offsetActive === 1 ? 'active' : ''"
          @click="offset1(1)"
          >offsetDistance = 50</span
        >
        <span
          v-focusable
          class="btn"
          :class="offsetActive === 2 ? 'active' : ''"
          @click="offset2(2)"
          >offsetDistance = 250</span
        >
      </div>
      <br />
      <div>
        <div>修改limitingEl=demo的话，就只能在demo内部移动焦点</div>
        <span
          v-focusable
          class="btn"
          :class="limitingElActive === 1 ? 'active' : ''"
          @click="limitingEl1(1)"
          >limitingEl = null</span
        >
        <span
          v-focusable
          class="btn"
          :class="limitingElActive === 2 ? 'active' : ''"
          @click="limitingEl2(2)"
          >limitingEl = .demo</span
        >
      </div>
      <br />
      <div>
        <div>修改distanceToCenter，始终保持焦点在中间</div>
        <span
          v-focusable
          class="btn"
          :class="distanceToCenterActive === 1 ? 'active' : ''"
          @click="distanceToCenter1(1)"
          >distanceToCenter = false</span
        >
        <span
          v-focusable
          class="btn"
          :class="distanceToCenterActive === 2 ? 'active' : ''"
          @click="distanceToCenter2(2)"
          >distanceToCenter = true</span
        >
      </div>
    </div>
    <div class="demo" style="margin-top: 20px; background: #ccc">
      <div
        class="focus-item"
        v-focusable
        v-for="index in 250"
        :key="index"
        :ref="`fo` + index"
        @left="event('left', index)"
        @right="event('right', index)"
        @up="event('up', index)"
        @down="event('down', index)"
        @click="event('enter', index)"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Example2",
  data() {
    return {
      active: 2,
      disActive: 0,
      keysActive: 1,
      offsetActive: 1,
      limitingElActive: 1,
      distanceToCenterActive: 1,
    };
  },
  created() {
    this.keys1();
    // 当前页面自定义配置
    this.$nextTick(() => {
      this.$tv.focusClassName = "on-focus"; // 选中的class
      this.$tv.requestFocus(this.$refs.fo1, false);
    });
  },
  destroyed() {
    // 为了不影响别的界面交互，销毁的时候，如果有全局的配置属性就重置成全局配置，没有全局配置的属性就重置成系统默认的配置
    // FocusClassName/FindFocusType/InitDis没有做全局配置，调用resetXXX()就行
    this.$tv.reset();
  },

  methods: {
    event(type, index) {
      if (index === 8) {
        if (type === "left") {
          console.log("left");
        }
        if (type === "up") {
          console.log("up");
        }
        if (type === "right") {
          console.log("right");
        }
        if (type === "down") {
          console.log("down");
        }
        if (type === "enter") {
          console.log("enter");
        }
      }
    },
    offset1() {
      this.offsetActive = 1;
      this.$tv.offsetDistance = 50;
    },
    offset2() {
      this.offsetActive = 2;
      this.$tv.offsetDistance = 250;
    },
    type1() {
      this.active = 1;
      this.disActive = 1;
      this.$tv.findFocusType = 0;
    },
    type2() {
      this.active = 2;
      this.disActive = 0;
      this.$tv.findFocusType = 1;
    },
    dis1() {
      this.disActive = 1;
      this.active = 1;
      this.$tv.findFocusType = 0;
      this.$tv.initDis = 20; //  设置initDis的前提是findFocusType为0
    },
    dis2() {
      this.disActive = 2;
      this.active = 1;
      this.$tv.findFocusType = 0;
      this.$tv.initDis = 100;
    },
    keys1() {
      this.keysActive = 1;
      this.$tv.KEYS = {
        KEY_LEFT: [65, 37], // 65:A  37:←
        KEY_UP: [87, 38], // 87:W  38:↑
        KEY_RIGHT: [68, 39], // 68:D   39:→
        KEY_DOWN: [83, 40], // 83：S  40:↓
        KEY_ENTER: [80, 13], // 32: P  13：enter键
      };
    },
    keys2() {
      this.keysActive = 2;
      this.$tv.KEYS = {
        KEY_LEFT: [90], // Z
        KEY_UP: [88], // X
        KEY_RIGHT: [67], // C
        KEY_DOWN: [86], // V
        KEY_ENTER: [66], // B
      };
    },
    limitingEl1() {
      this.limitingElActive = 1;
      this.$tv.limitingEl = null;
    },
    limitingEl2() {
      this.limitingElActive = 2;
      this.$tv.limitingEl = document.querySelector(".demo");
    },
    distanceToCenter1() {
      this.distanceToCenterActive = 1;
      this.$tv.distanceToCenter = false;
    },
    distanceToCenter2() {
      this.distanceToCenterActive = 2;
      this.$tv.distanceToCenter = true;
    },
  },
};
</script>

<style lang="less" scoped>
.btns {
  font-size: 14px;
}
.btns span.on-focus {
  transform: scale(1);
  box-shadow: 0 0 20px blue;
}
.btn {
  display: inline-block;
  background: #ccc;
  margin-right: 40px;
  cursor: pointer;
  font-size: 12px;
}
.btn.active {
  background: red;
}
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
    &:nth-of-type(13) {
      position: relative;
      top: 30px;
    }
  }

  // div:nth-child(2) {
  //   position: relative;
  //   top: -80px;
  // }

  // div:nth-child(6) {
  //   position: relative;
  //   top: 100px;
  // }

  // div:nth-child(11) {
  //   position: relative;
  //   top: 100px;
  // }
}
.on-focus {
  transform: scale(1.2);

  box-shadow: 0 0 20px red;
}
</style>
