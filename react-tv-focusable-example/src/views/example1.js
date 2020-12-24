import React, {Component} from "react";
import '../common/public.css';
import {$tv} from 'react-tv-focusable'

class TvFocusable extends Component {

    componentDidMount() {
      console.log($tv);
        // // 必须要配置init的focusableClassName（可以获取焦点的元素classname），否则焦点不生效
        $tv.init({
            focusableClassName:'r-focusable', // 必须配置项
            /**
             * 下面这四项，可配置可不配置，不做下面配置的情况下使用ng-tv-focusable默认的配置
             */
            // focusClassName: "config-focus", // 聚焦元素的className （默认focus）
            // KEYS: {KEY_LEFT: [37], KEY_UP: [38], KEY_RIGHT: [39], KEY_DOWN: [40]}, // 自定义键值
            // findFocusType: 1, //找焦点方式 0：直线上 1：最近（默认1） 
            // initDis: 20 // 只有当findFocusType为0时才会生效，直线类型找焦点时，按键方向的交叉轴方向允许的最大找焦点范围,（默认20px）
        })
      }

      enter(s){
        if(s === 1) {
          console.log(111);
        }
       
      }
    
    render(){
        return (
        <div className="demo">
            <span className="span r-focusable" onClick={() => this.enter(1)}> 可获取焦点的元素 </span>
            <span className="span no"> no </span>
            <span className="span r-focusable"> 可获取焦点的元素 </span>
            <span className="span no"> no </span>
            <span className="span r-focusable"> 可获取焦点的元素 </span>
            <span className="span no"> no </span>
            <span className="span r-focusable"> 可获取焦点的元素 </span>
          </div>
        )
    }
}


export default TvFocusable;
