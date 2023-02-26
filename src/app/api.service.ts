import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HomePage } from 'src/assets/message';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {
  }

  getHomePage() {
    let url = 'http://localhost:8080/v1/api/'
    return this.http.get<HomePage>(url);
  }
}

