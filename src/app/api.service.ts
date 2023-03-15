import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HomePage, BlackSeries } from 'src/assets/message';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getHomePage() {
    let url = 'http://localhost:8000/v1/api/'
    return this.http.get<HomePage>(url);
  }

  getBlackSeries() {
    let url = 'http://localhost:8000/v1/api/black-series/get-all/'
    return this.http.get<BlackSeries[]>(url);
  }
}

