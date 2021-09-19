import React, { Component } from "react";
import '../common/public.css';
// 

class Example1 extends Component {

  componentDidMount() {
    window.$tv.focusableClassName = 'r-focusable';
  }

  enter(s) {
    if (s === 1) {
      console.log('onClick');
    }
  }

  render() {
    return (
      <div className="demo">
        <span className="span" r-focusable="" onClick={() => this.enter(1)}> 可获取焦点的元素 </span>
        <span className="span no"> no </span>
        <span className="span r-focusable"> 可获取焦点的元素</span>
        <span className="span no"> no </span>
        <span className="span r-focusable"> 可获取焦点的元素 </span>
        <span className="span no"> no </span>
        <span className="inline-block" r-focusable="">
          <svg viewBox="64 64 896 896" data-icon="up" width="100px" height="100px" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>
        </span>
        <span className="span" r-focusable=""> 可获取焦点的元素  </span>
        <svg r-focusable=""  viewBox="64 64 896 896" data-icon="up" width="100px" height="100px" fill="currentColor" aria-hidden="true"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path></svg>
        <canvas className="span" r-focusable=""> canvas </canvas>
        <span className="span" r-focusable=""> 可获取焦点的元素  </span>
        <span className="span" r-focusable=""> 可获取焦点的元素  </span>
      </div>
    )
  }
}


export default Example1;
