import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { $tv } from 'ng-tv-focusable';

@Component({
  selector: 'app-example3',
  template: `
  <div>
    <div class="title">修改findFocusType(主要体现在div2上)</div>
    <span class="btn" [ngClass]="active===1?'active':''" (click)="type1()">优先直线</span> 
    <span class="btn" [ngClass]="active===2?'active':''" (click)="type2()">优先最近</span> 
  </div><br/>
  <div>
    <div class="title">修改initDis(主要体现在div2上)</div>
    <span class="btn" [ngClass]="disActive===3?'active':''" (click)="dis(3,50)">initDis 50px</span> 
    <span class="btn" [ngClass]="disActive===1?'active':''" (click)="dis(1,30)">initDis 30px</span> 
    <span class="btn" [ngClass]="disActive===2?'active':''" (click)="dis(2,29)">initDis 29px</span> 
  </div><br/>
  <div>
    <div class="title">修改KEYS</div>
    <span class="btn" [ngClass]="keysActive===1?'active':''" (click)="keys1()">A(左)/W(上)/D(右)/S(下)/P(click)</span> 
    <span class="btn" [ngClass]="keysActive===2?'active':''" (click)="keys2()">Z(左)/X(上)/C(右)/V(下)/B(click)</span>  
  </div><br/>
  <div>
    <div class="title">修改选中的classname的样式</div>
    <span class="btn" [ngClass]="focusClassNameActive===1?'active':''" (click)="focusclassname1()">scale</span>
    <span class="btn" [ngClass]="focusClassNameActive===2?'active':''" (click)="focusclassname2()">rotate</span>
  </div><br/>
  <div>
    <div class="title">修改offsetDistance</div>
    <span class="btn" [ngClass]="offsetDistanceActive===1?'active':''" (click)="offsetDistance1()">offsetDistance = 50</span>
    <span class="btn" [ngClass]="offsetDistanceActive===2?'active':''" (click)="offsetDistance2()">offsetDistance = 250</span>
  </div><br/>
  <div>
    <div class="title">修改distanceToCenter</div>
    <span class="btn" [ngClass]="distanceToCenterActive===1?'active':''" (click)="distanceToCenter1()">distanceToCenter = false</span>
    <span class="btn" [ngClass]="distanceToCenterActive===2?'active':''" (click)="distanceToCenter2()">distanceToCenter = true</span>
  </div><br/>
  <div>
    <div class="title">修改distanceToCenter</div>
    <span focusable class="btn" [ngClass]="distanceToCenterActive===1?'active':''" (click)="distanceToCenter1()">distanceToCenter = false</span>
    <span focusable class="btn" [ngClass]="distanceToCenterActive===2?'active':''" (click)="distanceToCenter2()">distanceToCenter = true</span>
  </div><br/>
  <div>
    <div class="title">修改limitingE=.demo，焦点只能在demo中移动</div>
    <span focusable class="btn" [ngClass]="limitingElActive===1?'active':''" (click)="limitingEl1()">limitingE = null</span>
    <span focusable class="btn" [ngClass]="limitingElActive===2?'active':''" (click)="limitingEl2()">limitingE = .demo</span>
  </div>
  <div class="demo">
    <span 
    *ngFor='let in of counter(105) ;let i = index' 
    (left)="event('left',index)"
    (right)="event('right',index)"
    (up)="event('up',index)"
    (down)="event('down',index)"
    (click)="event('enter',index)"
    class="span" 
    focusable>
      {{i + 1}}
    </span>
  </div>
  `,
  styles: [`
    .demo{width: 700px;height: 700px;padding-top:100px;}
    .span{
      display:inline-block;
      background:#6B9DFF;
      width:100px;
      height:100px;
      margin-left:20px;
      margin-top:20px;
      transition: all .5s;
    }
    .span:nth-of-type(2){position:relative;top:-30px;}
    .span:nth-of-type(6){position:relative;left:-30px;}
    .span:nth-of-type(21){position:relative;left:-30px;}
    .span:nth-of-type(12){position:relative;top:50px;}
    .ng-focus-scale{transform: scale(1.2);box-shadow: 0 0 20px blue}
    .ng-focus-rotate{transform: rotate(90deg);background:pink;box-shadow: 0 0 20px blue}

    .btn{padding:2px;background-color: #ccc;cursor: pointer;margin-right:15px;display:inline-block;font-size:12px;
    }
    .btn.active{background-color: darkorange;color:#fff;}

  `]
})
export class Example4Component implements OnDestroy, AfterViewInit {
  private active = 2;
  private disActive = 0;
  private keysActive =  1;
  private focusClassNameActive =  1;
  private offsetDistanceActive = 1;
  private distanceToCenterActive = 1;
  private limitingElActive = 1;

  ngAfterViewInit() {
    this.focusclassname1();
  }
  ngOnDestroy() {
    // 如果没设置全局配置，可以直接调用reset()方法
    $tv.reset(); // 将所有的配置项还原成ng-tv-focusable的默认配置
    /** 
     * 也可以单独重置某个属性，例如
     * 重置focusClassName  => $tv.resetFocusClassName();
     * 重置KEYS =>  $tv.resetKEYS();
     * 重置initDis =>  $tv.resetInitDis();
     * 重置findFocusType =>  $tv.resetFindFocusType();
     * */ 
    

     // 如果在app.modules.ts中有全局的配置那么，此处就需要还原成全局配置
     /**
      $tv.init({
        focusClassName: "config-focus", // 聚焦元素的className （默认focus）
        KEYS: {KEY_LEFT: [37], KEY_UP: [38], KEY_RIGHT: [39], KEY_DOWN: [40]}, // 自定义键值
        findFocusType: 1, //找焦点方式 0：直线上 1：最近（默认1） 
        initDis: 20 // 只有当findFocusType为0时才会生效，直线类型找焦点时，按键方向的交叉轴方向允许的最大找焦点范围,（默认20px）
      })
      */
  }


  event(type, index) {
    if(index === 8) {
      if(type === 'left' ) {console.log('left');}
      if(type === 'up' ) {console.log('up');}
      if(type === 'right' ) {console.log('right');}
      if(type === 'down' ) {console.log('down');}
      if(type === 'enter' ) {console.log('enter');}
    }
  }

  /**
   * findFocusType：找焦点方式 
   * 0：直线上 
   * 1：最近（默认1）
 */
  type1() {
    this.active = 1;
    this.disActive = 2;
    $tv.findFocusType = 0; // 0：直线上最近的 
    $tv.initDis = 29;
  }

  type2() {
    this.active = 2;
    this.disActive = 0;
    $tv.findFocusType = 1;// 1：上下左右距离最近的div
  }

  /**
   * initDis:
   * 直线类型找焦点时，按键方向的交叉轴方向允许的最大找焦点范围,
   * 设置initDis的前提是findFocusType为0
   * div2偏离水平线30个像素，initDis设置29是找不到div2的，此时可以设置大于29的值,就可以让div2获取焦点
  */
  dis(type,num) {
    this.disActive = type;
    this.active = 1;
    $tv.findFocusType = 0;
    $tv.initDis = num;
  }

  // dis2() {
  //   this.disActive = 2;
  //   this.active = 1;
  //   $tv.findFocusType = 0;
  //   $tv.findFocusType = 0;
  // }

  /**
   * KEYS: 自定义键值
   *  --KEY_UP: 上移时候的键值,
   * --KEY_RIGHT: 右移时候的键值
   * --KEY_DOWN: 下移时候的键值
   * --KEY_LEFT: 左移时候的键值 
   * --KEY_ENTER: 触发clicl事件的键值
  */
  keys1() {
    this.keysActive = 1;
    $tv.KEYS = {
      KEY_LEFT: [65, 37], // 65:A  37:←
      KEY_UP: [87, 38], // 87:W  38:↑
      KEY_RIGHT: [68, 39], // 68:D   39:→
      KEY_DOWN: [83, 40], // 83：S  40:↓
      KEY_ENTER: [80, 13], // 32: P  13：enter键
    };
  }

  keys2() {
    this.keysActive = 2;
    $tv.KEYS = {
      KEY_LEFT: [90], // Z
      KEY_UP: [88], // X
      KEY_RIGHT: [67], // C
      KEY_DOWN: [86], // V
      KEY_ENTER: [66], // B
    };
  }

  /**
   * focusClassName: 自定义获取焦点的classname
   */
  focusclassname1() {
    this.focusClassNameActive = 1;
    this.toggleClass(document.getElementsByClassName('ng-focus-rotate')[0], 'ng-focus-rotate');
    $tv.focusClassName = "ng-focus-scale";
  }

  focusclassname2() {
    this.focusClassNameActive = 2;
    this.toggleClass(document.getElementsByClassName('ng-focus-scale')[0], 'ng-focus-scale')
    $tv.focusClassName = "ng-focus-rotate";
  }

  offsetDistance1() {
    this.offsetDistanceActive = 1;
    $tv.offsetDistance = 50;
  }
  offsetDistance2() {
    this.offsetDistanceActive = 2;
    $tv.offsetDistance = 250;
  }

  distanceToCenter1() {
    this.distanceToCenterActive = 1;
    $tv.distanceToCenter = false;
  }
  distanceToCenter2() {
    this.distanceToCenterActive = 2;
    $tv.distanceToCenter = true;
  }

  limitingEl1() {
    this.limitingElActive = 1;
    $tv.limitingEl = null;
  }
  limitingEl2() {
    this.limitingElActive = 2;
    $tv.limitingEl = document.querySelector(".demo");
  }


  
  toggleClass(el, className){
    if(!el) {return;}
    return el.classList.toggle(className)
  };

  counter(i: number) {
    return new Array(i);
  }
}
