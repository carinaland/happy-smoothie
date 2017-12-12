import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var api = 'https://peaceful-reef-13737.herokuapp.com/api/';

import {Http, Headers, RequestOptions} from '@angular/http'

@Injectable()
export class DetailsService {

  constructor(private http:Http) { }

  getSmoothie(idSmoothie) {
    return this.http.get(api + 'Smoothie/' + idSmoothie)
        .map(res => res.json());
  }

  getIngrediants(idSmoothie) {
    console.log(idSmoothie);
    return this.http.get(api + 'Smoothie/' + idSmoothie + '/Ingrediants')
        .map(res => res.json());
  }

}
