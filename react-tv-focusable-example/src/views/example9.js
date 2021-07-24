import React, { Component } from "react";
import '../common/public.css';

class Example7 extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // $tv.formAutofocus = false; // input元素聚焦后，enter不可以获取焦点
  }
  componentWillUnmount() {  }
  click(type){
    alert(type)
   }


  render() {
    return (
      <div className="form">
      <div className="group">
        <span className="key">姓名</span>
        <span className="value"><input className="text" focusable  type="text"/></span>
      </div>
      <div className="group">
        <span className="key">性别</span>
        <div className="value">
          <label><input type="radio" name="sex" focusable/> 男</label>  
          <label><input type="radio" name="sex" focusable/> 女</label>
        </div>
      </div>
      <div className="group">
        <span className="key">爱好</span>
        <div className="value ">
          <label><input type="checkbox" name="like" focusable/> 跑步</label>  
          <label><input type="checkbox" name="like" focusable/> 打球</label>  
          <label><input type="checkbox" name="like" focusable/> 游泳</label>  
          <label><input type="checkbox" name="like" focusable/> 爬山</label>
        </div>
      </div>
  
      <div className="group">
        <span className="key">公司</span>
        <span className="value">
          <select className="text" focusable>
            <option value="">请选择</option>
            <option value="张三企业">张三企业</option>
            <option value="里斯企业">里斯企业</option>
            <option value="王五企业">王五企业</option>
          </select>
        </span>
      </div>
  
      <div className="group">
        <span className="key">说明</span>
        <span className="value">
          <textarea focusable></textarea>
        </span>
      </div>
  
      <div className="btns">
        <input className="btn cancel" focusable type="button" onClick={() => this.click('取消')} value="取消"/>
        <button className="btn" focusable onClick={() => this.click('保存')}>保存</button>
      </div>   
    </div>
    )
  }
}


export default Example7;
