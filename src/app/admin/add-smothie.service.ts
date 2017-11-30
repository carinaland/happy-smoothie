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

    addSmoothie(smoothie){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
  
      var data = JSON.stringify(smoothie);
      console.log(data);
      console.log('getting there!!!!!!');
      return this.http.post('http://localhost:3100/api/Smoothies/Add', data, {headers: headers})
          .map(res => res.json());
    //  console.log('serveice end'); 
    }

}

