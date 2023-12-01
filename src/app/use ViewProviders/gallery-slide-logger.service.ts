import { Injectable } from '@angular/core';
import { Logger } from '../logger';

@Injectable({
  providedIn: 'root',
})
export class GallerySlideLoggerService implements Logger {
  constructor() {}
  prefix = 'GallerySlide';
  log(mssg: string): void {
    console.log(`${this.prefix} : (GallerySlide) ${mssg}`);
  }
}
