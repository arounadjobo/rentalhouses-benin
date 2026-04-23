import { inject, Injectable } from '@angular/core';
import { IApiServiceInterface } from './api-service.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiLocalService implements IApiServiceInterface {
  private apiUrl = inject<string>('API_BASE_URL' as any);
  private httpClient = inject(HttpClient);

  private options = {};

  constructor() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    httpHeaders.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    this.options = { headers: httpHeaders };
  }

  public get(path: string, params?: any): Observable<any> {
    return this.httpClient.get(this.apiUrl + path, { params: params });
  }

}

