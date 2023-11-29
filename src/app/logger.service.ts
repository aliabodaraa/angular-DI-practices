import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
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
