import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { $tv } from "ng-tv-focusable"


@Component({
  selector: 'app-example11',
  template: `
  <div class="wraper flexbox">
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item1" (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item2" *ngFor='let in of counter(2) ;let item = index' (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item1" (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item1" (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item2" *ngFor='let in of counter(2) ;let item = index' (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item1" (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item3" *ngFor='let in of counter(9) ;let item = index' (on-focus)="focus()"></div>
  </div>
  <div class="box1 scroll" [ng-focusable] (on-focus)="scrollfocus()">
      <div class="flexbox" style="width: 300%">
          <div class="item item5" *ngFor='let in of counter(80) ;let item = index'>局部滚动</div>
      </div>
  </div>
  <div class="box1 flexbox">
      <div [ng-focusable] class="item item4" *ngFor='let in of counter(3) ;let item = index' (on-focus)="focus()"></div>
  </div>
  <div class="box1 flexbox" style="width: 100%">
      <div [ng-focusable] class="item item2" style="margin-bottom: 10px" *ngFor='let in of counter(10) ;let item = index' (on-focus)="focus()"></div>
  </div>
</div>
  `,
  styles: [`
  * {
  box-sizing: border-box;
}
.flexbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.item {
  background: rgb(189, 217, 254);
}
.item1 {
  width: 100%;
  height: 100%;
}
.item2 {
  width: 100%;
  height: 140px;
}

.item3 {
  width: 100px;
  height: 95px;
}
.item4 {
  width: 100px;
  height: 100%;
}
.item5 {
  width: 90px;
  height: 100px;
  margin: 5px;
}
.wraper {
  width: 1050px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  
}
.wraper .box1 {
  width: 32.5%;
  min-height: 300px;
  margin-bottom: 10px;
}
.scroll {
  height: 300px;
  overflow: hidden;
  
}
.scroll .item {
  background-color: rgb(255, 226, 186);
}
.focus {
  border: 2px solid red;
  box-shadow: 0 0 20px red;
}
  `]
})
export class Example11Component implements OnInit, OnDestroy, AfterViewInit {

  keycode = 0 // 记录键值，默认： 上键:38,下键:40，具体看配置的值
  inScroll = 0 //确保焦点进入scrollEl和移出的时候只运行一次focusable.scrollEl；
  ngOnInit() { }

  ngAfterViewInit() {
    $tv.scrollSpeed = 100; // 两次按键小于100毫秒的话则当作一次事件。
    $tv.offsetDistance = 150; // 边缘距离为150

    // 监听全局焦点的blur或者focus事件，  e：获取/失去焦点的el  focusstatus:状态，true聚焦，false,失去焦点    keycode键值
    $tv.setOnFocusChangeListener((e, focusstatus, keycode) => {
      this.keycode = keycode;
    });
  }
  ngOnDestroy() {

  }
  counter(i: number) {
    return new Array(i);
  }
  
  focus() {
    if (this.inScroll != 0) {
      // 焦点移动到demo1外的时候
      this.inScroll = 0;
      $tv.scrollEl = null;
      console.log("focus");
     
      document
        .querySelector(".scroll")
        .setAttribute($tv.itemAttrname, "");
      document.querySelectorAll(".item5").forEach((e) => {
        e.removeAttribute($tv.itemAttrname);
      });
    }
  }
  scrollfocus(e) {
     console.log("scrollfocus");
    this.inScroll = 1;
    // scroll获取焦点的时候将自身的focusable去掉，将内部class为item5的dom添加focusable.
    document.querySelector(".scroll").removeAttribute($tv.itemAttrname);
    document.querySelectorAll(".item5").forEach((e) => {
      e.setAttribute($tv.itemAttrname, "");
    });

    // 将.scroll设置为滚动区域。
    $tv.scrollEl = document.querySelector(".scroll");
    console.log(this.keycode);
    // 按上下左右键分别定位到scroll里面的不同的el，具体跳转逻辑需要根据实际情况来
    if (this.keycode === 38) {
      const $item5list = document.querySelectorAll(".item5");
      $tv.next($item5list[$item5list.length - 10], false);
    } else if (this.keycode === 40 || this.keycode === 39) {
      $tv.next(document.querySelector(".item5"), false);
    }else if (this.keycode === 37) {
      const $item5list = document.querySelectorAll(".item5");
      $tv.next($item5list[9], false);
    }

    // 将.scroll距离边界100处的地方，防止和聚焦过程中滚动条滚动冲突，可以延时调用scrollTo,
    setTimeout(() => {
      $tv.scrollTo({
        targetEl: document.querySelector(".scroll"),
        offset: 100, // 距离边界100
      });
    }, 300);
  }

}
