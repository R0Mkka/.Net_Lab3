import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { INumberListObject, IResultNumberObject } from '../models';

@Injectable()
export class SecondTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public numberListGcd(numberList: INumberListObject): Observable<IResultNumberObject> {
    return this.http.post<IResultNumberObject>('/second-task/number-list-gcd', numberList);
  }
}
