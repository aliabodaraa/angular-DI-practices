import { Injectable, Inject } from '@angular/core';
import { Logger } from './logger';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';
  constructor(private apiCallService: ApiCallService) {}
  log(mssg: string): void {
    console.log(`${this.prefix} : (Experimental) ${mssg}`);
  }
}
