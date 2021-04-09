import React, { Component } from "react";
import '../common/public.css';
import { $tv } from 'react-tv-focusable'

class Example7Detail extends Component {
    contentCount = 30;
    constructor() {
        super();
        this.state = {
            currentMenu: 1
        }
    }

    componentDidMount() {
        $tv.focusableClassName = 'r-focusable'; // 必须配置项
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo-box"]/div[@class="menu"]/div[1]'));

        const menuItemels = document.getElementsByClassName('menu-item');
        const conItemels = document.getElementsByClassName('content-item');
        for (let el of menuItemels) {
            el.addEventListener("right", this.menuRight.bind(this));
            el.addEventListener("up", this.menuUp.bind(this));
            el.addEventListener("down", this.menuDown.bind(this));
            el.addEventListener("onFocus", this.menuFocus.bind(this));
        }
        for (let el of conItemels) {
            el.addEventListener("left", this.contentLeft.bind(this));
            el.addEventListener("up", this.contentUp.bind(this));
            el.addEventListener("down", this.contentDown.bind(this));
            el.addEventListener("onFocus", this.contentFocus);
        }
    }
    componentWillUnmount() {
        $tv.resetScrollEl();
        document.body.style.backgroundColor = '#fff';
    }


    menuFocus(event) {//切换滚动元素到menu
        const i = event.target.getAttribute('index');
        this.setState({ currentMenu: Number(i) })
        $tv.setScrollEl($tv.getElementByPath("//div[@class='menu']"))

    }

    contentFocus() {//切换滚动元素到内容
        $tv.setScrollEl($tv.getElementByPath("//div[@class='content']"))
    }

    menuUp(event) {//在第一个menu按上，焦点不动
        const i = event.target.getAttribute('index');
        if (Number(i) === 1) {
            $tv.requestFocus(event.target);
        }
    }

    menuDown(event) {//在最下面一个menu按下，焦点不动，避免右边内容item自动聚焦
        const i = event.target.getAttribute('index');
        if (Number(i) === 10) {
            $tv.requestFocus(event.target);
        }
    }

    menuRight() {//从menu到内容时固定到内容的第一个元素
        $tv.requestFocus($tv.getElementByPath("//div[@class='content']/div[1]"), false);
    }

    contentDown(event) {
        const index = event.target.getAttribute('index');
        if (this.contentCount - Number(index) < 3) {//如果是最后一行的内容,按下焦点不许动
            $tv.requestFocus(event.target);
        }
    }

    contentLeft(event) {
        const i = event.target.getAttribute('index');
        if (Number(i) % 3 === 1) {//在第一列的内容上按左时，让当前menu的item聚焦
            $tv.requestFocus($tv.getElementByPath(`//div[@class='menu']/div[${this.state.currentMenu}]`), false);
        }
    }
    contentUp(event) {
        const index = event.target.getAttribute('index');
        if (Number(index) <= 3) {
            $tv.requestFocus(event.target);
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


export default Example7Detail;
