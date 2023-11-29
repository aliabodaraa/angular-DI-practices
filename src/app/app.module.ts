import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
