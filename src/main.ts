import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideNzI18n } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), importProvidersFrom(BrowserAnimationsModule),
    provideNzI18n(es_ES), provideHttpClient()
  ]
  
})
  .catch((err) => console.error(err));

  