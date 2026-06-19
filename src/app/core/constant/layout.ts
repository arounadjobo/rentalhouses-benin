import { Routes } from '@angular/router';
import { AppRoutes } from './app-routes';
import { Home } from '../../modules/home/home';
import {
  CashDraw,
  Inventory,
  LiceLand,
  MainPharma,
  MainResto,
  Menu,
  Order,
  RentalApart,
  RentalHouse,
  RentalShop,
  RentalStore,
} from '../../modules';

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
    path: AppRoutes.manageTenants,
    component: RentalApart,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
  {
    path: AppRoutes.payBills,
    component: RentalShop,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
  {
    path: AppRoutes.buyHouse,
    component: RentalStore,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },
  {
    path: AppRoutes.liceland,
    component: LiceLand,
    loadChildren: () => import('../../modules/houses/houses-module').then((m) => m.HousesModule),
  },

  {
    path: AppRoutes.pharmacy,
    component: MainPharma,
    loadChildren: () =>
      import('../../modules/pharmacy/pharmacy-module').then((m) => m.PharmacyModule),
  },
  {
    path: AppRoutes.restaurant,
    component: MainResto,
    loadChildren: () =>
      import('../../modules/restaurant/restaurant-module').then((m) => m.RestaurantModule),
  },
  {
    path: AppRoutes.inventory,
    component: Inventory,
    loadChildren: () =>
      import('../../modules/restaurant/restaurant-module').then((m) => m.RestaurantModule),
  },

  {
    path: AppRoutes.order,
    component: Order,
    loadChildren: () =>
      import('../../modules/restaurant/restaurant-module').then((m) => m.RestaurantModule),
  },
  {
    path: AppRoutes.menu,
    component: Menu,
    loadChildren: () =>
      import('../../modules/restaurant/restaurant-module').then((m) => m.RestaurantModule),
  },
  {
    path: AppRoutes.payment,
    component: CashDraw,
    loadChildren: () =>
      import('../../modules/restaurant/restaurant-module').then((m) => m.RestaurantModule),
  },
];
