import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITwoNumbersObject, IResultObject } from '../models';

@Injectable()
export class FirstTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public gcd(twoNumberObject: ITwoNumbersObject): Observable<IResultObject> {
    return this.http.post<IResultObject>('/first-task/gcd', twoNumberObject);
  }
}
