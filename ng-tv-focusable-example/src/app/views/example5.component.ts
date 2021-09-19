import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-example3',
  template: `
  <div class="demo">
    <div class="demo-con">
      <span 
      *ngFor='let in of counter(105) ;let i = index' 
      class="span" 
      [ng-focusable] >
        {{i+1}}
      </span>
    </div>
  </div>
  `,
  styles: [`
    .demo{width: 700px;height: 700px;overflow: hidden;background:#ccc}
    .demo-con{width:1200px;}
    .span{
      display:inline-block;
      background:#6B9DFF;
      width:100px;
      height:100px;
      margin-left:20px;
      margin-top:20px;
      transition: all .5s;
    }
    .focus{transform: scale(1.2);box-shadow: 0 0 20px blue}
  `]
})
export class Example5Component implements OnInit, OnDestroy, AfterViewInit {

  constructor() { }

  ngOnInit() { }
  ngAfterViewInit() {
    window.$tv.setScrollEl(window.$tv.getElementByPath('//div[@class="demo"]'))
    window.$tv.requestFocus(window.$tv.getElementByPath('//div[@class="demo-con"]/span[8]'))
  }
  ngOnDestroy() {
    window.$tv.resetScrollEl();
  }

  counter(i: number) {
    return new Array(i);
  }
}
