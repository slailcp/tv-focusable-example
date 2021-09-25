<template>
  <div class="box">
    <div class="item" v-focusable>a</div>
    <div class="item" v-focusable @left="left">向左移动触发left事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable @right="right">向右移动触发right事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable  @up="up">向上移动触发up事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable @down="down">向下移动触发down事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable @on-blur="blur">移出焦点触发blur事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable @on-focus="focus">获取焦点触发focus事件</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
    <div class="item" v-focusable>c</div>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  setup() {
    const left = () => {
      alert('left');
    };
    const right = () => {
      alert('right');
    };
    const up = () => {
      alert('up');
    };
    const down = () => {
      alert('down');
    };
    const focus = () => {
      alert('focus');
    };
    const blur = () => {
      alert('blur');
    };
    return {
      left,
      right,
      up,
      down,
      focus,
      blur,
    };
  },
}
</script>

<style>
.box{width: 700px;margin:20px auto}
.item{display:inline-block;width:100px;height:100px;background-color: gray;margin-right:30px;margin-bottom:30px;transition: .2s all;}
.focus{color:#fff;transform: scale(1.2);}
</style>
