import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../../core';
import { MainResto } from './main-resto/main-resto';
import { Order } from './order/order';
import { Menu } from './menu/menu';
import { Inventory } from './inventory/inventory';
import { CashDraw } from './cash-draw/cash-draw';

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
     {
      path: '',
      children: [
        {
          path: AppRoutes.order,
          component: Order,
        },
      ],
    },
    {
      path: '',
      children: [
        {
          path: AppRoutes.menu,
          component: Menu,
        },
      ],
    },
    {
      path: '',
      children: [
        {
          path: AppRoutes.inventory,
          component: Inventory,
        },
      ],
    },
    {
      path: '',
      children: [
        {
          path: AppRoutes.payment,
          component: CashDraw,
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RestaurantRoutingModule { }
