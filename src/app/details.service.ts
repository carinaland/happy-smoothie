import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var api = 'http://localhost:3100/api/';

import {Http, Headers, RequestOptions} from '@angular/http'

@Injectable()
export class DetailsService {

  constructor(private http:Http) { }

  getSmoothie(idSmoothie) {
    return this.http.get(api + 'Smoothie/' + idSmoothie)
        .map(res => res.json());
  }

  getIngrediants(idSmoothie) {
    return this.http.get(api + 'Smoothie/' + idSmoothie + '/Ingrediants')
        .map(res => res.json());
  }

}
