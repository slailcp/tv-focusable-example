import React, { Component } from "react";
import '../common/public.css';


class Example6 extends Component {
    contentCount = 30;
    constructor() {
        super();
        this.state = {
            currentMenu: 1
        }
    }

    componentDidMount() {
        window.$tv.focusableClassName = 'r-focusable'; 
        window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo-box"]/div[@class="menu"]/div[1]'));

        const menuItemels = document.getElementsByClassName('menu-item');
        const conItemels = document.getElementsByClassName('content-item');
        for (let el of menuItemels) {
            window.$tv.addFocusableListener(el,"right", this.menuRight.bind(this));
            window.$tv.addFocusableListener(el,"up", this.menuUp.bind(this));
            window.$tv.addFocusableListener(el,"down", this.menuDown.bind(this));
            window.$tv.addFocusableListener(el,"onFocus", this.menuFocus.bind(this));
        }
        for (let el of conItemels) {
            window.$tv.addFocusableListener(el,"left", this.contentLeft.bind(this));
            window.$tv.addFocusableListener(el,"up", this.contentUp.bind(this));
            window.$tv.addFocusableListener(el,"down", this.contentDown.bind(this));
            window.$tv.addFocusableListener(el,"onFocus", this.contentFocus);
        }
    }
    componentWillUnmount() {
        window.$tv.resetScrollEl()
    }


    menuFocus(event) {//切换滚动元素到menu
        const i = event.target.getAttribute('index');
        this.setState({ currentMenu: Number(i) })
        window.$tv.setScrollEl(window.$tv.getElementByPath("//div[@class='menu']"))

    }

    contentFocus() {//切换滚动元素到内容
        window.$tv.setScrollEl(window.$tv.getElementByPath("//div[@class='content']"))
    }

    menuUp(event) {//在第一个menu按上，焦点不动
        const i = event.target.getAttribute('index');
        if (Number(i) === 1) {
            window.$tv.next(event.target);
        }else{
            window.$tv.next("up")
        }
    }

    menuDown(event) {//在最下面一个menu按下，焦点不动，避免右边内容item自动聚焦
        const i = event.target.getAttribute('index');
        if (Number(i) === 10) {
            window.$tv.next(event.target);
        }else{
            window.$tv.next("down")
        }
    }

    menuRight() {//从menu到内容时固定到内容的第一个元素
        window.$tv.next(window.$tv.getElementByPath("//div[@class='content']/div[1]"), false);
    }

    contentDown(event) {
        const index = event.target.getAttribute('index');
        if (this.contentCount - Number(index) < 3) {//如果是最后一行的内容,按下焦点不许动
            window.$tv.next(event.target);
        }else{
            window.$tv.next("down")
        }
    }

    contentLeft(event) {
        const i = event.target.getAttribute('index');
        if (Number(i) % 3 === 1) {//在第一列的内容上按左时，让当前menu的item聚焦
            window.$tv.next(window.$tv.getElementByPath(`//div[@class='menu']/div[${this.state.currentMenu}]`), false);
        }else{
            window.$tv.next("left")
        }
    }
    contentUp(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) <= 3) {
            window.$tv.next(event.target);
        }else{
            window.$tv.next("up")
        }
    }


    render() {
        let listsMenu = [];
        let listsContent = [];
        for (let i = 0; i < 10; i++) {
            // const stype = {top:Math.ceil(i / 7) * 110,left:i % 7 * 110}
            listsMenu.push(<div
                className="menu-item r-focusable"
                index={i + 1}
                key={i}>
                {i + 1}
            </div>)
        }
        for (let i = 0; i < this.contentCount; i++) {
            listsContent.push(<div
                className="content-item r-focusable"
                index={i + 1}
                key={i}>
                {this.state.currentMenu} - {i + 1}
            </div>)
        }

        return (
            <div className="example6">
                <div className="demo-box">
                    <div className="menu">
                        {listsMenu}
                    </div>
                    <div className="content">
                        {listsContent}
                    </div>
                </div>
            </div>
        )
    }
}


export default Example6;
