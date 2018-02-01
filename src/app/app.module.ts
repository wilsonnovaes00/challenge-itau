import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './+shared/angular.module';
import { RoutingModule } from './route-config/routing.module';
import { GithubServiceService } from './services/github-service.service';
import { SearchComponent } from './components/search/search.component';
import {  FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewProfileComponent,
    SearchProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
