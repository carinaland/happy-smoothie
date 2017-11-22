import { Injectable } from '@angular/core';
var api = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=';
import {Http, Headers, RequestOptions, Jsonp, URLSearchParams} from '@angular/http'

@Injectable()
export class TropicalFruitsService {

  details: any;

  constructor(private http:Http, private jsonp: Jsonp) { }

  getDetails(ingrediant) {
    /*var request = api + ingrediant;
    let queryParams: URLSearchParams = new URLSearchParams();
    queryParams.set('callback', 'JSONP_CALLBACK');
    var pine =  this._jsonp.get(request, {search: queryParams })
        .map(res => res.json());*/


    const queryParam = "?c=JSONP_CALLBACK";
    var apiUrl = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=pineapple?c=JSONP_CALLBACK';
    console.log('http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=pineapple' + queryParam);
    var pine = this.jsonp.request(apiUrl)
          .map(res => {
            return res.json().results.map(item => {
              this.details = item;
          });
        });
    console.log(pine);
    console.log(this.details);
    return pine;
  }

}

