import { Component, Input, OnInit } from '@angular/core';
import { RentalHouseDisplay } from '../../core';

@Component({
  selector: 'app-lice-land',
  imports: [],
  templateUrl: './lice-land.html',
  styleUrl: './lice-land.scss',
})
export class LiceLand implements OnInit{

@Input() house: RentalHouseDisplay;


 ngOnInit(): void {
 }
}
