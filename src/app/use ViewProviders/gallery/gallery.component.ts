import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery',
  template: ` <div class="app-gallery">
    <h1>Gallery</h1>
    <div class="gallery-content">
      <ng-content></ng-content>
      <!-- to control what kind of slodes we will provide -->
    </div>
  </div>`,
  viewProviders: [GalleryLoggerService], //view Providers here will says that this instanse of GalleryLoggerService should be available only for my view all things in template except `ng-content` because the latest it is kind of slots where will be rendered part of another view - viewProviders will make the service apply only for the contents that declares in this component not incloding parts the only rendered
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Gallery Initialization');
  }
}
