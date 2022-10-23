import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $tv } from "ng-tv-focusable"
@Component({
  selector: 'app-example1',
  template: `
  <span class="btn" [ngClass]="active===1?'active':''" (click)="skip1()">动效跳到第40个div</span> <br/> <br/>
  <span class="btn" [ngClass]="active===2?'active':''" (click)="skip2()">没有动效跳到第41个div</span>
  <div class="demo">
    <span 
    *ngFor='let in of counter(60) ;let i = index' 
    (down)="down(i+1)"
    class="span" [ng-focusable] >
      {{i+1}}
      <span *ngIf="i === 1">向下移动到第30个div</span>
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
    .btn{padding:10px;background-color: #ccc;cursor: pointer;
    }
    .btn.active{background-color: darkorange;color:#fff;}
  `],
})
export class Example2Component implements OnInit, AfterViewInit {
  private active = 0;
  constructor() { }

  ngOnInit() {
    // $tv.scrollSpeed = 300;
  }

  ngAfterViewInit() {
    // 默认选中demo下的第10个div
    $tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[1]'))
  }
  counter(i: number) {
    return new Array(i);
  }
  down(index) {
    if (index === 2) {
      setTimeout(() => {
        $tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[30]'))
      }, 1000)
    } else {
      $tv.next("down")
    }
  }
  skip1() {
    this.active = 1;
    window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[40]'))
  }

  skip2() {
    this.active = 2;
    window.$tv.next(window.$tv.getElementByPath('//div[@class="demo"]/span[41]'), false);
  }
}
