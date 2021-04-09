<template>
  <div class="demo">
    <div class="menu">
      <div
        @onFocus="menuFocus(i)"
        @up="menuUp(i, $event)"
        @down="menuDown(i, $event)"
        @right="menuRight"
        v-focusable
        class="item"
        v-for="i in 10"
        :key="i"
      >
        menu-{{ i }}
      </div>
    </div>
    <div class="content">
      <div
        @onFocus="contentFocus"
        @up="contentUp(index, $event)"
        @down="contentDown(index, $event)"
        @left="contentLeft(index)"
        class="item"
        v-focusable
        v-for="index in contentCount"
        :key="index"
      >
        {{ currentMenu }}--{{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example6",
  data() {
    return {
      currentMenu: 0,
      contentCount: 30,
    };
  },
  created() {
    this.$nextTick(() => {
      this.$tv.requestFocus(
        this.$tv.getElementByPath(
          '//div[@class="demo"]/div[@class="menu"]/div[1]'
        )
      );
    });
  },
  destroyed() {
    // 为了不影响别的界面交互，销毁的时候，如果有全局的配置属性就重置成全局配置，没有全局配置的属性就重置成系统默认的配置
    this.$tv.reset();
  },
  methods: {
    menuFocus(i) {
      //切换滚动元素到menu
      this.currentMenu = i;
      this.$tv.setScrollEl(this.$tv.getElementByPath("//div[@class='menu']"));
    },

    contentFocus() {
      //切换滚动元素到内容
      this.$tv.setScrollEl(
        this.$tv.getElementByPath("//div[@class='content']")
      );
    },

    menuUp(i, event) {
      //在第一个menu按上，焦点不动
      if (i == 1) {
        this.$tv.requestFocus(event.target);
      }
    },

    menuDown(i, event) {
      //在最下面一个menu按下，焦点不动，避免右边内容item自动聚焦
      if (i == 10) {
        this.$tv.requestFocus(event.target);
      }
    },

    menuRight() {
      //从menu到内容时固定到内容的第一个元素
      this.$tv.requestFocus(
        this.$tv.getElementByPath("//div[@class='content']/div[1]"),
        false
      );
    },

    contentDown(index, event) {
      if (this.contentCount - index < 3) {
        //如果是最后一行的内容,按下焦点不许动
        this.$tv.requestFocus(event.target);
      }
    },

    contentLeft(i) {
      if (i % 3 == 1) {
        //在第一列的内容上按左时，让当前menu的item聚焦
        this.$tv.requestFocus(
          this.$tv.getElementByPath(
            `//div[@class='menu']/div[${this.currentMenu}]`
          ),
          false
        );
      }
    },
    contentUp(index, event) {
      if (index <= 3) {
        this.$tv.requestFocus(event.target);
      }
    },
  },
};
</script>


<style lang="less" scoped>
.demo {
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  .content {
    height: 600px;
    overflow: auto;
    background-color: bisque;

    .item {
      width: 300px;
      height: 100px;
      line-height: 100px;
      margin: 10px;
      display: inline-block;
      background-color: #2c3e50;
      box-sizing: border-box;
      vertical-align: top;
      color: #ffffff;
    }
  }

  .menu {
    height: 600px;
    overflow: hidden;
    padding: 20px;

    .item {
      width: 200px;
      height: 100px;
      line-height: 100px;
      box-sizing: border-box;
      display: inline-block;
      background-color: #cccccc;
      margin-bottom: 10px;
    }
  }
}

.focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
