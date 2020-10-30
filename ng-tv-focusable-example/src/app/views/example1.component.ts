import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  template: `
  <div class="demo">
    <span class="span" focusable> 可获取焦点的元素 </span>
    <span class="span no"> no </span>
    <span class="span" focusable> 可获取焦点的元素 </span>
    <span class="span no"> no </span>
    <span class="span" focusable> 可获取焦点的元素 </span>
    <span class="span no"> no </span>
    <span class="span" focusable> 可获取焦点的元素 </span>
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
      transition: all .5s;
    }
    .span.no{background:#ccc}
    .focus{transform: scale(1.2);box-shadow: 0 0 20px blue}
  `],
})
export class Example1Component implements OnInit {
  count = 105
  constructor() {  }

  ngOnInit() { }


  counter(i: number) {
    return new Array(i);
  }

}
