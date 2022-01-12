import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: '*'
    })
  }

  private url: string = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  getHome(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}