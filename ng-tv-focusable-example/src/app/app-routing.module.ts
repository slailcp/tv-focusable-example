import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './views/example1.component';
import { Example2Component } from './views/example2.component';
import { Example3Component } from './views/example3.component';
import { Example4Component } from './views/example4.component';
import { Example5Component } from './views/example5.component';
import { Example6Component } from './views/example6.component';
import { Example7Component } from './views/example7.component';
import { Example7DetailComponent } from './views/example7-detail.component';
import { Example8Component } from './views/example8.component';

const routes: Routes = [
  {
    path: 'example1',
    component: Example1Component
  },
  {
    path: 'example2',
    component: Example2Component
  },
  {
    path: 'example3',
    component: Example3Component
  },
  {
    path: 'example4',
    component: Example4Component
  },
  {
    path: 'example5',
    component: Example5Component
  },
  {
    path: 'example6',
    component: Example6Component
  },
  {
    path: 'example7',
    component: Example7Component
  },
  {
    path: 'example7-detail',
    component: Example7DetailComponent
  },
  {
    path: 'example8',
    component: Example8Component
  },
  {path: '', redirectTo: '/example1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
