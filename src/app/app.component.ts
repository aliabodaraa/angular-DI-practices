import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from './use ViewProviders/gallery-logger.service';
import { GallerySlideLoggerService } from './use ViewProviders/gallery-slide-logger.service';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <app-gallery>
        <app-gallery-slide></app-gallery-slide>
        <app-gallery-slide></app-gallery-slide>
      </app-gallery>
    </main>
  `,
  providers: [
    { provide: GalleryLoggerService, useExisting: GallerySlideLoggerService },
  ],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
