<template>
  <div class="focusTest2">
    <!-- <div v-focusable class="div_item" @left="testLeft($event)" @up="testUp">
      1
    </div>
    <div
      v-focusable
      class="div_item"
      @onBlur="testBlur($event)"
      @onFocus="testFocus($event)"
    >
      2
    </div>
    <div v-focusable class="div_item">3</div>
    <div v-focusable class="div_item">4</div> -->
    
    <div v-focusable class="div_item" v-for="(item, index) of data1" :key="index" 
    @left="testLeft(item,$event)" 
    @right="testRight(item,$event)" 
    @up="testUp(item,$event)" 
    @down="testDown(item,$event)"
    @long-press="longPress(item,$event)" 
    @on-focus="testFocus(item,$event)" 
    @on-blur="testBlur(item,$event)"
    >
      {{item}}
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from '@vue/runtime-core';
export default {
  name: "FocusTest2",
  setup() {
    const testBlur = (item) => {
      if(item == 'blur'){ console.log('blur');}
    };
    const testFocus = (item) => {
      if(item == 'focus'){ console.log('focus');}
    };

    const testLeft = (item) => {
      if(item == 'left'){ console.log('left');}
    };
    const testRight = (item) => {
      if(item == 'right'){ console.log('right');}
    };
    
    const testUp = (item) => {
      if(item == 'up'){ console.log('up');}
    };
    const testDown = (item) => {
      if(item == 'down'){ console.log('down');}
    };

    const longPress = (item) => {
      if(item == 'longpress'){ console.log('longpress');}
    };
    const state = reactive({
        data1:[],
    })
    onMounted(()=>{
        setTimeout(()=>{
            state.data1 = ['right',2,'down',4,1,2,3,'left',1,2,3,'up',1,'blur',3,4,'focus',1,2,4,4,'longpress']
        },1000)
    })
    return {
      testBlur,
      testFocus,
      testLeft,
      testRight,
      testUp,
      longPress,
      testDown,
      ...toRefs(state)
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
