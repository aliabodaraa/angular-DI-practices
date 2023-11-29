import { Injectable, Inject } from '@angular/core';
import { Logger } from './logger';
import { APP_CONFIG, AppConfig } from './config.token';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';
  constructor(@Inject(APP_CONFIG) private config: AppConfig) {
    console.log('ExperimentalLoggerService => constructor => config', config);
  }
  log(mssg: string): void {
    console.log(`${this.prefix} : (Experimental) ${mssg}`);
  }
}
