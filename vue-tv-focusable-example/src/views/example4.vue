<template>
  <div>
    <div>
      <div>跳转</div>
      <span class="btn" :class="active===1?'active':''" @click="skip1">动效跳到第35个div</span> <br/> <br/>
      <span class="btn" :class="active===2?'active':''" @click="skip2">没有动效跳到第50个div</span>
    </div><br>

    <div class="demo" style="margin-top:200px;">
      <div class="focus-item" v-focusable v-for="index in 150" :key="index" :ref="`fo`+index">
        {{ index }}
      </div>
    </div>
  </div>
</template>
<script>
/**
 * requestFocus(el,isAnimate); // isAnimate:是否有动画效果，默认true
 * getElementByPath(str); // xPath 获取el
 */
export default {
  data() {
    return{active:0}
  },
  created() {
    this.$nextTick(() => {
      this.$tv.requestFocus(this.$refs.fo6); // 带动画滚动到第一个div上
    })
  },

  methods: {
   skip1() {
     this.$tv.requestFocus(this.$tv.getElementByPath('//div[@class="demo"]/div[35]'))
   },
   skip2() {
     this.$tv.requestFocus(this.$tv.getElementByPath('//div[@class="demo"]/div[50]'), false);
   },
  }
  
}
</script>

<style lang="less" scoped>
.btn{display: inline-block;padding:10px;background: #ccc;margin-right:40px;cursor: pointer;}
.btn.active{background: red;}
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
}
.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
