<template>
  <div style="width:500px">
    <a-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <a-form-item label="Plain Text">
      <span class="ant-form-text">
        China
      </span>
    </a-form-item>
    <a-form-item label="弹框选择">
      <span class="ant-form-text inline-block" @click="dialogopen()"  v-focusable>
        {{more}}
      </span>
    </a-form-item>

    <a-form-item label="InputNumber">
      <span @click="numberClick()" v-focusable  @on-blur="numberblur()" class="inline-block">
          <a-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
      </span>
      <span class="ant-form-text">
        machines
      </span>
    </a-form-item>

    <a-form-item label="Switch">
      <a-switch v-focusable v-decorator="['switch', { valuePropName: 'checked' }]" />
    </a-form-item>

    <a-form-item label="Radio.Group">
      <a-radio-group v-decorator="['radio-group']">
        <a-radio value="a" v-focusable>
          item 1
        </a-radio>
        <a-radio value="b" v-focusable>
          item 2
        </a-radio>
        <a-radio value="c" v-focusable>
          item 3
        </a-radio>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="Radio.Button">
      <a-radio-group v-decorator="['radio-button']">
        <a-radio-button value="a" v-focusable>
          item 1
        </a-radio-button>
        <a-radio-button value="b" v-focusable>
          item 2
        </a-radio-button>
        <a-radio-button value="c" v-focusable>
          item 3
        </a-radio-button>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="Checkbox.Group">
      <a-checkbox-group
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%;"
      >
        <a-row>
          <a-col :span="8">
            <a-checkbox value="A" v-focusable>
              A
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox disabled value="B" v-focusable>
              B
            </a-checkbox>
          </a-col>
          <a-col :span="8">
            <a-checkbox value="C" v-focusable>
              C
            </a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item label="Textarea">
      <span v-focusable @click="textareaClick()" @on-blur="textareablur()" class="inline-block">
        <a-textarea placeholder="textarea with clear icon" allow-clear />
      </span>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <a-button type="primary" html-type="button" v-focusable>
        Submit
      </a-button>
    </a-form-item>
  </a-form>


  <div class="dialog" v-if="vocationshow">
    <a-card  class="box-card" title="请选择">
      <a slot="extra" href="javascript:;" @click="choosevocation()"  v-focusable>关闭</a>
      <div class="cont" style="height:150px;overflow:hidden;">
        <div v-focusable 
          :class="'item item'+item.value" 
          v-for="item in vocations" 
          :key="item.value" 
          @click="choosevocation(item)">
          {{item.name}}
        </div>
      </div>
    </a-card>
  </div>
</div>

</template>
<script>
export default {
  name: "Example9",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  data() {
    return {
      formLayout: 'horizontal',
      formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
      form: this.$form.createForm(this, { name: 'coordinated' }),
       more:'按ok键选择',
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
    textareaClick(){
      document.querySelector('.focus textarea').focus()
    },
    textareablur(){
      document.querySelector('.focus textarea').blur()
    },

    numberblur(){
      document.querySelector('.focus input').blur()
    },
    numberClick(){
      document.querySelector('.focus input').focus()
    },
    handleSubmit(e) {
      e.preventDefault();
      alert('handleSubmit')
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
    choosevocation(item){ 
      if(item){this.more = item.name;}
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
