import React, { Component } from "react";
import '../common/public.css';

class Example7 extends Component {
  

  componentDidMount() {
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
        <span className="value"><input className="text" r-focusable=""  type="text"/></span>
      </div>
      <div className="group">
        <span className="key">性别</span>
        <div className="value">
          <label><input type="radio" name="sex" r-focusable=""/> 男</label>  
          <label><input type="radio" name="sex" r-focusable=""/> 女</label>
        </div>
      </div>
      <div className="group">
        <span className="key">爱好</span>
        <div className="value ">
          <label><input type="checkbox" name="like" r-focusable=""/> 跑步</label>  
          <label><input type="checkbox" name="like" r-focusable=""/> 打球</label>  
          <label><input type="checkbox" name="like" r-focusable=""/> 游泳</label>  
          <label><input type="checkbox" name="like" r-focusable=""/> 爬山</label>
        </div>
      </div>
  
      <div className="group">
        <span className="key">公司</span>
        <span className="value">
          <select className="text" r-focusable="">
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
          <textarea r-focusable=""></textarea>
        </span>
      </div>
  
      <div className="btns">
        <input className="btn cancel" r-focusable="" type="button" onClick={() => this.click('取消')} value="取消"/>
        <button className="btn" r-focusable="" onClick={() => this.click('保存')}>保存</button>
      </div>   
    </div>
    )
  }
}


export default Example7;
