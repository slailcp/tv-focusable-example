<template>
  <div>
    <div style="position: relative; width: 500px; margin: 100px auto">
      <div
        ref="aa"
        style="position: absolute; top: 0; left: 0"
        v-focusable
        class="auto-hehe auto-item aa"
      >
        aa
      </div>
      <div
        style="position: absolute; top: 120px; left: 0"
        v-focusable
        class="auto-item bb focus"
      >
        bb
      </div>
      <div
        style="position: absolute; top: 240px; left: 0"
        class="not-auto-item cc"
      >
        cc
      </div>
      <div
        style="position: absolute; top: 360px; left: 0"
        v-focusable
        class="auto-item cc"
        @down="down"
      >
        vv 向下跳到 55
      </div>
      <div
        ref="dd"
        style="position: absolute; top: 10px; left: 120px"
        v-focusable
        class="auto-item dd"
        @left="left"
      >
        dd 向左跳到 ii
      </div>
      <div
        style="position: absolute; top: 20px; left: 240px"
        v-focusable
        class="auto-item ee"
      >
        ee
      </div>
      <div
        ref="ff"
        style="position: absolute; top: 12px; left: 360px"
        v-focusable
        class="auto-item ff"
      >
        ff
      </div>
      <div
        style="position: absolute; top: 0; left: 480px"
        v-focusable
        class="auto-item gg"
      >
        gg
      </div>
      <div
        style="position: absolute; top: 480px; left: 0"
        v-focusable
        class="auto-item hh"
      >
        hh
      </div>
      <div
        ref="ii"
        style="position: absolute; top: 120px; left: 480px"
        v-focusable
        class="auto-item asd"
      >
        ii
      </div>
      <div
        style="position: absolute; top: 240px; left: 120px"
        v-focusable
        class="auto-item asd"
        @right="right"
      >
        jj 向右跳到dd
      </div>
      <br />
      <div
        style="position: absolute; top: 360px; left: 120px"
        v-focusable
        class="auto-item asd"
        @up="up"
      >
        kk 向上跳到ff
      </div>
      <div
        style="position: absolute; top: 480px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        ll
      </div>
      <div
        style="position: absolute; top: 480px; left: 240px"
        v-focusable
        class="auto-item asd"
      >
        222
      </div>
      <div
        style="position: absolute; top: 480px; left: 360px; height: 200px"
        v-focusable
        class="auto-item asd"
        @click="enter"
      >
        333 enter键触发click 跳转到example3页面
      </div>
      <div
        style="position: absolute; top: 480px; left: 480px"
        v-focusable
        class="auto-item asd"
      >
        444
      </div>
      <div
        style="position: absolute; top: 480px; left: 600px"
        v-focusable
        class="auto-item asd"
      >
        555
      </div>
      <div
        style="position: absolute; top: 480px; left: 720px"
        v-focusable
        class="auto-item asd"
      >
        666
      </div>
      <div
        ref="div777"
        style="position: absolute; top: 480px; left: 840px"
        v-focusable
        class="auto-item asd"
      >
        777
      </div>
      <div
        style="position: absolute; top: 480px; left: 960px"
        v-focusable
        class="auto-item asd"
      >
        888
      </div>
      <div
        style="position: absolute; top: 480px; left: 1160px"
        v-focusable
        class="auto-item asd"
      >
        999
      </div>
      <div
        style="position: absolute; top: 480px; left: 1360px"
        v-focusable
        class="auto-item asd"
      >
        10
      </div>
      <div
        style="position: absolute; top: 480px; left: 1560px"
        v-focusable
        class="auto-item asd"
      >
        11
      </div>
      <div
        style="position: absolute; top: 480px; left: 1760px"
        v-focusable
        class="auto-item asd"
      >
        12
      </div>
      <div
        style="position: absolute; top: 480px; left: 1960px"
        v-focusable
        class="auto-item asd"
      >
        13
      </div>
      <div
        style="position: absolute; top: 480px; left: 2100px"
        v-focusable
        class="auto-item asd"
      >
        14
      </div>
      <div
        style="position: absolute; top: 480px; left: 2300px"
        v-focusable
        class="auto-item asd"
      >
        15
      </div>
      <div
        style="position: absolute; top: 480px; left: 2500px"
        v-focusable
        class="auto-item asd"
      >
        16
      </div>
      <div
        style="position: absolute; top: 480px; left: 2700px"
        v-focusable
        class="auto-item asd"
      >
        17
      </div>
      <div
        style="position: absolute; top: 480px; left: 2900px"
        v-focusable
        class="auto-item asd"
      >
        18
      </div>

      <div
        style="position: absolute; top: 680px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        mm
      </div>
      <div
        style="position: absolute; top: 880px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        nn
      </div>
      <div
        ref="oo"
        style="position: absolute; top: 1080px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        oo
      </div>

      <div
        style="position: absolute; top: 1680px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        rr
      </div>
      <div
        style="position: absolute; top: 1880px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        ss
      </div>
      <div
        style="position: absolute; top: 2080px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        tt
      </div>
      <div
        style="position: absolute; top: 2280px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        uu
      </div>
      <div
        style="position: absolute; top: 2480px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        ww
      </div>
      <div
        style="position: absolute; top: 2680px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        xx
      </div>
      <div
        style="position: absolute; top: 2880px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        yy
      </div>
      <div
        style="position: absolute; top: 3080px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        zz
      </div>
      <div
        ref="v55"
        style="position: absolute; top: 3280px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        55
      </div>
      <div
        style="position: absolute; top: 3480px; left: 120px"
        v-focusable
        class="auto-item asd"
      >
        66
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Example5",
  created() {
    this.$nextTick(() => {
      this.$tv.requestFocus(this.$refs.div777, false);
    });
  },
  methods: {
    enter() {
      this.$router.push({ path: "/example3" });
    },
    left() {
      this.$tv.requestFocus(this.$refs.ii);
      console.log("左");
    },
    right() {
      this.$tv.requestFocus(this.$refs.dd);
      console.log("右");
    },
    up() {
      this.$tv.requestFocus(this.$refs.ff);
      console.log("上");
    },
    down() {
      this.$tv.requestFocus(this.$refs.v55);
      console.log("下");
    },
  },
};
</script>
<style scoped>
.not-auto-item {
  height: 100px;
  width: 100px;
  display: inline-block;
  margin: 20px;
  background: #fafafa;
  box-sizing: border-box;
  vertical-align: top;
}
.auto-item {
  height: 100px;
  width: 100px;
  display: inline-block;
  margin: 20px;
  background: pink;
  box-sizing: border-box;
  vertical-align: top;
}
.focus {
  color: red;
  border: 5px solid red;
  box-shadow: 0 0 20px red;
}
</style>