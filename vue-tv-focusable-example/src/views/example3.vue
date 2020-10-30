<template>
    <div class="demo">
        <div class="wrapper">
            <div class="focus-item" :class="index===3?'focus':'focus'+index" v-focusable v-for="index in 105" :key="index" :ref="`fo`+index">
                {{ index }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created() {
      this.$nextTick(() => {
          this.$tv.setScrollEl(this.$tv.getElementByPath('//div[@class="demo"]'));
          this.$tv.requestFocus(this.$refs.fo5)
      })
  },
  destroyed() {
    // 由于设置的全局的init，为了不影响别的界面交互，销毁的时候，init里面的数据重置成全局的数据
    this.$tv.resetScrollEl();
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
    .demo {
        margin: 0 auto;
        width: 600px;
        height: 400px;
        position: relative;

        overflow: auto;
        .wrapper{
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
        transform: scale(1.1);
        border: 2px solid red;
        box-shadow: 0 0 20px red;
    }
</style>
