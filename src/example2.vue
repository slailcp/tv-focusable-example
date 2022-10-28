<template>
  <div class="focusTest2">
    <div
      v-focusable
      class="div_item"
      v-for="(item, index) of data1"
      :key="index"
      @left="testLeft(item, $event)"
      @right="testRight(item, $event)"
      @up="testUp(item, $event)"
      @down="testDown(item, $event)"
      @long-press="longPress(item, $event)"
      @on-focus="testFocus(item, $event)"
      @on-blur="testBlur(item, $event)"
    >
      {{ item }}
      <template v-if="item == 'left'">向左跳转到第4个</template>
      <template v-if="item == 'up'">向上跳转到第10个</template>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { focusable } from "vue-tv-focusable";

export default {
  name: "FocusTest2",
  setup() {
    const testBlur = (item) => {
      if (item == "blur") {
        console.log("blur");
      }
    };
    const testFocus = (item) => {
      if (item == "focus") {
        console.log("focus");
      }
    };

    const testLeft = (item) => {
      if (item == "left") {
        console.log("left");
        focusable.next(
          focusable.getElementByPath('//div[@class="focusTest2"]/div[4]')
        );
      }else{
        focusable.next("left")
      }
    };
    const testRight = (item) => {
      if (item == "right") {
        console.log("right");
        focusable.next(item);
      }else{
        focusable.next("right")
      }
    };

    const testUp = (item) => {
      if (item == "up") {
        console.log("up");
        focusable.next(
          focusable.getElementByPath('//div[@class="focusTest2"]/div[10]')
        );
      }else{
        focusable.next("up")
      }
    };
    const testDown = (item) => {
      if (item == "down") {
        console.log("down");
        focusable.next(item);
      }else{
        focusable.next("down")
      }
    };

    const longPress = (item) => {
      if (item == "longpress") {
        console.log("longpress");
      }
    };
    const state = reactive({
      data1: [],
    });
    onMounted(() => {
      setTimeout(() => {
        state.data1 = [
          "right",
          2,
          "down",
          4,
          5,
          6,
          7,
          "left",
          9,
          10,
          11,
          "up",
          13,
          "blur",
          15,
          16,
          "focus",
          18,
          19,
          29,
          21,
          "longpress",
        ];
      }, 1000);
    });
    return {
      testBlur,
      testFocus,
      testLeft,
      testRight,
      testUp,
      longPress,
      testDown,
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.focusTest2 {
  width: 660px;
  background: antiquewhite;
}
.div_item {
  width: 100px;
  height: 100px;
  background-color: aquamarine;
  margin: 10px;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.focus {
  box-sizing: border-box;
  border: 2px solid #000000;
  transition: all 0.2s ease;
  border-radius: 0.2rem;
  z-index: 100;
}
</style>
