import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

export const APP_TOKEN = new InjectionToken<string>('token');

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    {
      provide: APP_TOKEN,
      useValue: 'main-shell-token',
    },
  ],
};
