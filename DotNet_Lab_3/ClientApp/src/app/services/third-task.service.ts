import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITwoNumbersObject, IResultNumberObject } from '../models';

@Injectable()
export class ThirdTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public gcdBinary(twoNumberObject: ITwoNumbersObject): Observable<IResultNumberObject> {
    return this.http.post<IResultNumberObject>('/third-task/gcd-binary', twoNumberObject);
  }
}
