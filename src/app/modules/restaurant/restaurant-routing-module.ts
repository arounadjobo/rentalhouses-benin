import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../../core';
import { MainResto } from './main-resto/main-resto';

const routes: Routes = [
   {
      path: '',
      children: [
        {
          path: AppRoutes.restaurant,
          component: MainResto,
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestaurantRoutingModule { }
