import { Injectable, Inject } from '@angular/core';
import { Logger } from './logger';
import { ApiCallService } from './api-call.service';
import { REPORTERS } from './asociate_multiple_different_dervices_for_only_one_Single_token/reports.token';
import { Reporter } from './asociate_multiple_different_dervices_for_only_one_Single_token/reporter';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';
  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}
  log(mssg: string): void {
    this.reporters.forEach((r) => {
      r.report();
    });
    console.log(`${this.prefix} : (Experimental) ${mssg}`);
  }
}
