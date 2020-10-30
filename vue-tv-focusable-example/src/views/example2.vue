<template>
  <div>
    <div>
      <div>修改findFocusType</div>
      <span class="btn" :class="active===1?'active':''" @click="type1(1)">优先直线</span>
      <span class="btn" :class="active===2?'active':''" @click="type2(2)">优先最近</span>
    </div><br>
    <div>
      <div>修改initDis</div>
      <span class="btn" :class="disActive===1?'active':''" @click="dis1(1)">initDis 20px</span>
      <span class="btn" :class="disActive===2?'active':''" @click="dis2(2)">initDis 100px</span>
    </div><br>
    <div>
      <div>修改KEYS</div>
      <span class="btn" :class="keysActive===1?'active':''" @click="keys1(1)">A/W/D/S/P</span>
      <span class="btn" :class="keysActive===2?'active':''" @click="keys2(2)">Z/X/C/V/B</span>
    </div>
    <div class="demo" style="margin-top:200px;">
      <div class="focus-item" v-focusable v-for="index in 150" :key="index" :ref="`fo`+index"
        @left="event('left',index)"
        @right="event('right',index)"
        @up="event('up',index)"
        @down="event('down',index)"
        @click="event('enter',index)"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active: 2,
      disActive:1,
      keysActive: 1
    }
  },
  created() {
    this.keys1();

    // 当前页面自定义配置
    this.$tv.init({
      focusClassName: "on-focus", // 选中的class
    });

    this.$nextTick(() => {
      this.$tv.requestFocus(this.$refs.fo1, false);
    })
  },
  destroyed() {
    // 为了不影响别的界面交互，销毁的时候，如果有全局的配置属性就重置成全局配置，没有全局配置的属性就重置成系统默认的配置
    // FocusClassName/FindFocusType/InitDis没有做全局配置，调用resetXXX()就行
    this.$tv.resetFocusClassName();
    this.$tv.resetFindFocusType();
    this.$tv.resetInitDis();
    // 由于main.js的init中只设置了KEYS，所以将KEYS重置为配置的值
    this.$tv.init({
      KEYS: {
        KEY_LEFT: [37],
        KEY_UP: [38],
        KEY_RIGHT: [39],
        KEY_DOWN: [40],
        KEY_ENTER: [83, 13],
      }
    });
  },

  methods: {
    event(type, index) {
      if(index === 8) {
        if(type === 'left' ) {console.log('left');}
        if(type === 'up' ) {console.log('up');}
        if(type === 'right' ) {console.log('right');}
        if(type === 'down' ) {console.log('down');}
        if(type === 'enter' ) {console.log('enter');}
      }
    },
    type1() {
      this.active = 1;
      this.$tv.init({ findFocusType: 0});
    },
    type2() {
      this.active = 2;
      this.$tv.init({ findFocusType: 1});
    },
    dis1() {
      this.disActive = 1;
      this.active = 1;
      this.$tv.init({ findFocusType: 0, initDis: 20}); //  设置initDis的前提是findFocusType为0
    },
    dis2() {
      this.disActive = 2;
      this.active = 1;
      this.$tv.init({ findFocusType: 0, initDis: 100});
    },
    keys1() {
      this.keysActive = 1;
      this.$tv.init({ 
        KEYS: {
          KEY_LEFT: [65, 37], // 65:A  37:←
          KEY_UP: [87, 38], // 87:W  38:↑
          KEY_RIGHT: [68, 39], // 68:D   39:→
          KEY_DOWN: [83, 40], // 83：S  40:↓
          KEY_ENTER: [80, 13], // 32: P  13：enter键
        }
      });
    },
    keys2() {
      this.keysActive = 2;
      this.$tv.init({ 
        KEYS: {
          KEY_LEFT: [90], // Z
          KEY_UP: [88], // X
          KEY_RIGHT: [67], // C
          KEY_DOWN: [86], // V
          KEY_ENTER: [66], // B
        }
      });
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

  div:nth-child(2) {
    position: relative;
    top: -80px;
  }

  div:nth-child(6) {
    position: relative;
    top: 100px;
  }

  div:nth-child(11) {
    position: relative;
    top: 100px;
  }
}
.on-focus {
  transform: scale(1.1);
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
</style>
