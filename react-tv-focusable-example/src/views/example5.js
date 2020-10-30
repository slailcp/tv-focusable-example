import React, {Component} from "react";
import '../common/public.css';
import {$tv} from 'react-tv-focusable'
class Example5 extends Component {
    componentDidMount() {
        $tv.init({
            focusableClassName:'r-focusable', // 必须配置项
        })
        $tv.setScrollEl($tv.getElementByPath('//div[@class="demo-scroll"]'))
        $tv.requestFocus($tv.getElementByPath('//div[@class="demo-con"]/span[8]'))
    }
    componentWillUnmount() {
        $tv.resetScrollEl();
    }

    render(){
        let lists = [];
        for(let i=0;i< 105;i++) {
            lists.push(<span 
                className="span r-focusable"
                key={i}>{i+1}</span>)
        }
        
        return (
            <div className="demo-scroll">
               <div className="demo-con">
                    {lists}
                </div>
            </div>
        )
    }
}


export default Example5;
