import React, { Component } from "react";
import '../common/public.css';


class Example8 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      focusEl: null
    }
  }
  componentDidMount() {
    window.$tv.focusableClassName = 'r-focusable';
    window.$tv.focusClassName = 'focus123';
    /**
     * 其余可配置可不配置，不做配置的情况下使用react-tv-focusable默认的配置
     */
  }

  open() {
    this.setState({
      show: true,
      focusEl: document.querySelector('.focus123')
    })
    window.$tv.limitingEl = document.querySelector('.ex8-dialog'); // 只有.demo5里面的focusable可以获取焦点
    window.$tv.scrollEl = window.$tv.getElementByPath('//div[@class="ex8-dialog-demo"]');
    window.$tv.requestFocus(this.refs.fo5);
  }
  close() {
    this.setState({ show: false })
    window.$tv.scrollEl = null;
    window.$tv.limitingEl = null;
    if (this.state.focusEl) { window.$tv.requestFocus(this.state.focusEl); }

  }

  render() {
    let lists = [];
    for (let i = 0; i < 50; i++) {
      lists.push(<span className="span r-focusable" ref={'fo' + (i + 1)} key={i}> {i + 1} </span>)
    }
    return (
      <div>
        <div className="demo">
          <span className="open r-focusable" onClick={() => this.open()}>click open dialog</span>
          <span className="span r-focusable"> 可获取焦点的元素 </span>
          <span className="span r-focusable"> 可获取焦点的元素 </span>
          <span className="span r-focusable"> 可获取焦点的元素 </span>
          <span className="span r-focusable"> 可获取焦点的元素 </span>
        </div>
        <div className="ex8-dialog" style={{ display: this.state.show ? "block" : "none" }}>
          <div className="ex8-dialog-demo">
            <span className="open r-focusable" onClick={() => this.close()}>click close dialog</span>
            {lists}
          </div>
        </div>
      </div>
    )
  }
}


export default Example8;
