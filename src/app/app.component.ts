import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})

export class AppComponent {

  loadedFeature = 'recipe';

  constructor(private loggingService: LoggingService) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;

    this.loggingService.logMessage('[AppComponent][onNavigate] - Inicio');
  }

}
