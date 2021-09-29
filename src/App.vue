<template>
  <div class="focusTest2">
    <div
      class="div_item"
      v-focusable
      v-for="(item,index) of data1"
      :key="index"
      @down="testDown(index)"
    >{{item.name}}</div>
    <div class="loading" v-show="loading">加载中...</div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "@vue/runtime-core";
import { getCurrentInstance } from 'vue'

export default {
  name: "FocusTest2",
  setup() {
    const { proxy } = getCurrentInstance()
    const state = reactive({
      data1: [],
      pageno: 0,
      loading:true
    });
    onMounted(() => {
      proxy.$tv.scrollEl = document.querySelector('.focusTest2')
      setTimeout(() => {
        state.pageno++;
        getData(state.pageno).then((res) => {
          state.loading = false
          state.data1 = res;
        });
      }, 2000);
    });
    const testDown = (index) => {
      if (index === state.data1.length - 2) {
        state.loading = true;
        state.pageno++;
        getData(state.pageno).then((res) => {
          state.loading = false;
          state.data1 = [...state.data1, ...res];
        });
      }
    };

    // 假装这是个接口
    const getData = (pageno) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          var json = [
            { name: `第${pageno}页,第1条` },
            { name: `第${pageno}页,第2条` },
            { name: `第${pageno}页,第3条` },
            { name: `第${pageno}页,第4条` },
          ];
          resolve(json);
        }, 1000);
      });
    };

    return {
      testDown,
      ...toRefs(state),
    };
  },
};
</script>
<style scoped>
.focusTest2 {
  width: 660px;height:600px;overflow: hidden;
  background: antiquewhite;padding:40px;text-align: center;
}
.div_item {
  width: 500px;
  height: 100px;line-height: 100px;
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
.loading{text-align: center;}
</style>
