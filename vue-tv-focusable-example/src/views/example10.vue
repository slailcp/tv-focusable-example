<template>
  <div class="form">
    <div class="group">
      <span class="key">姓名</span>
      <span class="value"><input class="text" type="text" v-focusable/></span>
    </div>
    <div class="group">
      <span class="key">性别</span>
      <div class="value">
        <label><input type="radio" name="sex" v-focusable/> 男</label>  
        <label><input type="radio" name="sex" v-focusable/> 女</label>
      </div>
    </div>
    <div class="group">
      <span class="key">爱好</span>
      <div class="value">
        <label><input type="checkbox" name="like" v-focusable/> 跑步</label>  
        <label><input type="checkbox" name="like" v-focusable/> 打球</label>  
        <label><input type="checkbox" name="like" v-focusable/> 游泳</label>  
        <label><input type="checkbox" name="like" v-focusable/> 爬山</label>
      </div>
    </div>

    <div class="group">
      <span class="key">公司</span>
      <span class="value">
        <select class="text" v-focusable>
          <option value="">请选择</option>
          <option value="张三企业">张三企业</option>
          <option value="里斯企业">里斯企业</option>
          <option value="王五企业">王五企业</option>
        </select>
      </span>
    </div>

    <div class="group">
      <span class="key">说明</span>
      <span class="value">
        <textarea v-focusable></textarea>
      </span>
    </div>

    <div class="btns">
      <input v-focusable class="btn cancel" type="button" @click="click('取消')" value="取消"/>
      <button v-focusable class="btn" @click="click('保存')">保存</button>
    </div>   
  </div>
</template>
<script>
export default {
  name: "Example9",
  data() {
    return {
      show: false,
      focusEl: null,
    };
  },
  created() {
   this.$nextTick(() => {
     //this.$tv.formAutofocus = false; // 关闭表单enter的时候获取焦点
  })
  },
  destroyed() {
   
  },

  methods: {
    click(type){
     alert(type)
    }
  },
};
</script>


<style lang="less" scoped>
.form{width:500px;}
.group{display:flex;line-height:34px;}
.key{width:100px;text-align:right;margin:5px 0 5px 10px;}
.value{flex:1;margin:5px 0 5px 10px;
  .text,textarea{display:block;border:1px solid #d8d8d8;width:200px;line-height:32px;height:32px;}
  label{padding-right:10px;}
}
.btns{padding-top:40px;padding-left:122px;}
.btn{background:#00a0e9;border:0;display:inline-block;min-width:100px;text-align:center;line-height:34px;color:#fff;border-radius:4px;margin-right:20px;}
.btn.cancel{background:#d8d8d8;color:#333;}
.focus{box-shadow:0 0 5px #00a0e9;}
</style>
