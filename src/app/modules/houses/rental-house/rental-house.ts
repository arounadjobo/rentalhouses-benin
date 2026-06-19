import { Component, OnInit } from '@angular/core';
import { LiceLandForDisplay } from '../../../core/app-models';

@Component({
  selector: 'app-rental-house',
  imports: [],
  templateUrl: './rental-house.html',
  styleUrl: './rental-house.scss',
})
export class RentalHouse implements OnInit{


  licehouses: LiceLandForDisplay[] = [];
 

  ngOnInit(): void {
  }

  getLiceHouse(){
    
  }

 

}
