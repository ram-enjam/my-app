import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class FormapiService {
  // configUrl = 'localhost:8080/getdata';
  configUrl = 'assets/dummyData.json';
  constructor(private http: HttpClient) { }

  getDummyData(){
    return this.http.get<any>(this.configUrl);
  }

  submitFormData(formData: any){
    console.log('service contains form Data', formData)
    return this.http.post<any>(this.configUrl, formData).pipe(catchError(this.handleError('formData Failed', formData)))
  }

  handleError(arg0: string, data: any): (err: any, caught: Observable<any>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }


}
