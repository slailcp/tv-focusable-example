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

import { TvFocusableModule } from 'ng-tv-focusable';


@NgModule({
  declarations: [
    AppComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    Example4Component,
    Example5Component,
    Example6Component
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
