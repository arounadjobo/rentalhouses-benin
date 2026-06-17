import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../../core';
import { MainPharma } from './main-pharma/main-pharma';

const routes: Routes = [
   {
      path: '',
      children: [
        {
          path: AppRoutes.pharmacy,
          component: MainPharma,
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
