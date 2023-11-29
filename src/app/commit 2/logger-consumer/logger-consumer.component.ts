import { Component, OnInit } from '@angular/core';
import { DateLoggerService } from 'src/app/date-logger.service';
import { LoggerService } from 'src/app/logger.service';
import { MinimalLogger } from 'src/app/minimal-logger.service';

@Component({
  selector: 'app-logger-consumer',
  template: ` <p>logger-consumer works!</p> `,
  styles: [],
  providers: [
    {
      provide: LoggerService,
      useClass: DateLoggerService,
    },
    {
      provide: MinimalLogger, //shrink that API surface to just the members you actually need.
      useExisting: LoggerService, //based on useClass in the pervious lines LoggerService will be DateLoggerService
    },
  ],
})
export class LoggerConsumerComponent implements OnInit {
  constructor(private minimalLogger: MinimalLogger) {
    this.minimalLogger.logInfo('using minimalLogger -- logInfo');
    this.minimalLogger.logs = [];
  }

  ngOnInit(): void {}
}
