import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LegacyLogger } from './logger.legacy';
import { APP_CONFIG, AppConfig } from './config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(
    private logger: LoggerService,
    private experimentlLogger: ExperimentalLoggerService
  ) {}
  ngOnInit(): void {
    this.logger.prefix = 'App Component';
    this.logger.log('App Component Init ...');
  }
}
