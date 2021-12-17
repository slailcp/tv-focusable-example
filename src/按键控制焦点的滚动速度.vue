<template>
  <div class="focusTest2">
    <div v-focusable class="div_item" v-for="item in 100" :key="item" @up="testUp($event)" @down="testDown($event)" >
      {{ item }}
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { getCurrentInstance } from "vue";

export default {
  name: "FocusTest2",
  setup() {
    const state = reactive({
      dif: 0,
      time: 500, // 毫秒
    });
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.$tv.scrollEl = document.querySelector('.focusTest2')
    });
    const testUp = () => {
      var now = Date.now();
      if (now - state.dif < 500) {
        proxy.$tv.requestFocus(event.target);
        return;
      }
      state.dif = now;
    };
    const testDown = (event) => {
      var now = Date.now();
      if (now - state.dif < state.time) {
        proxy.$tv.requestFocus(event.target);
        return;
      }
      state.dif = now;
    };

    return {
      testUp,
      testDown,
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.focusTest2 {
  width: 660px;overflow: hidden;height:600px;
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
