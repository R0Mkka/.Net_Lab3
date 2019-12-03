import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITwoNumbersObject, IResultNumberObject } from '../models';

@Injectable()
export class FirstTaskService {
  constructor(
    private http: HttpClient,
  ) { }

  public gcd(twoNumberObject: ITwoNumbersObject): Observable<IResultNumberObject> {
    return this.http.post<IResultNumberObject>('/first-task/gcd', twoNumberObject);
  }
}
