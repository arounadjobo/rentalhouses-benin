import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Route, Routes } from '@angular/router';
import { AppRoutes } from './core/constant/app-routes';
import { APP_ROUTES } from './core/constant/layout';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {
    path: AppRoutes.home,
    children: APP_ROUTES,
  },
];
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: 'apiHttpSubService',
      useClass: environment.apiHttpServiceClass,
    },
    {
      provide: 'env',
      useValue: environment,
    },
    {
      provide: 'API_BASE_URL',
      useValue: environment.apiUrl,
    },
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
  ],
};
