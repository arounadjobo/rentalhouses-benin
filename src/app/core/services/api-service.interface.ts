import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IApiServiceInterface{
  get(path: string, params?: HttpParams): Observable<any>;
}