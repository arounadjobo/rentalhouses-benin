import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, Route, Routes } from '@angular/router';
import { AppRoutes } from './core/constant/app-routes';
import { APP_ROUTES } from './core/constant/layout';


const appRoutes : Routes = [
  {
    path: AppRoutes.home,
    children: APP_ROUTES
  }
]
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes)
  ]
};
