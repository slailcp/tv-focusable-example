import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { $tv } from "ng-tv-focusable"


@Component({
  selector: 'app-example3',
  template: `
  <div class="demo">
    <div class="menu">
      <div 
      [ng-focusable]
      class="item"
      *ngFor='let in of counter(10) ;let i = index'
      (onFocus)="menuFocus(i+1)" 
      (up)="menuUp(i+1,$event)" 
      (down)="menuDown(i+1,$event)" 
      (right)="menuRight()">
        menu-{{ i+1 }}
      </div>
    </div>
    <div class="content">
      <div 
      [ng-focusable]
      *ngFor='let in of counter(contentCount) ;let i = index'
      (onFocus)="contentFocus()" 
      (up)="contentUp(i+1,$event)" 
      (down)="contentDown(i+1,$event)" 
      (left)="contentLeft(i+1)" class="item">
        {{ currentMenu }}--{{ i+1 }}
      </div>
    </div>
  </div>
  `,
  styles: [`
  .demo {
    text-align: center;
    margin: 100px auto;
    display: flex;
    flex-direction: row;
  }
  .content {
    height: 600px;flex:1;
    overflow: auto;
    background-color: bisque;
  }
  .content .item {
    width: 300px;
    height: 100px;
    line-height: 100px;
    margin: 10px;
    display: inline-block;
    background-color: #2c3e50;
    box-sizing: border-box;
    vertical-align: top;
    color: #ffffff;
  }
  .menu {
    flex:0 0 300px;width:300px;
    height: 600px;
    overflow: hidden;
    padding: 20px;
  }
  .menu .item {
    width: 200px;
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    display: inline-block;
    background-color: #cccccc;
    margin-bottom: 10px;
  }
  .focus {
    transform: scale(1.1);
    border: 2px solid red;
    box-shadow: 0 0 20px red;
  }
  `]
})
export class Example6Component implements OnInit, OnDestroy, AfterViewInit {
  private contentCount = 30;
  private currentMenu = 1
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo"]/div[@class="menu"]/div[1]'));
  }
  ngOnDestroy() {
    window.$tv.resetScrollEl();
  }

  counter(i: number) {
    return new Array(i);
  }

  menuFocus(i) {//切换滚动元素到menu
    this.currentMenu = i;
    window.$tv.setScrollEl(window.$tv.getElementByPath("//div[@class='menu']"))
  }

  contentFocus() {//切换滚动元素到内容
    window.$tv.setScrollEl(window.$tv.getElementByPath("//div[@class='content']"))
  }

  menuUp(i, event) {//在第一个menu按上，焦点不动
    if (i == 1) {
      window.$tv.next(event.target);
    } else {
      $tv.next("up")
    }
  }

  menuDown(i, event) {//在最下面一个menu按下，焦点不动，避免右边内容item自动聚焦
    if (i == 10) {
      window.$tv.next(event.target);
    } else {
      $tv.next("down")
    }
  }

  menuRight() {//从menu到内容时固定到内容的第一个元素
    window.$tv.next(window.$tv.getElementByPath("//div[@class='content']/div[1]"), false);
  }

  contentDown(index, event) {
    if (this.contentCount - index < 3) {//如果是最后一行的内容,按下焦点不许动
      window.$tv.next(event.target);
    } else {
      $tv.next("down")
    }
  }

  contentLeft(i) {
    if (i % 3 == 1) {//在第一列的内容上按左时，让当前menu的item聚焦
      console.log(this.currentMenu);

      window.$tv.next(window.$tv.getElementByPath(`//div[@class='menu']/div[${this.currentMenu}]`), false);
    } else {
      $tv.next("left")
    }
  }
  contentUp(index, event) {
    if (index <= 3) {
      window.$tv.next(event.target);
    } else {
      $tv.next("up")
    }
  }
}
