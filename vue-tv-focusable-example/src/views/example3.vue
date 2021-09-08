<template>
  <div>
    <div>
      <div>修改distanceToCenter</div>
      <span
        class="btn"
        :class="distanceToCenterActive === 1 ? 'active' : ''"
        @click="distanceToCenter1(1)"
        >distanceToCenter = false</span
      >
      <span
        class="btn"
        :class="distanceToCenterActive === 2 ? 'active' : ''"
        @click="distanceToCenter2(2)"
        >distanceToCenter = true</span
      >
    </div>
    <div class="demo">
      <div class="wrapper">
        <div
          class="focus-item"
          :class="index === 3 ? 'focus' : 'focus' + index"
          v-focusable
          v-for="index in 105"
          :key="index"
          :ref="`fo` + index"
        >
          {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example3",
  data() {
    return {
      distanceToCenterActive: 1,
    };
  },
  created() {
    this.$nextTick(() => {
      console.log(this.$tv.limitingEl)
      //this.$tv.limitingEl = null
      this.$tv.reset();
      this.$tv.setScrollEl(document.querySelector(".demo"));
      //   this.$tv.setScrollEl(this.$tv.getElementByPath('//div[@class="demo"]'));
      this.$tv.requestFocus(this.$refs.fo5);
    });
  },
  destroyed() {
    // 由于设置的全局的init，为了不影响别的界面交互，销毁的时候，init里面的数据重置成全局的数据
    this.$tv.resetScrollEl();
    this.$tv.distanceToCenter = false;
  },
  methods: {
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
.btn {
  display: inline-block;
  padding: 10px;
  background: #ccc;
  margin-right: 40px;
  cursor: pointer;
}
.btn.active {
  background: red;
}
.demo {
  background: gray;
  margin: 100px auto;
  width: 600px;
  height: 400px;
  position: relative;

  overflow: hidden;
  .wrapper {
    width: 800px;
  }

  .focus-item {
    width: 100px;
    height: 100px;
    margin: 10px;
    display: inline-block;
    background-color: pink;
    box-sizing: border-box;
    vertical-align: top;
  }

  div:nth-child(2) {
    position: relative;
    top: 15px;
  }

  div:nth-child(26) {
    position: relative;
    width: 200px;
    height: 200px;
  }
}

.focus {
  transform: scale(1.2);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
