import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    console.log("gettinbg to service");
     return this.http.get(this.apiUrl)
      .map((res:Response) => res.json());
     
    } 

    deleteSmoothie(idSmoothie):  Observable<ISmoothie>  {
      return this.http.get('http://localhost:3100/api/Smoothies/delete'+ idSmoothie)
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