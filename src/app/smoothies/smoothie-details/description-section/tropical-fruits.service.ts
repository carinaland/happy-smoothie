import { Injectable } from '@angular/core';
var api = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=';
import {Http, Headers, RequestOptions, Jsonp, URLSearchParams} from '@angular/http'

@Injectable()
export class TropicalFruitsService {

  details: any;

  constructor(private http:Http, private jsonp: Jsonp) { }

  getDetails(ingrediant) {

    const queryParam = "?c=JSONP_CALLBACK";
    var apiUrl = 'http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=pineapple';
    var pine = this.http.get(apiUrl)
          .map(res => {
              console.log(res.json().results[0].botname);
            return res.json().results.map(item => {
              this.details = item;
          });
        });
    console.log(pine);
    console.log(this.details);
    return pine;
  }

    agetDetails(ingrediant) {

        const queryParam = "&callback=JSONP_CALLBACK";
        var apiUrl = 'http://api.tropicalfruitandveg.com/tfvjsonapi.php?tfvitem=';
        let promise = this.jsonp.get(apiUrl + ingrediant + queryParam)
            .map((response: any) =>
                response.json()
            ).toPromise()
        return promise;
    }

}

