import { Component, inject, OnInit, signal } from '@angular/core';
import { AppServices, RentalHouseDisplay, RentalHouseForDisplay } from '../../../core';
import { LiceLandDisplay } from '../../../shared';

@Component({
  selector: 'app-lice-land',
  imports: [LiceLandDisplay],
  templateUrl: './lice-land.html',
  styleUrl: './lice-land.scss',
})
export class LiceLand implements OnInit {
  private readonly service = inject(AppServices);

  houses = signal<RentalHouseDisplay[]>([]);
  isLoading = signal<boolean>(true);

  ngOnInit(): void {
    this.getHouses();
  }

  private getHouses() {
    this.service.getRentalHouse().subscribe({
      next: (response: RentalHouseForDisplay[]) => this.OnGetHouses(response),
      error: (error) => this.OnGetHousesError(error),
    });
  }

  OnGetHousesError(error: any): void {
    console.error(error);
    this.isLoading.set(false);
  }

  OnGetHouses(response: RentalHouseForDisplay[]): void {
    const values = response.map((x) => new RentalHouseDisplay(x));
    this.houses.set(values);
    this.isLoading.set(false);
  }
}
