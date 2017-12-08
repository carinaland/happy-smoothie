import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { ISmoothie } from '../smoothielist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SmoothieService {
  private apiUrl = "http://localhost:3100/api/Smoothies";
  constructor(
    private http: Http
  ) { }


  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json());
  }

  getIngrediants(idSmoothie) {
    return this.http.get('http://localhost:3100/api/Smoothie/' + idSmoothie + '/Ingrediants')
      .map(res => res.json()).toPromise();
  }

  /*
  getLastSmoothID(){
    return this.http.get(this.apiUrl)
      .map((res) => res.json());
  }
*/

  addSmoothie(smoothie) {
    console.log('Check add smoothie service!!!!!!');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var data = JSON.stringify(smoothie);
    console.log(data);
    console.log('getting there!!!!!!');
    return this.http.post('http://localhost:3100/api/Smoothies/Add', data, { headers: headers })
      .map(res => res.json());
  }


  updateSmoothie(smoothie) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = JSON.stringify(smoothie);
    console.log("check smoothie id: " + smoothie.idSmoothie);
    return this.http.put('http://localhost:3100/api/Smoothies/update/' + smoothie.idSmoothie, data, { headers: headers })
      .map(res => res.json());
  }


  deleteSmoothie(smoothieId) {
    console.log('Check delete smoothie service!!!!!!');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    var object = { 'idSmoothie': smoothieId }
    var data = JSON.stringify(object);
    console.log(data);
    console.log('getting there!!!!!!');
    return this.http.put('http://localhost:3100/api/Smoothies/delete/' + smoothieId, { headers: headers })
      .map(res => res.json());



    /*deleteSmoothie(idSmoothie: number) {
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
   
     var object = {'idSmoothie': idSmoothie}
     var data = JSON.stringify(object);
     console.log(data);
     return this.http.post('http://localhost:3100/api/Smoothies/delete', data, {headers: headers})
     .map(res => res.json()); 
   }*/
  }

}

 /*
    var data = JSON.stringify(idSmoothie);
    return this.http.post('http://localhost:3100/api/Smoothies/delete/:21', data, {headers: headers})
          .map((res:Response) => {console.log(res.toString())
          res.json()}); */