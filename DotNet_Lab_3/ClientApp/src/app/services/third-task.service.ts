import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITwoNumbersObject, IResultObject } from '../models';

@Injectable()
export class ThirdTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public gcdBinary(twoNumberObject: ITwoNumbersObject): Observable<IResultObject> {
    return this.http.post<IResultObject>('/third-task/gcd-binary', twoNumberObject);
  }
}
