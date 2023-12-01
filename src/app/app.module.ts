import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaseComponent } from './commit 1/base/base.component';
import { Child1Component } from './commit 1/child1/child1.component';
import { LoggerConsumerComponent } from './commit 2/logger-consumer/logger-consumer.component';
import { HeroOfTheMonthComponent } from './commit 3/hero-of-the-month/hero-of-the-month.component';
import { REPORTERS } from './asociate_multiple_different_dervices_for_only_one_Single_token/reports.token';
import { BrowserReporterService } from './asociate_multiple_different_dervices_for_only_one_Single_token/browser-reporter.service';
import { EngagingReporterService } from './asociate_multiple_different_dervices_for_only_one_Single_token/engaging-reporter.service';
import { GalleryComponent } from './use ViewProviders/gallery/gallery.component';
import { GallerySlideComponent } from './use ViewProviders/gallery-slide/gallery-slide.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    Child1Component,
    LoggerConsumerComponent,
    HeroOfTheMonthComponent,
    GalleryComponent,
    GallerySlideComponent,
  ],
  imports: [BrowserModule],
  providers: [
    {
      provide: REPORTERS,
      useExisting: BrowserReporterService,
      multi: true,
    },
    {
      provide: REPORTERS,
      useExisting: EngagingReporterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
