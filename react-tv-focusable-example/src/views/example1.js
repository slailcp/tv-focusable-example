import React, { Component } from "react";
import '../common/public.css';
import { $tv } from 'react-tv-focusable'

class Example1 extends Component {

  componentDidMount() {
    // // 必须要配置init的focusableClassName（可以获取焦点的元素classname），否则焦点不生效
     $tv.focusableClassName = 'r-focusable';// 或者给dom添加focusable属性
    console.log($tv)
    /**
     * 其余可配置可不配置，不做配置的情况下使用react-tv-focusable默认的配置
     */
  }

  enter(s) {
    if (s === 1) {
      console.log('onClick');
    }
  }

  render() {
    return (
      <div className="demo">
        <span className="span" focusable onClick={() => this.enter(1)}> 可获取焦点的元素 </span>
        <span className="span no"> no </span>
        <span className="span r-focusable"> 可获取焦点的元素</span>
        <span className="span no"> no </span>
        <span className="span r-focusable"> 可获取焦点的元素 </span>
        <span className="span no"> no </span>
        <svg className="span" focusable> svg </svg>
        <canvas className="span" focusable> canvas </canvas>
        <span className="span" focusable> 可获取焦点的元素  <span focusable className="hl">被忽略</span></span>
      </div>
    )
  }
}


export default Example1;
