<template>
  <div>
     <button @click="scrollto1">
         页面滚动，滚动到.page1处，距离浏览器底部100</button><br />
     <button @click="scrollto2">页面滚动，滚动到.page1处，居中展示</button><br />
     <button @click="scrollto3">
         局部滚动，滚动到”标识12“处，距离scroll底部100</button><br />
     <button @click="scrollto4">
         局部滚动，滚动到”标识12“处，在scroll中居中展示</button><br />
     <div class="wraper flexbox">
         <div class="box1 scroll" v-focusable style="width: 100%">
             <div class="flexbox" style="width: 300%">
                 <div class="item item5" v-for="item of 105" :key="item">局部滚动</div>
                 <div id="scrol12" class="item item5" style="background: pink">
                     标识12
                 </div>
                 <div class="item item5" v-for="item of 50" :key="item">局部滚动</div>
             </div>
         </div>

         <div class="box1 flexbox" style="width: 100%">
             <div v-focusable class="item item2" style="margin-bottom: 10px" v-for="item of 10" :key="item"></div>
         </div>
         <div id="page1" style="
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          background: pink;
          font-size: 30px;
          text-align: center;
          line-height: 100px;
        ">
             page1
         </div>
         <div class="box1 flexbox" style="width: 100%">
             <div v-focusable class="item item2" style="margin-bottom: 10px" v-for="item of 10" :key="item"></div>
         </div>
     </div>
 </div>
</template>

<script>
import { focusable } from "vue-tv-focusable";

export default {
  name: "Example3",
  data() {
    return {};
  },
  mounted() {},
  destroyed() {},
  methods: {
    scrollto1() {
      focusable.scrollTo({
        targetEl: document.querySelector("#page1"),
        offset: 100, // 距离边界100
      });
    },
    scrollto2() {
      focusable.scrollTo({
        targetEl: document.querySelector("#page1"),
        iscenter: true, // 居中
      });
    },
    scrollto3() {
      focusable.scrollTo({
        scrollEl: document.querySelector(".scroll"),
        targetEl: document.querySelector("#scrol12"),
        offset: 50, // 距离边界50
      });
    },
    scrollto4() {
      focusable.scrollTo({
        scrollEl: document.querySelector(".scroll"),
        targetEl: document.querySelector("#scrol12"),
        iscenter: true, // 居中
      });
    },
  },
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.item {
  background: rgb(189, 217, 254);
}
.item1 {
  width: 100%;
  height: 100%;
}
.item2 {
  width: 100%;
  height: 140px;
}

.item3 {
  width: 100px;
  height: 95px;
}
.item4 {
  width: 100px;
  height: 100%;
}
.item5 {
  width: 90px;
  height: 100px;
  margin: 5px;
}
.wraper {
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  .box1 {
    width: 32.5%;
    min-height: 300px;
    margin-bottom: 10px;
  }
}
.scroll {
  height: 300px;
  overflow: hidden;
  .item {
    background-color: rgb(255, 226, 186);
  }
}

.focus {
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
