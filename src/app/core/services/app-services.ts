import { inject, Injectable } from '@angular/core';
import { ApiServices } from './api-services';
import { RentalHouseForDisplay } from '../api-models/rentalhouse-for-display';
import { Observable } from 'rxjs';
import { ApiEndpoint } from '../constant/api-endpoint';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  private apiService = inject(ApiServices);

  getRentalHouse(): Observable<RentalHouseForDisplay[]> {
    return this.apiService.get(ApiEndpoint.getHouses);
  }
}
