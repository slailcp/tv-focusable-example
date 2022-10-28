import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { $tv } from "ng-tv-focusable"


@Component({
  selector: 'app-example10',
  template: `
  <div>
    <button (click)="scrollto1()">页面滚动，滚动到.page1处</button><br />
    <button (click)="scrollto2()">
      页面滚动，滚动到.page1处，居中展示,耗时400毫秒</button
    ><br />
    <button (click)="scrollto3()">
      局部滚动，滚动到”标识12“处，距离scroll底部100,耗时400毫秒</button
    ><br />
    <button (click)="scrollto4()">
      局部滚动，滚动到”标识12“处，在scroll中居中展示,耗时400毫秒</button
    ><br />
    <div class="wraper flexbox">
      <div class="box1 scroll" [ng-focusable] style="width: 100%">
        <div class="flexbox" style="width: 300%">
          <div class="item item5" *ngFor='let in of counter(150) ;let item = index'>局部滚动{{item}}</div>
          <div id="scrol12" class="item item5" style="background: pink">
            标识12
          </div>
          <div class="item item5" *ngFor='let in of counter(500) ;let item = index'>局部滚动2={{item}}</div>
        </div>
      </div>

      <div class="box1 flexbox" style="width: 100%">
        <div
          [ng-focusable]
          class="item item2"
          style="margin-bottom: 10px"
          *ngFor='let in of counter(10) ;let item = index'
        ></div>
      </div>
      <div
        id="page1"
        style="
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          background: pink;
          font-size: 30px;
          text-align: center;
          line-height: 100px;
        "
      >
        page1
      </div>
      <div class="box1 flexbox" style="width: 100%">
        <div
          [ng-focusable]
          class="item item2"
          style="margin-bottom: 10px"
          *ngFor='let in of counter(10) ;let item = index'
        ></div>
      </div>
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
export class Example10Component implements OnInit, OnDestroy, AfterViewInit {
      

  ngOnInit() { }

  ngAfterViewInit() {
    // window.$tv.formAutofocus = false; // 表单控件enter，不可以输入和选择
  }
  ngOnDestroy() {
   
  }
  counter(i: number) {
    return new Array(i);
  }
  scrollto1() {
    $tv.scrollTo({
      targetEl: document.querySelector("#page1"),
    });
  }
  scrollto2() {
    $tv.scrollTo({
      targetEl: document.querySelector("#page1"),
      isCenter: true, // 居中
      duration: 400,
    });
  }
  scrollto3() {
    $tv.scrollTo({
      scrollEl: document.querySelector(".scroll"),
      targetEl: document.querySelector("#scrol12"),
      offset: 100, // 距离边界50
      duration: 400,
    });
  }
  scrollto4() {
    $tv.scrollTo({
      scrollEl: document.querySelector(".scroll"),
      targetEl: document.querySelector("#scrol12"),
      isCenter: true, // 居中
      duration: 400,
    });
  }
  
}
