import { inject, Injectable } from '@angular/core';
import { IApiServiceInterface } from './api-service.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServices implements IApiServiceInterface {
  private httpService = inject<IApiServiceInterface>('apiHttpSubService' as any);

  get(path: string, params?: any): Observable<any> {
    return this.httpService.get(path, params);
  }
}
