import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  private readonly _baseUrl: string = 'https://gutendex.com';

  constructor(private _http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this._http.get(`${this._baseUrl}/${endpoint}`);
  }
}
