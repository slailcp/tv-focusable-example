<template>
  <div class="tv-box">
    <!-- <div class="nav-img"><img src="../assets/tv/nav.png"/></div> -->
    <div class="item-box">
      <div class="perspective" style="">
        <div
          class="item"
          :ref="'fo' + index"
          :style="{
            left: -100 * index - index * 20 + 'px',
            zIndex:
              activeIndex === index
                ? 1100
                : 1000 - Math.abs(activeIndex - index) * 5,
            transform: `rotateY(${
              activeIndex < index
                ? '-30deg'
                : activeIndex === index
                ? '0deg'
                : '30deg'
            }) scale(${1 - Math.abs(activeIndex - index) * 0.05})`,
          }"
          v-focusable
          @left="left(index, $event)"
          @right="right(index, $event)"
          @down="nofocus"
          @up="nofocus"
          @click="skip(index)"
          v-for="(item, index) of list"
          :key="index"
        >
          <img :src="item.url" />
          <span class="txt">{{ item.title }}</span>
        </div>
      </div>
    </div>
    <div class="bottom-img"><img src="../assets/tv/r-menu.png" /></div>
    <div class="loading" v-show="loadingShow">
      <img src="../assets/tv/loadingCancel.gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Example8",
  data() {
    return {
      loadingShow: false,
      activeIndex: 2,
      list: [
        { url: require("../assets/tv/r-1.jpg"), title: "灰姑娘1" },
        { url: require("../assets/tv/r-2.jpg"), title: "灰姑娘2" },
        { url: require("../assets/tv/r-3.jpg"), title: "灰姑娘3" },
        { url: require("../assets/tv/r-4.jpg"), title: "灰姑娘4" },
        { url: require("../assets/tv/r-5.jpg"), title: "灰姑娘5" },
        { url: require("../assets/tv/r-6.jpg"), title: "灰姑娘6" },
        { url: require("../assets/tv/r-7.jpg"), title: "灰姑娘7" },
        { url: require("../assets/tv/r-8.jpg"), title: "灰姑娘8" },
        { url: require("../assets/tv/r-9.jpg"), title: "灰姑娘9" },
      ],
    };
  },
  created() {
    document.body.style.backgroundColor = "#010d19";

    this.$nextTick(() => {
      this.$tv.distanceToCenter = true;
      this.$tv.setScrollEl(document.querySelector(".item-box"));
      this.$tv.requestFocus(
        this.$tv.getElementByPath("//div[@class='perspective']/div[3]")
      );
    });
  },
  destroyed() {
    document.body.style.backgroundColor = "#fff";
    this.$tv.reset()
  },
  methods: {
    skip(index) {
      if (index === 8) {
        this.loadingShow = true;
        setTimeout(() => {
          this.$router.push({ path: "/tv-detail8" });
        }, 1000);
      }
    },
    nofocus(event) {
      this.$tv.requestFocus(event.target);
    },
    right(index, event) {
      if (index === this.list.length - 1) {
        return;
      }

      this.activeIndex = index + 1;
    },
    left(index, event) {
      if (index === 0) {
        return;
      }
      this.activeIndex = index - 1;
    },
  },
};
</script>


<style lang="less" scoped>
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  img {
    width: 200px;
  }
}
.tv-box {
  background: #010d19;
  margin-top: 40px;
}
.item-box {
  width: 1180px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  padding: 50px;
  transition: all 0.5s;
}
.perspective {
  display: flex;
  perspective: 2210px;
  width: 2210px;
}
.item {
  flex: 0 0 350px;
  transition: all 1s;
  position: relative;
  background: none;
  img {
    width: 350px;
    height: 569px;
    border-radius: 30px;
    box-shadow: 1px 1px 43px rgba(198, 184, 255, 0.8);
    border: 3px solid #4a75a2;
    box-sizing: border-box;
  }
  .txt {
    text-align: center;
    display: inline-block;
    width: 100%;
    line-height: 46px;
    color: #fff;
  }
  &:last-child {
    margin-right: 100px;
  }
}

.bottom-img,
.nav-img {
  width: 100%;
  text-align: center;
}

.focus {
  z-index: 99999 !important;
  transform: none !important;
  img {
    border-color: #c3b7ff;
  }
}
</style>
