import React, { Component } from "react";
import { $tv } from 'react-tv-focusable'
import { IEVersion } from '../common/browser'

import '../common/public.css';

// ie浏览器上是不可以使用getElementByPath获取el的哦
class Example2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
        }
    }
    componentDidMount() {
        $tv.focusableClassName = 'r-focusable'; // 必须配置项
        $tv.offsetDistance = 50;
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[9]'))
    }


    skip1() {
        this.setState({ active: 1 })
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[55]'))
    }

    skip2() {
        this.setState({ active: 2 })
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[20]'), false);
    }
    render() {
        let lists = [];
        for (let i = 0; i < 105; i++) {
            lists.push(<span className="span r-focusable" ref={'fo' + (i + 1)} key={i}> {i + 1} </span>)
        }

        return (
            <div className="example2-out">
                ie浏览器上是不可以使用getElementByPath获取el的哦<br />
                <span className={this.state.active === 1 ? 'btn active' : 'btn'} onClick={() => this.skip1()}>动效跳到第55个div</span> <br /> <br />
                <span className={this.state.active === 2 ? 'btn active' : 'btn'} onClick={() => this.skip2()}>没有动效跳到第20个div</span>
                <div className="demo">
                    {lists}
                </div>
            </div>
        )
    }
}


export default Example2;
