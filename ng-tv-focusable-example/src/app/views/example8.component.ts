import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { $tv } from 'ng-tv-focusable';

@Component({
  selector: 'app-example8',
  template: `
  <div>
    <span class="open" focusable (click)="open()">click open dialog</span>

    <div class="demo">
      <!--    <div class="item" ref="myDiv">s</div>-->
      <div
        class="item"
        focusable
        *ngFor='let in of counter(10) ;let i = index' 
        (longPress)="longPress(index)"
      >
        {{ index }}
      </div>
    </div>
    <div
      [hidden]="show"
      style="
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      "
    >
      <div class="demo demo5">
        <span class="close" focusable (click)="close()"
          >click close dialog</span
        >
        <span *ngFor='let in of counter(30) ;let i = index'  class="item" focusable>
          {{ index }}
        </span>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .demo {
    margin: 0 auto;
    width: 600px;
  }
  .item {
    width: 100px;
    height: 100px;
    margin: 10px;
    line-height: 100px;
    display: inline-block;
    background-color: pink;
    box-sizing: border-box;
    vertical-align: top;
  }
  .item:nth-of-type(2) {
    position: relative;
    top: 25px;
  }
  .demo5 {
    width: 400px;
    height: 300px;
    overflow: hidden;
    background: #fff;
    margin-top:100px;
  }
  .demo5 .item{
    background:yellow
  }
  .demo5 .item:nth-of-type(2) {
    position: relative;
    top: 0;
  }

  .focus {
    transform: scale(1.1);
    border: 2px solid red;
    box-shadow: 0 0 20px red;
  }
  .focus123 {
    transform: scale(1.1);
    border: 2px solid green;
    box-shadow: 0 0 20px green;
  }
  .open,
  .close {
    cursor: pointer;
    display: block;
    width: 150px;
    line-height: 40px;
    padding: 0 20px;
    margin: 20px auto;
    border: 0;
    background: gray;
  }
  .open.focus123,.close.focus123 {
    border: 0;
    box-shadow: none;
    background: #ff6600;
    color: #fff;
  }
  `]
})
export class Example8Component implements OnInit, OnDestroy, AfterViewInit {
      

  ngOnInit() { }

  ngAfterViewInit() {
    $tv.focusClassName = "focus123";
    $tv.requestFocus(
      $tv.getElementByPath('//div[@class="demo"]/div[2]')
    );
  }
  ngOnDestroy() {
    $tv.reset();
  }
  counter(i: number) {
    return new Array(i);
  }
  show = true;
  focusEl = null;
  open() {
    this.show = !this.show;
    this.focusEl = document.querySelector(".focus123");
    $tv.limitingEl = document.querySelector(".demo5"); // 只有.demo5里面的focusable可以获取焦点
    $tv.scrollEl = $tv.getElementByPath(
      '//div[@class="demo demo5"]'
    );
    $tv.requestFocus(
      $tv.getElementByPath('//div[@class="demo demo5"]/span[3]')
    );
  }
  close() {
    this.show = !this.show;
    $tv.scrollEl = $tv.getElementByPath('//div[@class="demo"]');
    $tv.limitingEl = null;
    if(this.focusEl){$tv.requestFocus(this.focusEl);}
  }
  
}
