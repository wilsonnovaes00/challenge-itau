import { NgModule } from '@angular/core';

import {Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { AppComponent } from '../app.component';
import { SearchComponent } from '../components/search/search.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SearchComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
