import { Component } from '@angular/core';
import { LoggingService } from 'src/app/logging.service';

@Component({
  selector: 'app-log-monitoraggio',
  templateUrl: './log-monitoraggio.component.html',
  styleUrls: ['./log-monitoraggio.component.css']
})
export class LogMonitoraggioComponent {
  constructor(private loggingService: LoggingService) {}

  logMessage() {
    this.loggingService.log('This is a log message');
  }

  warnMessage() {
    this.loggingService.warn('This is a warning message');
  }

  errorMessage() {
    this.loggingService.error('This is an error message');
  }
}