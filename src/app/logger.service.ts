import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  prefix = 'root';
  constructor() {}
  log(mssg: string): void {
    console.log(`${this.prefix} : ${mssg}`);
  }
  logInfo(msg: any) {
    console.log('logInfo', msg);
  }
  logDebug(msg: any) {
    console.log('logDebug', msg);
  }
  logError(msg: any) {
    console.log('logError', msg);
  }
}
