import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INumberListObject, IResultObject } from '../models';

@Injectable()
export class SecondTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public numberListGcd(numberList: INumberListObject): Observable<IResultObject> {
    return this.http.post<IResultObject>('/second-task/number-list-gcd', numberList);
  }
}
