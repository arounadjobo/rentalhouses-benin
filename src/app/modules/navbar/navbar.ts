import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '../../core/constant/app-routes';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
appRoutes = AppRoutes

}
