import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * @method get
   * @description Method for http get request
   * @param url - An object containing the body
   */
  public get<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, { observe: 'response' })
      .pipe(map(resp => resp.body));
  }
}
