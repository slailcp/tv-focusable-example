import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Example2 from './views/example2.js';
import Example1 from './views/example1';
import Example3 from './views/example3';
import Example4 from './views/example4';
import Example5 from './views/example5';
import Example6 from './views/example6';
import Example7 from './views/example7';
import Example8 from './views/example8';

import './common/public.css';

export default class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <nav className="nav-box">
                <NavLink className="nav-item" activeClassName="active" to="/example1">设置元素可获取焦点(focusable)</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example2">指定焦点移到到某一个元素上(ie)</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example3">自定义焦点移动(自定义事件)</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example4">自定义配置</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example5">局部滚动</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example6">综合案例</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example7">tv画廊</NavLink>
                <NavLink className="nav-item" activeClassName="active" to="/example8">弹出层滚动</NavLink>
            </nav>
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <div className="app-contetn">
              <Switch>
                <Route path="/example1">
                  <Example1 />
                </Route>
                <Route path="/example2">
                  <Example2 />
                </Route>
                <Route path="/example3">
                  <Example3 />
                </Route>
                <Route path="/example4">
                  <Example4 />
                </Route>
                <Route path="/example5">
                  <Example5 />
                </Route>
                <Route path="/example6">
                  <Example6 />
                </Route>
                <Route path="/example7">
                  <Example7 />
                </Route>
                <Route path="/example8">
                  <Example8 />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
    
}
