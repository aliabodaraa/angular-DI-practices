import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { APP_CONFIG } from './asociate_multiple_different_dervices_for_only_one_Single_token/config.token';
export function loggerFactory(
  injector: Injector
): ExperimentalLoggerService | LoggerService {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory, //will resolve as a new instance of ExperimentalLoggerService
      deps: [Injector],
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(private logger: LoggerService) {}
  ngOnInit(): void {
    console.log(this.logger);
    this.logger.prefix = 'App Component';
    this.logger.log('App Component Init ...');
  }
}
