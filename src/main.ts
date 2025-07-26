import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app';
import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection()
  ]
});
