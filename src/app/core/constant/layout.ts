import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes';
import { Home } from '../../modules/home/home';
import { LiceLand, RentalApart, RentalHouse, RentalShop, RentalStore } from '../../modules';

export const APP_ROUTES: Routes = [
   {
    path: AppRoutes.home,
    component: Home,
  },
  {
    path: AppRoutes.rentalhouse,
    component: RentalHouse,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
  {
    path: AppRoutes.rentalapartment,
    component: RentalApart,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
   {
    path: AppRoutes.rentalshop,
    component: RentalShop,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
   {
    path: AppRoutes.rentalstore,
    component: RentalStore,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
   {
    path: AppRoutes.liceland,
    component: LiceLand,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
];
