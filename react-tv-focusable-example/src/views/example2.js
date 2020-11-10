import React, {Component} from "react";
import {$tv} from 'react-tv-focusable'

import '../common/public.css';
class TvFocusable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: 0,
        }
        console.log($tv)
    }
    componentDidMount() {
        $tv.init({
            focusableClassName:'r-focusable', // 必须配置项
            offsetDistance:500
        })
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[9]'))
    }
    
    skip1() {
        this.setState({active:1})
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[15]'))
    }

    skip2() {
        this.setState({active:2})
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo"]/span[20]'), false);
    }
    render(){
        let lists = [];
        for(let i=0;i< 105;i++) {
            lists.push(<span className="span r-focusable" key={i}> {i + 1} </span>)
        }
        
        return (
            <div className="example2-out">
                <span className={this.state.active===1?'btn active':'btn'} onClick={() => this.skip1()}>动效跳到第15个div</span> <br/> <br/>
                <span className={this.state.active===2?'btn active':'btn'} onClick={() => this.skip2()}>没有动效跳到第20个div</span>
                <div className="demo">
                    {lists}
                </div>
            </div>
        )
    }
}


export default TvFocusable;
