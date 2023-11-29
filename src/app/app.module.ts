import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './commit 1/base/base.component';
import { Child1Component } from './commit 1/child1/child1.component';
import { LoggerConsumerComponent } from './commit 2/logger-consumer/logger-consumer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Child1Component,
    LoggerConsumerComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
