import { Component, OnInit } from '@angular/core';
import { LiceLandForDisplay } from '../../../core/api-models/lice-land-for-display';
import { NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-rental-house',
  imports: [],
  templateUrl: './rental-house.html',
  styleUrl: './rental-house.scss',
})
export class RentalHouse implements OnInit{


  licehouses: LiceLandForDisplay[] = [];
 

  ngOnInit(): void {
    this.getLiceHouse();
  }

  getLiceHouse(){
    const house1 = new LiceLandForDisplay();
    house1.Title = "Manoir";
    house1.Price = 2500000;
    house1.Area = "Dokparou";
    house1.Description = "There is more space for your kids to play and big garden for parking your cars";
    house1.Bedrooms = 5;
    house1.ImagePath = 'https://image-cdn-homes.beforward.jp/images/agent-user/730/property/90161/1003416006_623673_20260425171556.jpg';
    this.licehouses.push(house1);
    
    const house2 = new LiceLandForDisplay();
    house2.Title = "Villa";
    house2.Price = 850000;
    house2.Area = "Albarika";
    house2.Description = "There is more space for your kids to play and big garden for parking your cars";
    house2.Bedrooms = 4;
    house2.ImagePath = 'https://image-cdn-homes.beforward.jp/images/agent-user/730/property/90161/1003416005_623674_20260425171556.jpg';
    this.licehouses.push(house2);
    
    const house3 = new LiceLandForDisplay();
    house3.Title = "Etage";
    house3.Price = 155000;
    house3.Area = "Banikanni";
    house3.Description = "There is more space for your kids to play and big garden for parking your cars";
    house3.Bedrooms = 8;
    house3.ImagePath = 'https://image-cdn-homes.beforward.jp/images/agent-user/454/property/90203/1005369757_624089_20260426060550.jpg'
    this.licehouses.push(house3);
  }

 

}
