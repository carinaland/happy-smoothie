import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http'
import { ISmoothie } from '../smoothielist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SmoothieService {
  private apiUrl = "http://localhost:3100/api/Smoothies";
  constructor (
    private http: Http
  ) {}

  
  getData() {
     return this.http.get(this.apiUrl)
      .map((res:Response) => res.json());
     
    }

    deleteSmoothie(idSmoothie) {
    console.log('go to service');

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var data = JSON.stringify(idSmoothie);
      return this.http.post('http://localhost:3100/api/Smoothies/delete', data, {headers: headers})
            .map(res => res.json());
  }
/*
  getData(idSmoothie: number):  Observable<ISmoothie>  {
      return this.http.get(this.apiUrl + `/${idSmoothie}`)
          .map(res => res.json());
  } */

  /*
updateSmoothie(id : number, name: ISmoothie) : Observable<ISmoothie> {
  return this.http.put(this.apiUrl + `/${id}`, name)
    .map((res) => res.json())
}
*/
/*
deleteSmoothie(idSmoothie: number):  Observable<ISmoothie>  {
      return this.http.get(this.apiUrl + `/${idSmoothie}`)
          .map(res => res.json());
  } */




/*
  getSmoothie(idSmoothie) {
    return this.http.get("http://localhost:3100/api/smoothies" + idSmoothie)
        .map(res => res.json());
  }
*/
}