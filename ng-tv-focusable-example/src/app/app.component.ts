import { Component } from '@angular/core';
import { $tv } from 'ng-tv-focusable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-tv-focusable-example';
  constructor() {
    // 可配置可不配置， 不做下面配置的情况下使用ng-tv-focusable默认的配置
    /**
      $tv.init({
        focusClassName: "config-focus", // 聚焦元素的className （默认focus）
        KEYS: {KEY_LEFT: [37], KEY_UP: [38], KEY_RIGHT: [39], KEY_DOWN: [40]}, // 自定义键值
        findFocusType: 1, //找焦点方式 0：直线上 1：最近（默认1） 
        initDis: 20 // 只有当findFocusType为0时才会生效，直线类型找焦点时，按键方向的交叉轴方向允许的最大找焦点范围,（默认20px）
      })
    */
  }
}
