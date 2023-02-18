import { Annonce } from './../models/annonce';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


// const baseUrl = 'http://localhost:8080/api/tutorials';




@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  REST_API:string ='http://localhost:4000/computer';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }


  // Add
  AddAnnonce(data: Annonce): Observable<any> {
    let API_URL = `${this.REST_API}/create`;
    return this.httpClient
      .post(API_URL, data)
      .pipe(catchError(this.handleError));
  }
  // Get all objects
  GetAnnonces() {
    return this.httpClient.get(`${this.REST_API}/getall`);
  }
  // Get single object
  GetAnnonce(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/getbyid/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }
  // Update
  updateAnnonce(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Delete
  deleteAnnonce(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/del/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}






