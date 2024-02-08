import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  environmentProd } from '../../../environments/environment.prod';
import { environment }  from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getToken() {
    throw new Error('Method not implemented.');
  }

  stagingUrl : string = environment.stagingUrl;
  prodUrl : string = environmentProd.prodUrl;
  url: string = this.stagingUrl;

  constructor( private http: HttpClient,private router : Router) {
    // postApiService(endPoint:any,data:any){
    //   return this.http.post(this.url + endPoint, data);

    // }


    // getToken(){
    //   return localStorage.getItems('token' ? 'token' : {})
    // }
   }
}
