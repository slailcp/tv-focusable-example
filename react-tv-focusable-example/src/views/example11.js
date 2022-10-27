import React, { Component } from "react";
import '../common/public.css';
import '../common/example11.css';
import { $tv } from "react-tv-focusable";




class Example11 extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
  }


  scrollto1() {
    $tv.scrollTo({
      targetEl: document.querySelector("#page1"),
      offset: 100, // 距离边界100
    });
  }
  scrollto2() {
    $tv.scrollTo({
      targetEl: document.querySelector("#page1"),
      iscenter: true, // 居中
    });
  }
  scrollto3() {
    $tv.scrollTo({
      scrollEl: document.querySelector(".scroll"),
      targetEl: document.querySelector("#scrol12"),
      offset: 50, // 距离边界50
    });
  }
  scrollto4() {
    $tv.scrollTo({
      scrollEl: document.querySelector(".scroll"),
      targetEl: document.querySelector("#scrol12"),
      iscenter: true, // 居中
    });
  }


  render() {
    let lists1 = [];
    for (let i = 0; i < 105; i++) {
      lists1.push(<div className="item item5" key={i}>局部滚动</div>)
    }
    let lists2 = [];
    for (let i = 0; i < 50; i++) {
      lists2.push(<div className="item item5" key={i}>局部滚动</div>)
    }
    let lists3 = [];
    for (let i = 0; i < 10; i++) {
      lists3.push(<div r-focusable="" className="item item2" key={i} style={{ 'marginBottom': ' 10px' }}></div>)
    }
    return (
      <div>
        <button onClick={() => this.scrollto1()}>  页面滚动，滚动到.page1处，距离浏览器底部100</button><br />
        <button onClick={() => this.scrollto2()}>页面滚动，滚动到.page1处，居中展示</button><br />
        <button onClick={() => this.scrollto3()}> 局部滚动，滚动到”标识12“处，距离scroll底部100</button><br />
        <button onClick={() => this.scrollto4()}> 局部滚动，滚动到”标识12“处，在scroll中居中展示</button><br /><br />
        <div className="wraper flexbox">
          <div className="box1 scroll" r-focusable="" style={{ "width": "100%" }}>
            <div className="flexbox" style={{ "width": "300%" }}>
              {lists1}
              <div id="scrol12" className="item item5" style={{ "background": "pink" }}>
                标识12
              </div>
              {lists2}
            </div>
          </div>

          <div className="box1 flexbox" style={{ "width": "100%" }}>
            {lists3}
          </div >
          <div id="page1">
            page1
          </div>
          <div className="box1 flexbox" style={{ "width": "100%" }}>
            {lists3}
          </div >
        </div >
      </div >
    )
  }
}


export default Example11;
