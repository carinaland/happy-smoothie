import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ISmoothie } from '../smoothielist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SmoothieService {

  constructor (
    private http: Http
  ) {}

  
  getData() {
     return this.http.get(`http://localhost:3100/api/smoothies`)
      .map((res:Response) => res.json());
    }



/*
    getData(idSmoothie) {
      return this.http.get(`http://localhost:3100/api/smoothies` + 'Smoothie/' + idSmoothie)
          .map(res => res.json());
*/

   
}

