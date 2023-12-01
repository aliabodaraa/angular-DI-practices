import { Injectable } from '@angular/core';
import { Logger } from '../logger';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService implements Logger {
  constructor() {}
  prefix = 'Gallery';
  log(mssg: string): void {
    console.log(`${this.prefix} : (Gallery) ${mssg}`);
  }
}
