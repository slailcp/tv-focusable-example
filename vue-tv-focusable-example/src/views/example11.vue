<template>
  <div style="width:500px">
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="活动名称">
        <span v-focusable @click="numberClick()" @on-blur="numberblur()" class="inline-block"><el-input v-model="form.name"></el-input></span>
      </el-form-item>
      <el-form-item label="弹框选择">
        <div v-focusable @click="dialogopen()">{{form.more}}</div>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-focusable v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox v-focusable label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox v-focusable label="地推活动" name="type"></el-checkbox>
          <el-checkbox v-focusable label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox v-focusable label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="focusable选择radio">
        <el-radio-group v-model="form.focusableresource">
          <span class="inline-block" v-focusable @click="rediofocus()"><el-radio label="线上品牌商赞助"></el-radio></span>
          <span class="inline-block" v-focusable @click="rediofocus()"><el-radio v-focusable label="线下场地免费"></el-radio></span>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="element选择radio">
        <el-radio-group v-model="form.resource">
          <el-radio v-focusable label="线上品牌商赞助"></el-radio>
          <el-radio v-focusable label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <span v-focusable @click="textareaClick()" @on-blur="textareablur()" class="inline-block">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button v-focusable type="primary" @click="onSubmit">立即创建</el-button>
        <el-button v-focusable @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>


    <div class="dialog" v-if="vocationshow">
		  <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>请选择</span>
          <el-button v-focusable style="float: right; padding: 3px 0" type="text" @click="choosevocation()">关闭</el-button>
        </div>
        <div class="cont" style="height:150px;overflow:hidden;">
          <div v-focusable 
            :class="'item item'+item.value" 
            v-for="item in vocations" 
            :key="item.value" 
            @click="choosevocation(item)">
            {{item.name}}
          </div>
        </div>
      </el-card>
	  </div>
  </div>

</template>
<script>
export default {
  name: "Example9",
  data() {
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          focusableresource:'',
          desc: '',
          more:'按ok键选择'
        },
        oldFocusEl:null,
        vocationshow:false,
        vocations:[
          {name:'医生',value:'1'},
          {name:'老师',value:'2'},
          {name:'建筑师',value:'3'},
          {name:'护士',value:'4'},
          {name:'清洁工',value:'5'},
          {name:'司机',value:'6'},
          {name:'司机1',value:'61'},
          {name:'司机2',value:'62'},
          {name:'司机3',value:'63'},
          {name:'司机4',value:'64'},
          {name:'司机5',value:'65'},
          {name:'司机6',value:'66'},
          {name:'司机7',value:'67'},
          {name:'司机8',value:'68'},
          {name:'司机9',value:'69'},
          {name:'司机10',value:'610'},
          {name:'司机11',value:'611'},
        ],
    };
  },
  created() {
   this.$nextTick(() => {
     // element的某些功能自带 上下左右以及enter建 事件,会和focusable冲突,可以用AWDSP键 替换测试
      this.$tv.KEYS = {
        KEY_LEFT: [65, 37], // 65:A  37:←
        KEY_UP: [87, 38], // 87:W  38:↑
        KEY_RIGHT: [68, 39], // 68:D   39:→
        KEY_DOWN: [83, 40], // 83：S  40:↓
        KEY_ENTER: [80, 13], // 32: P  13：enter键
      };
   })
  },
  destroyed() {
   
  },

  methods: {
    rediofocus(){
      document.querySelector('.focus input[type=radio]').click()
    },
    numberblur(){
      document.querySelector('.focus input').blur()
    },
    numberClick(){
      document.querySelector('.focus input').focus()
    },
    textareaClick(){
      document.querySelector('.focus textarea').focus()
    },
    textareablur(){
      document.querySelector('.focus textarea').blur()
    },


    
    onSubmit() {
      alert('submit!');
    },
    onCancel() {
      alert('onCancel!');
    },
    choosevocation(item){ 
      if(item){this.form.more = item.name;}
			this.vocationshow = false;
			this.$tv.scrollEl = null; // 还原局部滚动元素
			this.$tv.limitingEl = null; // 清除焦点约束
				
			if (this.oldFocusEl) { this.$tv.requestFocus(this.oldFocusEl) } // 还原打开 dialog 前的焦点状态
		},
		dialogopen(){
			this.vocationshow = true;
			this.oldFocusEl = document.querySelector(`.${this.$tv.focusClassName}`); // 记录当前焦点
			this.$nextTick(() => {
				this.$tv.limitingEl = document.querySelector(".dialog"); // 只允许.demo2里面的focusable可以获取焦点
				this.$tv.setScrollEl(document.querySelector(".cont"))
				this.$tv.requestFocus(
					 document.querySelector(".item1")
				);
			})
		}
  },
};
</script>


<style lang="less" scoped>
  .focus{box-shadow:0 0 5px #00a0e9;}
  .inline-block{display:inline-block}
	.dialog{position: fixed;top:0;bottom:0;left:0;right:0;z-index:99;background-color: rgba(0,0,0,0.5);align-items: center;justify-content: center;}
	.box-card{
		position: absolute;left:50%;top:50%;margin-top:-250px;margin-left:-250px;
		width: 320px;
	}
	// .content .tabs{width:300px;padding:10px 0;}
	.box-card .item{height: 30px;}
 .box-card .focus{box-shadow:none;font-size: 16px;color:#FF6600;}
</style>
