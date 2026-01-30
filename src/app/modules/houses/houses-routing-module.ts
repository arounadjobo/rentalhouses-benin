import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentalHouse } from './rental-house/rental-house';
import { AppRoutes } from '../../core/constant/app-routes';
import { RentalApart } from './rental-apart/rental-apart';
import { RentalShop } from './rental-shop/rental-shop';
import { RentalStore } from './rental-store/rental-store';
import { LiceLand } from './lice-land/lice-land';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: AppRoutes.rentalhouse,
        component: RentalHouse,
      },
    ],
  },
   {
    path: '',
    children: [
      {
        path: AppRoutes.rentalapartment,
        component: RentalApart,
      },
    ],
  },
   {
    path: '',
    children: [
      {
        path: AppRoutes.rentalshop,
        component: RentalShop,
      },
    ],
  },
   {
    path: '',
    children: [
      {
        path: AppRoutes.rentalstore,
        component: RentalStore,
      },
    ],
  },
   {
    path: '',
    children: [
      {
        path: AppRoutes.liceland,
        component: LiceLand,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
