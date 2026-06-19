import { Component } from '@angular/core';
import { AppRoutes } from '../../../core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-resto',
  imports: [RouterLink], 
  templateUrl: './main-resto.html',
  styleUrl: './main-resto.scss',
})
export class MainResto {
 appRoute = AppRoutes;
}
