import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example1Component } from './views/example1.component';
import { Example2Component } from './views/example2.component';
import { Example3Component } from './views/example3.component';
import { Example4Component } from './views/example4.component';
import { Example5Component } from './views/example5.component';
import { Example6Component } from './views/example6.component';
import { Example7Component } from './views/example7.component';
import { Example7DetailComponent } from './views/example7-detail.component';
import { Example8Component } from './views/example8.component';
import { Example9Component } from './views/example9.component';
import { Example10Component } from './views/example10.component';
import { Example11Component } from './views/example11.component';

import { TvFocusableModule, $tv } from 'ng-tv-focusable';

declare global {
  interface Window {
    $tv: any;
  }
}

window.$tv = $tv; // 定义全局变量


@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component,
    Example7Component,
    Example7DetailComponent,
    Example8Component,
    Example9Component,
    Example10Component,
    Example11Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvFocusableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
