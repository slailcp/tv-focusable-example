<template>
  <div class="focusTest2">
    <div>
      <div class="title">修改findFocusType(主要体现在div2上)</div>
      <span class="btn" :class="active === 1 ? 'active' : ''" @click="type1()"
        >优先直线</span
      >
      <span class="btn" :class="active === 2 ? 'active' : ''" @click="type2()"
        >优先最近</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改initDis(主要体现在div2上)</div>
      <span
        class="btn"
        :class="disActive === 3 ? 'active' : ''"
        @click="dis(3, 50)"
        >initDis 50px</span
      >
      <span
        class="btn"
        :class="disActive === 1 ? 'active' : ''"
        @click="dis(1, 30)"
        >initDis 30px</span
      >
      <span
        class="btn"
        :class="disActive === 2 ? 'active' : ''"
        @click="dis(2, 29)"
        >initDis 29px</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改KEYS</div>
      <span
        class="btn"
        :class="keysActive === 1 ? 'active' : ''"
        @click="keys1()"
        >A(左)/W(上)/D(右)/S(下)/P@click</span
      >
      <span
        class="btn"
        :class="keysActive === 2 ? 'active' : ''"
        @click="keys2()"
        >Z(左)/X(上)/C(右)/V(下)/B@click</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改选中的classname的样式</div>
      <span
        class="btn"
        :class="focusClassNameActive === 1 ? 'active' : ''"
        @click="focusclassname1()"
        >scale</span
      >
      <span
        class="btn"
        :class="focusClassNameActive === 2 ? 'active' : ''"
        @click="focusclassname2()"
        >rotate</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改offsetDistance</div>
      <span
        class="btn"
        :class="offsetDistanceActive === 1 ? 'active' : ''"
        @click="offsetDistance1()"
        >offsetDistance = 50</span
      >
      <span
        class="btn"
        :class="offsetDistanceActive === 2 ? 'active' : ''"
        @click="offsetDistance2()"
        >offsetDistance = 250</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改distanceToCenter</div>
      <span
        class="btn"
        :class="distanceToCenterActive === 1 ? 'active' : ''"
        @click="distanceToCenter1()"
        >distanceToCenter = false</span
      >
      <span
        class="btn"
        :class="distanceToCenterActive === 2 ? 'active' : ''"
        @click="distanceToCenter2()"
        >distanceToCenter = true</span
      >
    </div>
    <br />
    <div>
      <div class="title">修改limitingE=.demo，焦点只能在demo中移动</div>
      <span
        v-focusable
        class="btn"
        :class="limitingElActive === 1 ? 'active' : ''"
        @click="limitingEl1()"
        >limitingE = null</span
      >
      <span
        v-focusable
        class="btn"
        :class="limitingElActive === 2 ? 'active' : ''"
        @click="limitingEl2()"
        >limitingE = .demo</span
      >
    </div>
    <div class="demo">
      <span
        v-focusable
        v-for="(item, index) of data1"
        :key="index"
        class="span"
      >
        {{ item }}
        <template v-if="item == 'left'">向左跳转到第4个</template>
        <template v-if="item == 'up'">向上跳转到第10个</template>
      </span>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { getCurrentInstance } from 'vue'
export default {
  name: "FocusTest2",
  setup() {
    const state = reactive({
      data1: [],
      active: 2,
      disActive: 0,
      keysActive: 1,
      focusClassNameActive: 1,
      offsetDistanceActive: 1,
      distanceToCenterActive: 1,
      limitingElActive: 1,
    });
    const { proxy } = getCurrentInstance()
    onMounted(() => {
      setTimeout(() => {
        state.data1 = ['right',2,'down',4,5,6,7,'left',9,10,11,'up',13,'blur',15,16,'focus',18,19,29,21,'longpress',23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
      }, 1000);
    });


    /**
     * findFocusType：找焦点方式
     * 0：直线上
     * 1：最近（默认1）
     */
    const type1 = () => {
      state.active = 1;
      state.disActive = 2;
      proxy.$tv.findFocusType = 0; // 0：直线上最近的
      proxy.$tv.initDis = 29;
    };

    const type2 = () => {
      state.active = 2;
      state.disActive = 0;
      proxy.$tv.findFocusType = 1; // 1：上下左右距离最近的div
    };

    /**
     * initDis:
     * 直线类型找焦点时，按键方向的交叉轴方向允许的最大找焦点范围,
     * 设置initDis的前提是findFocusType为0
     * div2偏离水平线30个像素，initDis设置29是找不到div2的，此时可以设置大于29的值,就可以让div2获取焦点
     */
    const dis = (type, num) => {
      state.disActive = type;
      state.active = 1;
      proxy.$tv.findFocusType = 0;
      proxy.$tv.initDis = num;
    };

    // dis2 = () => {
    //   state.disActive = 2;
    //   state.active = 1;
    //   proxy.$tv.findFocusType = 0;
    //   proxy.$tv.findFocusType = 0;
    // }

    /**
     * KEYS: 自定义键值
     *  --KEY_UP: 上移时候的键值,
     * --KEY_RIGHT: 右移时候的键值
     * --KEY_DOWN: 下移时候的键值
     * --KEY_LEFT: 左移时候的键值
     * --KEY_ENTER: 触发clicl事件的键值
     */
    const keys1 = () => {
      state.keysActive = 1;
      proxy.$tv.KEYS = {
        KEY_LEFT: [65, 37], // 65:A  37:←
        KEY_UP: [87, 38], // 87:W  38:↑
        KEY_RIGHT: [68, 39], // 68:D   39:→
        KEY_DOWN: [83, 40], // 83：S  40:↓
        KEY_ENTER: [80, 13], // 32: P  13：enter键
      };
    };

    const keys2 = () => {
      state.keysActive = 2;
      proxy.$tv.KEYS = {
        KEY_LEFT: [90], // Z
        KEY_UP: [88], // X
        KEY_RIGHT: [67], // C
        KEY_DOWN: [86], // V
        KEY_ENTER: [66], // B
      };
    };

    /**
     * focusClassName: 自定义获取焦点的classname
     */
    const focusclassname1 = () => {
      state.focusClassNameActive = 1;
      this.toggleClass(
        document.getElementsByClassName("ng-focus-rotate")[0],
        "ng-focus-rotate"
      );
      proxy.$tv.focusClassName = "ng-focus-scale";
    };

    const focusclassname2 = () => {
      state.focusClassNameActive = 2;
      this.toggleClass(
        document.getElementsByClassName("ng-focus-scale")[0],
        "ng-focus-scale"
      );
      proxy.$tv.focusClassName = "ng-focus-rotate";
    };

    const offsetDistance1 = () => {
      state.offsetDistanceActive = 1;
      proxy.$tv.offsetDistance = 50;
    };
    const offsetDistance2 = () => {
      state.offsetDistanceActive = 2;
      proxy.$tv.offsetDistance = 250;
    };

    const distanceToCenter1 = () => {
      state.distanceToCenterActive = 1;
      proxy.$tv.distanceToCenter = false;
    };
    const distanceToCenter2 = () => {
      state.distanceToCenterActive = 2;
      proxy.$tv.distanceToCenter = true;
    };

    const limitingEl1 = () => {
      state.limitingElActive = 1;
      proxy.$tv.limitingEl = null;
    };
    const limitingEl2 = () => {
      state.limitingElActive = 2;
      proxy.$tv.limitingEl = document.querySelector(".demo");
    };

    const toggleClass = (el, className) => {
      if (!el) {
        return;
      }
      return el.classList.toggle(className);
    };

    return {
      type1,
      type2,
      dis,
      keys1,
      keys2,
      focusclassname1,
      focusclassname2,
      offsetDistance1,
      offsetDistance2,
      distanceToCenter1,
      distanceToCenter2,
      limitingEl1,
      limitingEl2,
      toggleClass,
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.demo {
  width: 700px;
  height: 700px;
  padding-top: 100px;
}
.span {
  display: inline-block;
  background: #6b9dff;
  width: 100px;
  height: 100px;
  margin-left: 20px;
  margin-top: 20px;
  transition: all 0.5s;
}
.span:nth-of-type(2) {
  position: relative;
  top: -30px;
}
.span:nth-of-type(6) {
  position: relative;
  left: -30px;
}
.span:nth-of-type(21) {
  position: relative;
  left: -30px;
}
.span:nth-of-type(12) {
  position: relative;
  top: 50px;
}
.ng-focus-scale {
  transform: scale(1.2);
  box-shadow: 0 0 20px blue;
}
.ng-focus-rotate {
  transform: rotate(90deg);
  background: pink;
  box-shadow: 0 0 20px blue;
}

.btn {
  padding: 2px;
  background-color: #ccc;
  cursor: pointer;
  margin-right: 15px;
  display: inline-block;
  font-size: 12px;
}
.btn.active {
  background-color: darkorange;
  color: #fff;
}
.focus {
  background-color: red;
}
</style>
