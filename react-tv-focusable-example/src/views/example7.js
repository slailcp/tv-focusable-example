import React, { Component } from "react";
import '../common/public.css';


class Example7 extends Component {
  list = [
    { url: require("../common/images/tv/r-1.jpg"), title: '灰姑娘1' },
    { url: require("../common/images/tv/r-2.jpg"), title: '灰姑娘2' },
    { url: require("../common/images/tv/r-3.jpg"), title: '灰姑娘3' },
    { url: require("../common/images/tv/r-4.jpg"), title: '灰姑娘4' },
    { url: require("../common/images/tv/r-5.jpg"), title: '灰姑娘5' },
    { url: require("../common/images/tv/r-6.jpg"), title: '灰姑娘6' },
    { url: require("../common/images/tv/r-7.jpg"), title: '灰姑娘7' },
    { url: require("../common/images/tv/r-8.jpg"), title: '灰姑娘8' },
    { url: require("../common/images/tv/r-9.jpg"), title: '灰姑娘9' },
  ]

  constructor() {
    super();
    this.state = {
      loadingShow: false,
      activeIndex: 2
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#010d19';

    window.$tv.focusableClassName = 'r-focusable'; // // 不使用focusable属性的话，必须配置focusableClassName项
    window.$tv.distanceToCenter = true;

    window.$tv.setScrollEl(document.querySelector('.item-box'))
    window.$tv.requestFocus(window.$tv.getElementByPath("//div[@class='perspective']/div[3]"));

    const els = document.querySelectorAll('.r-focusable');
    for (let el of els) {
      window.$tv.addFocusableListener(el,"right", this.right.bind(this));
      window.$tv.addFocusableListener(el,"left", this.left.bind(this));

      window.$tv.addFocusableListener(el,"up", this.nofocus.bind(this));
      window.$tv.addFocusableListener(el,"down", this.nofocus.bind(this));
    }
  }
  componentWillUnmount() {
    document.body.style.backgroundColor = '#fff';
    window.$tv.reset()
  }
  nofocus(event) { this.window.$tv.requestFocus(event.target); }
  right(event) {
    const index = Number(event.target.getAttribute('index'));
    if (index === this.list.length - 1) { 
      window.$tv.next("right")
      return; 
    }
    window.$tv.next("right")
    this.setState({ activeIndex: index + 1 })
  }
  left(event) {
    const index = Number(event.target.getAttribute('index'));
    if (index === 0) { 
      window.$tv.next("left")
      return; 
    }
    window.$tv.next("left")
    this.setState({ activeIndex: index - 1 })
  }


  render() {
    const lists = [];
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];
      const index = i;
      lists.push(<div className="item  r-focusable"
        key={i} index={i}
        style={{
          left: -100 * index - index * 20 + 'px',
          zIndex: this.state.activeIndex === index ? 1100 : 1000 - Math.abs(this.state.activeIndex - index) * 5,
          transform: `rotateY(${this.state.activeIndex < index ? '-30deg' : this.state.activeIndex === index ? '0deg' : '30deg'}) scale(${1 - Math.abs(this.state.activeIndex - index) * 0.05})`,
        }}
      >
        <img src={item.url}  alt=""/>
        <span className="txt">{item.title}</span>
      </div>)
    }
    return (
      <div className="tv-box">
        <div className="item-box">
          <div className="perspective">
            {lists}
          </div>
        </div>
        <div className="bottom-img"><img src="../common/images/tv/r-menu.png" alt=""/></div>
      </div>
    )
  }
}


export default Example7;
