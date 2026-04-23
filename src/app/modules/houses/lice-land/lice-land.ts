import { Component, inject, OnInit } from '@angular/core';
import {  AppServices, RentalHouseDisplay, RentalHouseForDisplay } from '../../../core';
import { LiceLandDisplay } from '../../../shared';

@Component({
  selector: 'app-lice-land',
  imports: [LiceLandDisplay],
  templateUrl: './lice-land.html',
  styleUrl: './lice-land.scss',
})
export class LiceLand implements OnInit {
  private readonly service = inject(AppServices);
  
  houses: RentalHouseDisplay[] = [];

  ngOnInit(): void {
    this.getHouses();
    console.log(this.houses);
  }

  private getHouses() {
    this.service.getRentalHouse().subscribe({
      next: (response: RentalHouseForDisplay[]) => this.OnGetHouses(response),
      error: (error) => this.OnGetHousesError(error),
    });
  }

  OnGetHousesError(error: any): void {
    console.error(error);
  }

  OnGetHouses(response: RentalHouseForDisplay[]): void {
    const values = response.map((x) => new RentalHouseDisplay(x));
    this.houses.push(...values);
  }
}
