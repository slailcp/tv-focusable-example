import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { $tv } from "ng-tv-focusable"


@Component({
  selector: 'app-example7',
  template: `
  <div class="tv-box">
    <div class="item-box">
      <div class="perspective">
        <div class="item" [ng-focusable] *ngFor='let item of list ;let index = index'
        [ngStyle]="{
          'left': -100 * index - index * 20 +'px',
          'z-index': activeIndex === index ? 1100 :1000 - abs(activeIndex - index) * 5,
          'transform': activeIndex < index ? 'rotateY(-30deg)':activeIndex === index?'rotateY(0deg)':'rotateY(30deg)' 
        }"
        (left)="left(index,$event)" (right)="right(index,$event)" (down)="nofocus()" (up)="nofocus()" (click)="skip(index)">
          <img [src]="item.url"/>
          <span class="txt">{{item.title}}</span>
        </div>
      </div>
    </div>
    <div class="bottom-img"><img src="../../assets/tv/r-menu.png"/></div>
    <div class="loading" *ngIf="loadingShow"><img src="../../assets/tv/loadingCancel.gif"/></div>
  </div>
  `,
  styles: [`
  .loading{position: fixed ;top:50%;left:50%;margin:-100px 0 0 -100px; }
  .loading img{width:200px;}
  .tv-box{background: #010d19;margin-top:40px}
  .item-box{width:1180px;height:600px;margin:0 auto;overflow: hidden;padding:50px;transition: all .5s ;}
  .perspective{display: flex;perspective:2210px;width:2210px;}
  .item{
    flex:0 0 350px;transition: all 1s;
    position: relative;background:none;
  }
  .item img{width:350px;height:569px;border-radius:30px;box-shadow:1px 1px 43px rgba(198, 184, 255, 0.8);border:3px solid #4a75a2;box-sizing: border-box;}
  .item .txt{text-align: center;display: inline-block;width:100%;line-height:46px;color:#fff;}
  .item:last-child{margin-right:100px;}
  
  .bottom-img,.nav-img{width:100%;text-align: center;}
  .focus { z-index: 99999!important;transform: none!important;  }
  .focus img{border-color:#c3b7ff}
  `]
})
export class Example7Component implements OnInit, OnDestroy, AfterViewInit {
  constructor(public router: Router) {

  }
  loadingShow = false
  activeIndex = 2
  list = [
    { url: ("../../assets/tv/r-1.jpg"), title: '灰姑娘1' },
    { url: ("../../assets/tv/r-2.jpg"), title: '灰姑娘2' },
    { url: ("../../assets/tv/r-3.jpg"), title: '灰姑娘3' },
    { url: ("../../assets/tv/r-4.jpg"), title: '灰姑娘4' },
    { url: ("../../assets/tv/r-5.jpg"), title: '灰姑娘5' },
    { url: ("../../assets/tv/r-6.jpg"), title: '灰姑娘6' },
    { url: ("../../assets/tv/r-7.jpg"), title: '灰姑娘7' },
    { url: ("../../assets/tv/r-8.jpg"), title: '灰姑娘8' },
    { url: ("../../assets/tv/r-9.jpg"), title: '灰姑娘9' },
  ]

  ngOnInit() { }

  ngAfterViewInit() {
    // document.body.style.backgroundColor = '#010d19';
    window.$tv.distanceToCenter = true;
    window.$tv.setScrollEl(document.querySelector('.item-box'))
    window.$tv.requestFocus(window.$tv.getElementByPath("//div[@class='perspective']/div[3]"));
  }
  ngOnDestroy() { window.$tv.resetScrollEl(); }
  abs(num) { return Math.abs(num) }
  skip(index) {
    if (index === 8) {
      this.loadingShow = true;
      setTimeout(() => {
        this.router.navigate(['example7-detail']);
      }, 1000)
    }
  }
  nofocus(event) {
    window.$tv.requestFocus(event.target);
  }
  right(index, event) {
    if (index === this.list.length - 1) {
      $tv.next("right");
      return;
    }
    this.activeIndex = index + 1;
    $tv.next("right")
  }
  left(index, event) {
    if (index === 0) { $tv.next("left"); return; }
    this.activeIndex = index - 1;
    $tv.next("left")
  }
}
