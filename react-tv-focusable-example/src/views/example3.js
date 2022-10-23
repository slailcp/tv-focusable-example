import React, { Component } from "react";
import '../common/public.css';

class Example3 extends Component {
    componentDidMount() {
        window.$tv.focusableClassName = 'r-focusable'; // 不使用属性的话，需要配置focusableClassName项
        const els = document.getElementsByClassName('r-focusable');
        for (let el of els) {
            // 自定义事件，名称一定要是和下面的名字对应哦
            window.$tv.addFocusableListener(el,"left", this.left);
            window.$tv.addFocusableListener(el,"right", this.right);
            window.$tv.addFocusableListener(el,"up", this.up);
            window.$tv.addFocusableListener(el,"down", this.down);
            window.$tv.addFocusableListener(el,"onBlur", this.blur);
            window.$tv.addFocusableListener(el,"onFocus", this.focus);
            window.$tv.addFocusableListener(el,"longPress", this.longPress);
        }
    }

    componentWillUnmount() {
        const els = document.getElementsByClassName('r-focusable');
        for (let el of els) {
            window.$tv.removeFocusableListener(el,"left", this.left);
            window.$tv.removeFocusableListener(el,"right", this.right);
            window.$tv.removeFocusableListener(el,"up", this.up);
            window.$tv.removeFocusableListener(el,"down", this.down);
            window.$tv.removeFocusableListener(el,"onBlur", this.blur);
            window.$tv.removeFocusableListener(el,"onFocus", this.focus);
            window.$tv.removeFocusableListener(el,"longPress", this.longPress);
        }
    }

    left(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 10) {
            window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
        }else{
            window.$tv.next("left")
        }
    }
    longPress(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 4) {
            console.log('longPress');
        }
    }


    enter(index) {
        if (Number(index) === 4) {
            console.log('click');
        }
    }

    right(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 11) {
            window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
        }else{
            window.$tv.next("right")
        }
    }
    up(event) {
        const index = event.target.getAttribute('index');
        
        if (Number(index) === 7) {
            console.log(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
            window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
        }else{
            window.$tv.next("up")
        }
    }
    down(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 6) {
            window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
        }else{
            window.$tv.next("down")
        }
    }


    focus(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 28) {
            alert(`第${28}个将要获取焦点了哦！`)
            console.log(event.detail.el);
        }
    }

    blur(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) === 23) {
            alert(`第${23}个将要失去焦点了哦！`)
            console.log(event.detail.el);
        }
    }

    render() {
        let lists = [];
        for (let i = 0; i < 105; i++) {
            let str = '';
            if (i === 3) { str = 'enter键触发click，长按enter键触发longpress'; };
            if (i === 5) { str = '向下跳到18'; };
            if (i === 6) { str = '向上跳到18'; };
            if (i === 9) { str = '向左跳到18'; };
            if (i === 10) { str = '向右跳到18'; };
            if (i === 22) { str = '失去焦点时触发事件onBlur'; };
            if (i === 27) { str = '获取焦点时触发事件onFocus'; };

            lists.push(<span
                className="span r-focusable"
                onClick={() => this.enter(i + 1)}
                index={i + 1}
                key={i}>
                {i + 1}<br />
                {str}
            </span>)
        }

        return (
            <div className="ex3">
                <div className="demo">
                    {lists}
                </div>
            </div>
        )
    }
}


export default Example3;
