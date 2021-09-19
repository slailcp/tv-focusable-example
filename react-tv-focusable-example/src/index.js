import 'core-js/es';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {$tv} from 'react-tv-focusable'
import './index.css';
import App from './App.js';

window.$tv = $tv;


/*
*  itemAttrname 全局配置 window.$tv.itemAttrname = 's-focusable';  // 推荐使用itemAttrname；
* page.js     <div s-focusable=""></div>  

*  focusableClassName   局部配置
* page.js  window.$tv.focusableClassName = 'r-focusable';  <div classname="r-focusable"></div>  

* itemAttrname 和 focusableClassName可同时存在   
* <div s-focusable=""></div>
* <div classname="r-focusable"></div>   

*/ 

window.$tv.itemAttrname = 'r-focusable';



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

