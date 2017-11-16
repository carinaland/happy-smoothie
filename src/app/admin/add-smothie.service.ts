import { Injectable } from '@angular/core';
import { ISmoothie } from 'app/smoothielist';
import { Observable } from 'rxjs/Observable';
import {Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map';
@Injectable()
export class AddSmothieService {

  constructor (
    private http: Http
  ) {}

  /*
    addSmoothie(Smooth) : Observable<ISmoothie> {
      console.log('smoothi added');
      return this.http.post('http://localhost:3100/api/smoothies', {Smooth})
        .map((res) => res.json())
    } */
    addSmoothie(Smooth){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
      var data = JSON.stringify(Smooth);
      console.log(data);
  
      return this.http.post('http://localhost:3100/api/smoothies', data, {headers: headers})
          .map(res => res.json());
    }
}

