import React, {Component} from "react";
import '../common/public.css';
import {$tv} from 'react-tv-focusable'
class Example5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            distanceToCenterActive:1
        }
    }
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

    distanceToCenter1(){
        this.setState({distanceToCenterActive:1})
        $tv.init({
            distanceToCenter: false
        });
    }
    distanceToCenter2(){
        this.setState({distanceToCenterActive:2})
        $tv.init({
            distanceToCenter: true
        });
    }


    render(){
        let lists = [];
        for(let i=0;i< 105;i++) {
            lists.push(<span 
                className="span r-focusable"
                key={i}>{i+1}</span>)
        }
        
        return (
            <div>
                <div>
                    <div className="title">修改distanceToCenter</div><br/>
                    <span className={this.state.distanceToCenterActive===1?'active btn':'btn'} onClick={() => this.distanceToCenter1()}>distanceToCenter = false</span>
                    <span className={this.state.distanceToCenterActive===2?'active btn':'btn'} onClick={() => this.distanceToCenter2()}>distanceToCenter = true</span>
                </div><br/>
                <div className="demo-scroll">
                <div className="demo-con">
                    {lists}
                </div>
            </div>
            </div>
            
            
        )
    }
}


export default Example5;
