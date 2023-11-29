import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';
  constructor() {}
  log(mssg: string): void {
    console.log(`${this.prefix} : (Experimental) ${mssg}`);
  }
}
