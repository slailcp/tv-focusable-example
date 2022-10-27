import React, { Component } from "react";
import '../common/public.css';
import '../common/example11.css';
import { $tv } from "react-tv-focusable";





class Example12 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  keycode = 0; // 记录键值，默认： 上键:38,下键:40，具体看配置的值
  inScroll = 0;//确保焦点进入scrollEl和移出的时候只运行一次focusable.scrollEl；


  componentDidMount() {
    document.querySelectorAll(".item1").forEach(ele => {
      $tv.addFocusableListener(ele, "on-focus", this.focus);
    })
    document.querySelectorAll(".item2").forEach(ele => {
      $tv.addFocusableListener(ele, "on-focus", this.focus);
    })
    document.querySelectorAll(".item3").forEach(ele => {
      $tv.addFocusableListener(ele, "on-focus", this.focus);
    })
    document.querySelectorAll(".item4").forEach(ele => {
      $tv.addFocusableListener(ele, "on-focus", this.focus);
    })

    $tv.addFocusableListener(document.querySelector(".scroll"), "on-focus", this.scrollfocus);

    // 监听全局焦点的blur或者focus事件，  e：获取/失去焦点的el  focusstatus:状态，true聚焦，false,失去焦点    keycode键值
    $tv.setOnFocusChangeListener((e, focusstatus, keycode) => {
      this.keycode = keycode;
    });

  }

  focus = () => {
    if (this.inScroll != 0) {
      // 焦点移动到demo1外的时候
      this.inScroll = 0;
      $tv.scrollEl = null;
      console.log("focus");

      document
        .querySelector(".scroll")
        .setAttribute($tv.itemAttrname, "");
      document.querySelectorAll(".item5").forEach((e) => {
        e.removeAttribute($tv.itemAttrname);
      });
    }
  }
  scrollfocus = (e) => {
    console.log("scrollfocus");
    this.inScroll = 1;
    // scroll获取焦点的时候将自身的focusable去掉，将内部class为item5的dom添加$tv.
    document.querySelector(".scroll").removeAttribute($tv.itemAttrname);
    document.querySelectorAll(".item5").forEach((e) => {
      e.setAttribute($tv.itemAttrname, "");
    });

    // 将.scroll设置为滚动区域。
    $tv.scrollEl = document.querySelector(".scroll");
    // 按上下左右键分别定位到scroll里面的不同的el，具体跳转逻辑需要根据实际情况来
    if (this.keycode === 38) {
      const $item5list = document.querySelectorAll(".item5");
      $tv.next($item5list[$item5list.length - 10], false);
    } else if (this.keycode === 40 || this.keycode === 39) {
      $tv.next(document.querySelector(".item5"), false);
    } else if (this.keycode === 37) {
      const $item5list = document.querySelectorAll(".item5");
      $tv.next($item5list[9], false);
    }

    // 将.scroll距离边界100处的地方，防止和聚焦过程中滚动条滚动冲突，可以延时调用scrollTo,
    setTimeout(() => {
      $tv.scrollTo({
        targetEl: document.querySelector(".scroll"),
        offset: 100, // 距离边界100
      });
    }, 300);
  }





  render() {
    let lists1 = [];
    for (let i = 0; i < 9; i++) {
      lists1.push(<div r-focusable="" className="item item3" key={i}></div>)
    }
    let lists2 = [];
    for (let i = 0; i < 80; i++) {
      lists2.push(<div className="item item5" key={i}>局部滚动</div>)
    }
    let lists3 = [];
    for (let i = 0; i < 10; i++) {
      lists3.push(<div r-focusable="" className="item item2" key={i} style={{ 'marginBottom': ' 10px' }}></div>)
    }
    return (
      <div className="wraper flexbox" style={{ width: '1050px' }}>
        <div className="box1 flexbox">
          <div r-focusable="" className="item item1"></div>
        </div>
        <div className="box1 flexbox">
          <div r-focusable="" className="item item2"></div>
          <div r-focusable="" className="item item2"></div>
        </div >
        <div className="box1 flexbox">
          <div r-focusable="" className="item item1"></div>
        </div >
        <div className="box1 flexbox">
          <div r-focusable="" className="item item1"></div>
        </div >
        <div className="box1 flexbox">
          <div r-focusable="" className="item item2" ></div>
          <div r-focusable="" className="item item2" ></div>
        </div >
        <div className="box1 flexbox">
          <div r-focusable="" className="item item1"></div>
        </div >
        <div className="box1 flexbox">
          {lists1}
        </div >
        <div className="box1 scroll" r-focusable="">
          <div className="flexbox" style={{ "width": "300%" }}>
            {lists2}
          </div >
        </div >
        <div className="box1 flexbox">
          <div r-focusable="" className="item item4"></div>
          <div r-focusable="" className="item item4"></div>
          <div r-focusable="" className="item item4"></div>
        </div >
        <div className="box1 flexbox" style={{ "width": "100%" }}>
          {lists3}
        </div >
      </div >
    )
  }
}


export default Example12;
