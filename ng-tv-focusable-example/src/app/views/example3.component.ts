import { Component, OnInit } from '@angular/core';
import { $tv } from "ng-tv-focusable"

@Component({
  selector: 'app-example1',
  template: `
  <div class="demo">
    <span 
    *ngFor='let in of counter(30) ;let i = index' 
    [id]="i+1"
    class="span" [ng-focusable] 
    (left)="left(i)" 
    (up)="up(i)" 
    (right)="right(i)" 
    (down)="down(i)" 
    (click)="enter(i)" 
    (longPress)="enter(i)" 
    (onFocus)="focus(i, $event)" 
    (onBlur)="blur(i, $event)">
      {{i+1}}
      <i *ngIf="i == 3">按/长按，enter键触发click/longpress</i>
      <i *ngIf="i == 5">向下跳到18</i>
      <i *ngIf="i == 6">向上跳到18</i>
      <i *ngIf="i == 9">向左跳到18</i>
      <i *ngIf="i == 10">向右跳到18</i>
      <i *ngIf="i == 22">失去焦点时触发事件onBlur</i>
      <i *ngIf="i == 27">获取焦点时触发事件onFocus</i>
    </span>
  </div>
  `,
  styles: [`
  .demo{width:500px;}
    .span{
      display:inline-block;
      background:#6B9DFF;
      width:100px;
      height:100px;
      margin-left:20px;
      margin-top:20px;
      transition: all .5s;vertical-align: text-bottom
    }
    .focus{transform: scale(1.2);box-shadow: 0 0 20px blue}
  `],
})
export class Example3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter(i: number) {
    return new Array(i);
  }

  left(index) {
    if(index === 9) {
      console.log('left');
      window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    } else {
      $tv.next("left")
    }
  }

  up(index) {
    if(index === 6) {
      console.log('up')
      window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    } else {
      $tv.next("up")
    }
  }

  right(index) {
    if(index === 10) {
      console.log('right')
      window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    } else {
      $tv.next("right")
    }
  }

  down(index) {
    if(index === 5) {
      console.log('down')
      window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[18]'))
    } else {
      $tv.next("down")
    }
  }

  enter(index) {
    if(index === 3) {
      console.log('click');
    }
  }

  focus(index, $event) {
    if(index === 27) {
      console.log(`第${28}个将要获取焦点了哦！`)
      console.log($event.detail.el);
    }
  }

  blur(index, $event) {
    if(index === 22) {
      console.log(`第${23}个将要失去焦点了哦！`)
      console.log($event.detail.el);
    }
  }
}
