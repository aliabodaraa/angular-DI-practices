import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './logger.legacy';
import { APP_CONFIG, AppConfig } from './commit 4/config.token';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LoggerService,
      useFactory: (config: AppConfig, apiCallService: ApiCallService) => {
        return config.experimentalEnabled
          ? new ExperimentalLoggerService(apiCallService)
          : new LoggerService();
      },
      deps: [APP_CONFIG, ApiCallService],
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
