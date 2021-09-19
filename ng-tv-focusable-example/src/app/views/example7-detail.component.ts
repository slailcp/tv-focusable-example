import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-example7-detail',
  template: `
  <div class="tv-demo">
    <img src="../assets/tv/detail2.jpg"/>
  </div>
  `,
  styles: [`
  img{width: 100%;margin-top: 46px;}

  `]
})
export class Example7DetailComponent implements OnInit{
  constructor() { }
  ngOnInit() { }
}
