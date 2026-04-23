import { Component, Input, OnInit } from '@angular/core';
import { RentalHouseDisplay } from '../../core';

@Component({
  selector: 'app-lice-land-display',
  imports: [],
  templateUrl: './lice-land-display.html',
  styleUrl: './lice-land-display.scss',
})
export class LiceLandDisplay implements OnInit{


@Input() house: RentalHouseDisplay;

  ngOnInit(): void {
  }

}
